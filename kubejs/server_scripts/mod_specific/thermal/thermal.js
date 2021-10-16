onEvent('recipes', e => {
  e.remove({ id: 'thermal:storage/onion_block' })
  e.shapeless('thermal:onion_block', '9x #forge:crops/onion')

  e.recipes.mekanism.crushing('6x thermal:sulfur', 'thermal:sulfur_ore')
  e.recipes.mekanism.crushing('thermal:diamond_dust', 'minecraft:diamond')
  e.recipes.mekanism.crushing('thermal:sulfur_dust', 'thermal:sulfur')

  utils.listOf(['apatite', 'slimesteel', 'pig_iron', 'steeleaf', 'ironwood', 'aquamarine', 'ruby', 'sapphire', 'fluorite', 'draconium', 'awakened_draconium'])
    .forEach(item => {
      e.recipes.thermal.insolator([`mysticalagriculture:${item}_essence`, `mysticalagriculture:${item}_seeds`], `mysticalagriculture:${item}_seeds`).water(500).id(`kubejs:thermal/insolator_${item}_seeds`)
    })

  removeRecipeByID(e, [
    'thermal:machine/press/packing2x2/press_honeycomb_packing',
    'thermal:machine/press/unpacking/press_honeycomb_unpacking',
    'thermal:machine/centrifuge/centrifuge_oil_sand',
    'thermal:machine/centrifuge/centrifuge_oil_red_sand',
    'thermal:machine/pyrolyzer/pyrolyzer_coal',
    'thermal:machine/pyrolyzer/pyrolyzer_logs',
    'thermal:compat/astralsorcery/pulverizer_astralsorcery_aquamarine_ore',
    'thermal:machine/chiller/chiller_honey_to_honey_block',
    'thermal:machine/bottler/bottler_honey_bottle',
    'thermal:machine/centrifuge/centrifuge_honeycomb',
    'thermal:machine/crucible/crucible_honey_block_to_honey'
  ])
})
