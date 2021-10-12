onEvent('recipes', e => {
  function pressure(inputs, result, rCount, pressure) {
    e.recipes.pneumaticcraft.pressure_chamber({
      inputs: inputs,
      pressure: pressure,
      results: [{
        item: result,
        count: rCount
      }]
    })
  }

  pressure([{
    'type': 'pneumaticcraft:stacked_item',
    'item': 'minecraft:gold_nugget',
    'count': 3
  }, {
    'type': 'pneumaticcraft:stacked_item',
    'item': 'minecraft:redstone',
    'count': 1
  }, {
    'type': 'pneumaticcraft:stacked_item',
    'tag': 'forge:plastic',
    'count': 1
  }], 'pneumaticcraft:transistor', 1, 1.0)

  pressure([{
    'type': 'pneumaticcraft:stacked_item',
    'item': 'minecraft:gold_nugget',
    'count': 2
  }, {
    'type': 'pneumaticcraft:stacked_item',
    'tag': 'forge:slimeballs',
    'count': 1
  }, {
    'type': 'pneumaticcraft:stacked_item',
    'tag': 'forge:plastic',
    'count': 1
  }], 'pneumaticcraft:capacitor', 1, 1.0)

  pressure([{
    'type': 'pneumaticcraft:stacked_item',
    'item': 'minecraft:redstone_torch',
    'count': 2
  }, {
    'type': 'pneumaticcraft:stacked_item',
    'item': 'minecraft:gold_nugget',
    'count': 3
  }, {
    'type': 'pneumaticcraft:stacked_item',
    'tag': 'forge:plastic',
    'count': 1
  }], 'pneumaticcraft:empty_pcb', 3, 1.5)

  removeRecipeByID(e, [
    'pneumaticcraft:pressure_chamber/transistor',
    'pneumaticcraft:pressure_chamber/capacitor',
    'pneumaticcraft:pressure_chamber/empty_pcb'
  ])
})
