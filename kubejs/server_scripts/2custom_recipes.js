recipes = {
  draconic: {
    fusion: (e, output, craftingTier, energy, middleItem, ingredientList) => {
      //crafting tier: 1.draconium, 2.wyvern, 3.draconic, 4.chaotic
      tiers = ['WYVERN', 'DRACONIC', 'CHAOTIC']
      e.custom({
        type: 'draconicevolution:fusion_crafting',
        result: { item: output },
        catalyst: { item: middleItem },
        total_energy: energy,
        tier: (craftingTier > 4 && craftingTier <= 1) ? 'DRACONIUM' : tiers[craftingTier - 2],
        ingredients: ingredientList.map(item => (item.charAt(0) === '#') ? { tag: item.substring(1) } : { item: item })
      }).id(`kubejs:fusion_crafting/${output.replace(':', '/')}`)
    }
  },
  powah: {
    energizing: (e, ingredient, result, power, count) => {
      e.recipes.powah.energizing({
        ingredients: ingredient.map(i => Ingredient.of(i).toJson()),
        energy: power,
        result: Item.of(result, count ? count : 1).toResultJson()
      }).id(`kubejs:energizing/${result.replace(':', '/')}`)
    }
  },
  corail_woodcutter: {
    woodcutting: (e, entries) => {
      entries.forEach(([input, output, count]) => {
        e.custom({
          type: 'corail_woodcutter:woodcutting',
          ingredient: { item: input },
          result: output,
          count: count
        }).id(`kubejs:woodcutting/${output.replace(':', '/')}`)
      })
    }
  },
  mekanism: {
    x5_processing: (e, item) => {
      recipes.mekanism.dissolution(e, `#forge:ores/${item}`, 'mekanism:sulfuric_acid', `emendatusenigmatica:dirty_${item}`)
      recipes.mekanism.washing(e, 'minecraft:water', `emendatusenigmatica:dirty_${item}`, `emendatusenigmatica:clean_${item}`)
      recipes.mekanism.crystallizing(e, `emendatusenigmatica:dirty_${item}_slurry`, `emendatusenigmatica:${item}_crystal`)
      recipes.mekanism.injecting(e, `emendatusenigmatica:${item}_crystal`, 'mekanism:hydrogen_chloride', `emendatusenigmatica:${item}_shard`)
      recipes.mekanism.purifying(e, `emendatusenigmatica:${item}_shard`, 'mekanism:oxygen', `emendatusenigmatica:${item}_clump`)
      recipes.mekanism.crushing(e, `emendatusenigmatica:${item}_clump`, `emendatusenigmatica:${item}_dirty_dust`)

      if (!utils.listOf(['redstone', 'arcane', 'bitumen']).contains(item)) {
        recipes.mekanism.enriching(e, `emendatusenigmatica:${item}_dirty_dust`, `emendatusenigmatica:${item}_dust`)
      }
    },
    crushing: (e, input, output) => {
      let recipe = {
        type: 'mekanism:crushing',
        input: { ingredient: {} },
        output: { item: output }
      }

      input.startsWith('#')
        ? recipe.input.ingredient['tag'] = input.slice(1)
        : recipe.input.ingredient['item'] = input

      e.custom(recipe)
    },
    crystallizing: (e, input, output) => {
      e.custom({
        type: 'mekanism:crystallizing',
        chemicalType: 'gas',
        input: { amount: 100, gas: input },
        output: { item: output }
      })
    },
    dissolution: (e, input, gasInput, output) => {
      let recipe = {
        type: 'mekanism:dissolution',
        itemInput: { ingredient: {} },
        gasInput: { amount: 1, gas: gasInput },
        output: { slurry: output, amount: 1000, chemicalType: 'slurry' }
      }

      input.startsWith('#')
        ? recipe.itemInput.ingredient['tag'] = input.slice(1)
        : recipe.itemInput.ingredient['item'] = input

      e.custom(recipe)
    },
    enriching: (e, input, output) => {
      let recipe = {
        type: 'mekanism:enriching',
        input: { ingredient: {} },
        output: { item: output }
      }

      input.startsWith('#')
        ? recipe.input.ingredient['tag'] = input.slice(1)
        : recipe.input.ingredient['item'] = input

      e.custom(recipe)
    },
    injecting: (e, input, gasInput, output) => {
      let recipe = {
        type: 'mekanism:injecting',
        itemInput: { ingredient: {} },
        gasInput: { amount: 1, gas: gasInput },
        output: { item: output }
      }

      input.startsWith('#')
        ? recipe.itemInput.ingredient['tag'] = input.slice(1)
        : recipe.itemInput.ingredient['item'] = input

      e.custom(recipe)
    },
    purifying: (e, input, gasInput, output) => {
      let recipe = {
        type: 'mekanism:purifying',
        itemInput: { ingredient: {} },
        gasInput: { amount: 1, gas: gasInput },
        output: { item: output }
      }

      input.startsWith('#')
        ? recipe.itemInput.ingredient['tag'] = input.slice(1)
        : recipe.itemInput.ingredient['item'] = input

      e.custom(recipe)
    },
    washing: (e, fluidInput, slurryInput, output) => {
      e.custom({
        type: 'mekanism:washing',
        fluidInput: { amount: 5, tag: fluidInput },
        slurryInput: { amount: 1, slurry: slurryInput },
        output: { slurry: output, amount: 1 }
      })
    }
  },
  custom: {
    crushing: (e, inputs, outputs) => {
      e.recipes.mekanism.crushing(outputs, inputs)
      e.recipes.create.crushing(outputs, inputs)
      e.recipes.immersiveengineering.crusher(outputs, inputs)
      e.recipes.thermal.pulverizer(outputs, inputs)
    }
  }
}
