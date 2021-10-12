onEvent('recipes', e => {
  e.recipes.mekanism.sawing('8x thermal:sawdust', 'byg:imbued_nightshade_log').id('kubejs:saw/byg_log_imbued_nightshade')
  e.recipes.mekanism.combining('minecraft:diamond_ore', '5x #forge:dusts/diamond', '#forge:cobblestone').id('kubejs:combiner/diamond')
  e.recipes.mekanism.combining('minecraft:emerald_ore', '5x #forge:dusts/emerald', '#forge:cobblestone').id('kubejs:combiner/emerald')

  utils.listOf(['aspen', 'baobab', 'blue_enchanted', 'cherry', 'cika', 'cypress', 'ebony', 'ether', 'fir', 'green_enchanted', 'holly', 'jacaranda', 'lament', 'mahogany', 'mangrove', 'maple', 'nightshade', 'palm', 'pine', 'rainbow_eucalyptus', 'redwood', 'skyris', 'willow', 'witch_hazel', 'zelkova']).forEach(type => {
    e.recipes.mekanism.sawing(
      `6x byg:${type}_planks`,
      [`byg:stripped_${type}_log`, `byg:${type}_log`],
      Item.of('thermal:sawdust').withChance(0.25)
    ).id(`kubejs:saw/byg_log_${type}`)
  })

  removeRecipeByID(e, [
    /^mekanism:processing\/.*\/storage_blocks\/from_ingots/,
    'mekanism:storage_blocks/bronze',
    'mekanism:processing/diamond/to_dust',
    'mekanism:gas_conversion/salt_to_hydrogen_chloride',
    'mekanism:chemical_oxidizer',
    'mekanism:robit',
    'mekanism:bio_fuel',
    'mekanism:laser_tractor_beam',
    'mekanism:storage_blocks/bronze',
    'mekanism:processing/diamond/to_ore',
    'mekanism:processing/emerald/to_ore'
  ])
  removeRecipeByOutput(e, [
    'mekanism:block_charcoal',
    'mekanism:upgrade_anchor'
  ])
})
