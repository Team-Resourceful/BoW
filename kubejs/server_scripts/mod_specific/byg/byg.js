onEvent('recipes', e => {
  e.shaped('byg:black_ice', ['III', 'IDI', 'III'], {
    I: 'minecraft:ice',
    D: '#forge:dyes/black'
  }).id(`kubejs:byg_black_ice`)

  removeRecipeByID(e, [
    'byg:black_glass_from_sand',
    'byg:purple_glass_from_sand',
    'byg:blue_glass_from_sand',
    'byg:white_glass_from_sand'
  ])
})
