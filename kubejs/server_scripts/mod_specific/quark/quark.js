onEvent('recipes', event => {
  event.shaped('quark:seed_pouch', [
    ' A ',
    'BCB',
    ' B '
  ], {
    A: '#forge:string',
    B: 'minecraft:leather',
    C: '#quark:seed_pouch_holdable'
  })
})
