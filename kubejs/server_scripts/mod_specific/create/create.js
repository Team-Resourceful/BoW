onEvent('recipes', e => {
  e.recipes.create.crushing([
    '2x minecraft:netherite_scrap',
    Item.of('minecraft:netherite_scrap', 2).withChance(0.33)
  ], 'minecraft:ancient_debris')

  e.recipes.create.milling('2x minecraft:netherite_scrap', 'minecraft:ancient_debris')

  removeRecipeByID(e, [
    'create:crafting/materials/copper_block_from_compacting',
    'create:crafting/materials/zinc_block_from_compacting',
    'create:emptying/honey_bottle',
    'createaddition:crushing/diamond_ore'
  ])
})
