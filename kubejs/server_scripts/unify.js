//priority: 997
onEvent('recipes', e => {
  // #region Metal Unification
  function unifyMetal(name, ingotItem, dustItem, blockItem, nuggetItem) {
    e.replaceOutput(`#forge:ingots/${name}`, ingotItem)
    e.replaceOutput(`#forge:dusts/${name}`, dustItem)
    e.replaceOutput(`#forge:nuggets/${name}`, nuggetItem)
    e.replaceOutput(`#forge:storage_blocks/${name}`, blockItem)

    e.remove({ input: `#forge:ores/${name}`, type: 'immersiveengineering:crusher' })
    e.remove({ input: `#forge:ingots/${name}`, type: 'immersiveengineering:crusher' })
    e.remove({ input: [`#forge:ores/${name}`, `#forge:dusts/${name}`], output: `#forge:ingots/${name}`, type: 'minecraft:smelting' })
    e.remove({ input: [`#forge:ores/${name}`, `#forge:dusts/${name}`], output: `#forge:ingots/${name}`, type: 'minecraft:blasting' })
    e.remove({ id: `appliedenergistics2:grinder/${name}_dust_ingot` })

    if (name !== 'iron' && name !== 'gold' && name !== 'azure_silver' && name !== 'crimson_iron') {
      e.remove({ input: `#forge:ores/${name}`, output: `mekanism:dust_${name}`, type: 'mekanism:enriching' })
      e.remove({ input: `mekanism:dirty_dust_${name}`, output: `mekanism:dust_${name}`, type: 'mekanism:enriching' })
      e.remove({ input: `#mekanism:clumps/${name}`, output: `mekanism:dirty_dust_${name}`, type: 'mekanism:crushing' })
      e.remove({ input: `#forge:ores/${name}`, output: `mekanism:clump_${name}`, type: 'mekanism:purifying' })
      e.remove({ input: `mekanism:shard_${name}`, output: `mekanism:clump_${name}`, type: 'mekanism:purifying' })
      e.remove({ input: `#forge:ores/${name}`, output: `mekanism:shard_${name}`, type: 'mekanism:injecting' })
      e.remove({ input: `#mekanism:crystals/${name}`, output: `mekanism:shard_${name}`, type: 'mekanism:injecting' })
    }

    e.recipes.minecraft.smelting(ingotItem, `#forge:dusts/${name}`).xp(0.5)
    e.recipes.minecraft.blasting(ingotItem, `#forge:dusts/${name}`).xp(0.5)
    e.recipes.pedestals.pedestal_crushing({ ingredient: { tag: `forge:ingots/${name}` }, result: { item: dustItem } })
    e.recipes.immersiveengineering.crusher({ secondaries: [], result: { base_ingredient: { item: dustItem } }, input: { tag: `forge:ingots/${name}` }, energy: 3000 })

    if (!ingredient.of(`#forge:ores/${name}`).stacks.empty) {
      e.recipes.minecraft.smelting(ingotItem, `#forge:ores/${name}`).xp(1)
      e.recipes.minecraft.blasting(ingotItem, `#forge:ores/${name}`).xp(1)
      e.recipes.mekanism.enriching(item.of(dustItem, 2), `#forge:ores/${name}`)
      if (name !== 'allthemodium' && name !== 'vibranium' && name !== 'unobtainium') {
        e.remove({ id: `engineerstools:crushing/${name}_grit_crushing_recipe` })
        e.recipes.engineerstools.crafting_extended_shapeless({
          group: 'grit',
          ingredients: [
            { tag: `forge:ores/${name}` },
            { item: 'engineerstools:crushing_hammer' }
          ],
          result: { item: dustItem, count: 2 },
          aspects: { tool: 'engineerstools:crushing_hammer', tool_damage: 25 }
        })
      }
      e.recipes.immersiveengineering.crusher({
        secondaries: [],
        result: { count: 2, base_ingredient: { item: dustItem } },
        input: { tag: `forge:ores/${name}` },
        energy: 3000
      })
      e.remove({ id: `pedestals:pedestal_crushing/dust${name}` })
      e.recipes.pedestals.pedestal_crushing({
        ingredient: { tag: `forge:ores/${name}` },
        result: { item: dustItem, count: 2 }
      })
      e.remove({ id: `appliedenergistics2:grinder/${name}_dust_ore` })
      e.recipes.appliedenergistics2.grinder({
        input: { tag: `forge:ores/${name}` },
        result: { primary: { item: dustItem, count: 2 } },
        turns: 8
      })
    }

    e.replaceInput(nuggetItem, `#forge:nuggets/${name}`)
    e.replaceInput(dustItem, `#forge:dusts/${name}`)
    e.replaceInput(ingotItem, `#forge:ingots/${name}`)
    e.replaceInput(blockItem, `#forge:storage_blocks/${name}`)
  }
  function unifyCraftMetal(name, ingotItem, dustItem, blockItem, nuggetItem) {
    e.replaceInput(nuggetItem, `#forge:nuggets/${name}`)
    e.replaceInput(dustItem, `#forge:dusts/${name}`)
    e.replaceInput(ingotItem, `#forge:ingots/${name}`)
    e.replaceInput(blockItem, `#forge:storage_blocks/${name}`)

    e.replaceOutput(`#forge:ingots/${name}`, ingotItem)
    e.replaceOutput(`#forge:dusts/${name}`, dustItem)
    e.replaceOutput(`#forge:nuggets/${name}`, nuggetItem)
    e.replaceOutput(`#forge:storage_blocks/${name}`, blockItem)
  }
  //Vanilla MC
  unifyMetal('gold', 'minecraft:gold_ingot', 'alltheores:gold_dust', 'minecraft:gold_block', 'minecraft:gold_nugget')
  unifyMetal('iron', 'minecraft:iron_ingot', 'alltheores:iron_dust', 'minecraft:iron_block', 'minecraft:iron_nugget')

  //Multiple Mods
  unifyMetal('aluminum', 'alltheores:aluminum_ingot', 'alltheores:aluminum_dust', 'alltheores:aluminum_block', 'alltheores:aluminum_nugget')
  unifyMetal('copper', 'alltheores:copper_ingot', 'alltheores:copper_dust', 'alltheores:copper_block', 'alltheores:copper_nugget')
  unifyMetal('lead', 'alltheores:lead_ingot', 'alltheores:lead_dust', 'alltheores:lead_block', 'alltheores:lead_nugget')
  unifyMetal('nickel', 'alltheores:nickel_ingot', 'alltheores:nickel_dust', 'alltheores:nickel_block', 'alltheores:nickel_nugget')
  unifyMetal('platinum', 'alltheores:platinum_ingot', 'alltheores:platinum_dust', 'alltheores:platinum_block', 'alltheores:platinum_nugget')
  unifyMetal('silver', 'alltheores:silver_ingot', 'alltheores:silver_dust', 'alltheores:silver_block', 'alltheores:silver_nugget')
  unifyMetal('tin', 'alltheores:tin_ingot', 'alltheores:tin_dust', 'alltheores:tin_block', 'alltheores:tin_nugget')
  unifyMetal('uranium', 'alltheores:uranium_ingot', 'alltheores:uranium_dust', 'alltheores:uranium_block', 'alltheores:uranium_nugget')
  unifyMetal('zinc', 'alltheores:zinc_ingot', 'alltheores:zinc_dust', 'alltheores:zinc_block', 'alltheores:zinc_nugget')

  //Mekanism
  unifyMetal('osmium', 'alltheores:osmium_ingot', 'alltheores:osmium_dust', 'alltheores:osmium_block', 'alltheores:osmium_nugget')

  //Silent Gear
  unifyMetal('azure_silver', 'silentgear:azure_silver_ingot', 'silentgear:azure_silver_dust', 'silentgear:azure_silver_block', 'silentgear:azure_silver_nugget')
  unifyMetal('crimson_iron', 'silentgear:crimson_iron_ingot', 'silentgear:crimson_iron_dust', 'silentgear:crimson_iron_block', 'silentgear:crimson_iron_nugget')

  //Craft only metals
  unifyCraftMetal('steel', 'mekanism:ingot_steel', 'mekanism:dust_steel', 'mekanism:block_steel', 'mekanism:nugget_steel')

  //Thermal
  unifyCraftMetal('bronze', 'thermal:bronze_ingot', 'thermal:bronze_dust', 'thermal:bronze_block', 'thermal:bronze_nugget')
  unifyCraftMetal('constantan', 'thermal:constantan_ingot', 'thermal:constantan_dust', 'thermal:constantan_block', 'thermal:constantan_nugget')
  unifyCraftMetal('electrum', 'thermal:electrum_ingot', 'thermal:electrum_dust', 'thermal:electrum_block', 'thermal:electrum_nugget')
  // #endregion Metal Unification
  // #region Plate Unification
  utils.listOf(['iron', 'gold', 'copper', 'tin', 'lead', 'silver', 'nickel', 'bronze', 'electrum', 'invar', 'constantan', 'signalum', 'lumium', 'enderium', 'aluminum']).forEach(type => {
    e.replaceInput(`thermal:${type}_plate`, `#forge:plates/${type}`)
    e.replaceInput(`immersiveengineering:plate_${type}`, `#forge:plates/${type}`)
    e.replaceInput(type == 'gold' ? `create:${type}en_sheet` : `create:${type}_sheet`, `#forge:plates/${type}`)
    e.replaceOutput(`immersiveengineering:plate_${type}`, type == 'aluminum' ? `immersiveengineering:plate_${type}` : `thermal:${type}_plate`)
    e.replaceOutput(type == 'gold' ? `create:${type}en_sheet` : `create:${type}_sheet`, type == 'aluminum' ? `immersiveengineering:plate_${type}` : `thermal:${type}_plate`)
  })
  // #endregion Plate Unification

  e.replaceInput('thermal:bitumen', '#forge:bitumen')
  e.replaceInput('immersivepetroleum:bitumen', '#forge:bitumen')
  e.replaceInput('mekanism:dust_coal', '#forge:dusts/coal')
  e.replaceInput('minecraft:stick', '#forge:rods/wooden')
  e.replaceInput('pneumaticcraft:plastic', '#forge:plastic')
  e.replaceInput('thermal:coal_coke', '#forge:coal_coke')
  e.replaceInput('immersiveengineering:coal_coke', '#forge:coal_coke')

  e.replaceOutput('immersivepetroleum:bitumen', 'thermal:bitumen')
  e.replaceOutput('mekanism:sawdust', 'thermal:sawdust')
  e.replaceOutput('mekanism:dust_sulfur', 'thermal:sulfur_dust')
  e.replaceOutput('immersiveengineering:dust_sulfur', 'thermal:sulfur_dust')
  e.replaceOutput('mekanism:dust_quartz', 'thermal:quartz_dust')
  e.replaceOutput('appliedenergistics2:nether_quartz_dust', 'thermal:quartz_dust')
  e.replaceOutput('thermal:coal_coke', 'immersiveengineering:coke')
  e.replaceOutput('mekanism:dust_diamond', 'thermal:diamond_dust')
  e.replaceOutput('createaddition:diamond_grit', 'thermal:diamond_dust')

  // #region ExtraDisks & ExtraStorage
  function unifyExtraStorageDisks(entries) {
    entries.forEach(size => {
      utils.listOf([
        ['parts', 'part', 'part', 'storagepart'],
        ['storage_blocks', 'storage_block', 'block', 'block'],
        ['disks', 'disk/shaped', 'disk', 'disk']
      ]).forEach(([tagCategory, recipeCategory, disk, storage]) => {
        e.replaceInput(`extrastorage:${storage}_${size}k`, `#refinedstorage:${tagCategory}/items/${size}k`)
        e.replaceInput(`extrastorage:${storage}_${size * 64}k_fluid`, `#refinedstorage:${tagCategory}/fluids/${size * 64}k`)
        e.replaceOutput(`extrastorage:${storage}_${size}k`, `extradisks:${size}k_storage_${disk}`)
        e.replaceOutput(`extrastorage:${storage}_${size * 64}k_fluid`, `extradisks:${size * 64}k_fluid_storage_${disk}`)

        e.remove({ id: `extrastorage:${recipeCategory}/${storage}_${size}k` })
        e.remove({ id: `extrastorage:${recipeCategory}/${storage}_${size * 64}k_fluid` })
      })
      e.remove({ id: `extrastorage:disk/shapeless/disk_${size}k` })
      e.remove({ id: `extrastorage:disk/shapeless/disk_${size * 64}k_fluid` })
    })
  }

  unifyExtraStorageDisks([256, 1024, 4096, 16384])
  // #endregion ExtraDisks & ExtraStorage
  // #region Honey
  let simpleHoneys = ['cofh_core:honey', 'resourcefulbees:honey', 'cyclic:honey', 'create:honey']
  let customHoneys = ['resourcefulbees:catnip_honey', 'resourcefulbees:rainbow_honey']

  function createHoneyMixing(entries) {
    entries.forEach(([output, amount, honey, inputs, id]) => {
      let honeyMixingRecipe = { type: 'create:mixing', results: [{ item: output, amount: amount }] }
      let honeyMixingInputs = [{ fluidTag: 'forge:honey', amount: honey }]

      inputs.forEach(([input, type]) => honeyMixingInputs.push(type == 0 ? { item: input } : { tag: input }))
      honeyMixingRecipe = Object.assign({ ingredients: honeyMixingInputs }, honeyMixingRecipe)
      e.custom(honeyMixingRecipe).id(
        id
          ? `kubejs:honey_mixing/${output.substring(output.indexOf(':') + 1)}/${id}`
          : `kubejs:honey_mixing/${output.substring(output.indexOf(':') + 1)}`
      )
    })
  }

  e.recipes.create.emptying(['minecraft:glass_bottle', Fluid.of('resourcefulbees:honey', 250)], 'minecraft:honey_bottle').id('kubejs:emptying/honey_bottle')

  e.recipes.thermal.centrifuge(Fluid.of('resourcefulbees:honey', 100), '#forge:simple_honeycombs').id(`kubejs:thermal/centrifuge/centrifuge_honeycomb`)
  e.recipes.thermal.centrifuge(Fluid.of('resourcefulbees:honey', 900), '#forge:simple_honeycomb_blocks').id(`kubejs:thermal/centrifuge/centrifuge_honeycomb_block`)
  e.recipes.thermal.crucible(Fluid.of('resourcefulbees:honey', 1000), 'minecraft:honey_block').id('kubejs:thermal/crucible/crucible_honey_block_to_honey')

  simpleHoneys.forEach((honey, index) => {
    e.recipes.thermal.chiller('minecraft:honey_block', Fluid.of(honey, 1000)).id(`kubejs:thermal/chiller/honey_block/${index}`)
    e.recipes.thermal.bottler('minecraft:honey_bottle', [Fluid.of(honey, 250), 'minecraft:glass_bottle']).id(`kubejs:thermal/bottler/honey_bottle/${index}`)
  })
  customHoneys.forEach(honey => {
    e.recipes.thermal.chiller(`${honey}_block`, Fluid.of(honey, 1000)).id(`kubejs:thermal/chiller/chiller_honey_to_honey_block/${honey.substring(honey.indexOf(':') + 1)}`)
    e.recipes.thermal.bottler(`${honey}_bottle`, [Fluid.of(honey, 250), 'minecraft:glass_bottle']).id(`kubejs:thermal/bottler/bottler_honey_bottle/${honey.substring(honey.indexOf(':') + 1)}`)
    e.recipes.thermal.centrifuge(Fluid.of(honey, 100), honey.includes('rainbow') ? 'resourcefulbees:rgbee_honeycomb' : `${honey}comb`).id(`kubejs:thermal/centrifuge/centrifuge_honeycomb/${honey.substring(honey.indexOf(':') + 1)}`)
    e.recipes.thermal.centrifuge(Fluid.of(honey, 900), honey.includes('rainbow') ? 'resourcefulbees:rgbee_honeycomb_block' : `${honey}comb_block`).id(`kubejs:thermal/centrifuge/centrifuge_honeycomb_block/${honey.substring(honey.indexOf(':') + 1)}`)
    e.recipes.thermal.crucible(Fluid.of(honey, 1000), `${honey}_block`).id(`kubejs:thermal/crucible/crucible_honey_block_to_honey/${honey.substring(honey.indexOf(':') + 1)}`)
  })

  createHoneyMixing([
    [
      'minecraft:bee_nest', 1, 1000, [
        ['resourcefulbees:resourceful_honeycomb_block', 1],
        ['resourcefulbees:resourceful_honeycomb', 1],
        ['resourcefulbees:resourceful_honeycomb_block', 1]
      ]
    ],
    [
      'minecraft:cookie', 16, 50, [
        ['minecraft:wheat', 0],
        ['minecraft:cocoa_beans', 0],
        ['minecraft:wheat', 0]
      ]
    ],
    [
      'minecraft:glistering_melon_slice', 2, 100, [
        ['minecraft:melon_slice', 0],
        ['forge:nuggets/gold', 1],
        ['minecraft:melon_slice', 0]
      ]
    ],
    [
      'minecraft:beehive', 3, 100, [
        ['forge:chests', 1],
        ['resourcefulbees:resourceful_honeycomb', 1],
        ['forge:rods/wooden', 1]
      ]
    ],
    [
      'minecraft:honeycomb_block', 1, 100, [
        ['resourcefulbees:resourceful_honeycomb', 1],
        ['resourcefulbees:resourceful_honeycomb', 1],
        ['resourcefulbees:resourceful_honeycomb', 1]
      ]
    ],
    [
      'minecraft:honey_block', 1, 1000, [
        ['forge:rods/wooden', 1],
        ['forge:rods/wooden', 1],
        ['forge:rods/wooden', 1]
      ],
      1
    ],
    [
      'minecraft:pumpkin_pie', 1, 100, [
        ['minecraft:egg', 0],
        ['minecraft:pumpkin', 0],
        ['minecraft:egg', 0]
      ]
    ],
    [
      'minecraft:cake', 1, 500, [
        ['minecraft:egg', 0],
        ['minecraft:wheat', 0],
        ['minecraft:egg', 0]
      ]
    ],
    [
      'minecraft:golden_carrot', 2, 100, [
        ['minecraft:carrot', 0],
        ['forge:nuggets/gold', 1],
        ['minecraft:carrot', 0]
      ]
    ],
    [
      'minecraft:honey_bottle', 3, 750, [
        ['minecraft:glass_bottle', 0],
        ['minecraft:glass_bottle', 0],
        ['minecraft:glass_bottle', 0]
      ]
    ],
    ['minecraft:honey_block', 1, 1000, [['forge:rods/wooden', 1]], 2]
  ])
  // #endregion Honey
  // #region Oil
  // crude
  e.recipes.thermal.centrifuge([Fluid.of('pneumaticcraft:oil', 100), 'minecraft:sand', 'thermal:bitumen', 'thermal:tar'], 'thermal:oil_sand').id('kubejs:machine/centrifuge/centrifuge_oil_sand')
  e.recipes.thermal.centrifuge([Fluid.of('pneumaticcraft:oil', 100), 'minecraft:red_sand', 'thermal:bitumen', 'thermal:tar'], 'thermal:oil_red_sand').id('kubejs:machine/centrifuge/centrifuge_oil_red_sand')
  e.custom({
    type: 'thermal:refinery',
    ingredient: { fluid: 'pneumaticcraft:oil', amount: 100 },
    result: [
      { fluid: 'thermal:heavy_oil', amount: 40 },
      { fluid: 'thermal:light_oil', amount: 60 },
      { item: 'thermal:bitumen', chance: 0.1 }
    ],
    energy: 6000
  }).id('kubejs:machine/refinery/pneumatic_crude_oil')
  e.custom({
    type: 'thermal:refinery',
    ingredient: { fluid: 'immersivepetroleum:oil', amount: 100 },
    result: [
      { fluid: 'thermal:heavy_oil', amount: 40 },
      { fluid: 'thermal:light_oil', amount: 60 },
      { item: 'thermal:bitumen', chance: 0.1 }
    ],
    energy: 6000
  }).id('kubejs:machine/refinery/immersive_crude_oil')
  e.custom({
    type: 'pneumaticcraft:amadron',
    input: { type: 'FLUID', id: 'thermal:crude_oil', amount: 5000 },
    output: { type: 'ITEM', id: 'minecraft:emerald', amount: 1 },
    static: true,
    level: 0
  }).id('kubejs:amadron/thermal/oil_to_emerald')
  e.custom({
    type: 'pneumaticcraft:amadron',
    input: { type: 'FLUID', id: 'immersivepetroleum:oil', amount: 5000 },
    output: { type: 'ITEM', id: 'minecraft:emerald', amount: 1 },
    static: true,
    level: 0
  }).id('kubejs:amadron/immersive/oil_to_emerald')

  // creosote
  e.recipes.thermal.pyrolyzer([Fluid.of('immersiveengineering:creosote', 250), 'minecraft:charcoal'], '#minecraft:logs').id('kubejs:thermal/pyrolyzer/charcoal')
  e.recipes.thermal.pyrolyzer([Fluid.of('immersiveengineering:creosote', 5000), 'immersiveengineering:coke'], '#forge:storage_blocks/coal').id('kubejs:thermal/pyrolyzer/coke_block')
  e.recipes.thermal.pyrolyzer([Fluid.of('immersiveengineering:creosote', 250), 'immersiveengineering:coal_coke'], '#minecraft:coals').id('kubejs:thermal/pyrolyzer/coal_coke')
  e.custom({
    type: 'industrialforegoing:dissolution_chamber',
    input: [{ tag: 'minecraft:planks' }],
    inputFluid: "{ FluidName: \"immersiveengineering:creosote\", Amount: 125 }",
    processingTime: 5,
    output: { item: 'immersiveengineering:treated_wood_horizontal' }
  }).id('kubejs:dissolution_chamber/immersiveengineering/treated_wood_horizontal')
  e.custom({
    type: 'industrialforegoing:dissolution_chamber',
    input: [{ tag: 'minecraft:planks' }],
    inputFluid: "{ FluidName: \"thermal:creosote\", Amount: 125 }",
    processingTime: 5,
    output: { item: 'immersiveengineering:treated_wood_horizontal' }
  }).id('kubejs:dissolution_chamber/thermal/treated_wood_horizontal')
  // #endregion Oil
})
