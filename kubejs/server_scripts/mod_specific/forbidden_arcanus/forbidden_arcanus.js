onEvent('recipes', e => {
  e.shaped('3x forbidden_arcanus:iron_chain', ['N  ', ' I ', '  N'], {
    N: '#forge:nuggets/iron',
    I: '#forge:ingots/iron'
  }).id(`kubejs:iron_chain`)

  e.shapeless('forbidden_arcanus:rotten_leather', '3x minecraft:rotten_flesh').id(`kubejs:forbidden_arcanus/rotten_leather`)

  removeRecipeByID(e, [
    'forbidden_arcanus:leather',
    'forbidden_arcanus:iron_chain'
  ])

  removeRecipeByOutput(e, [
    'forbidden_arcanus:rotten_leather'
  ])
})
