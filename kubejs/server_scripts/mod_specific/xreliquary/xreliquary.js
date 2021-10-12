onEvent('recipes', e => {
  e.remove({ type: 'xreliquary:alkahestry_charging' })
  removeRecipeByOutput(e, ['xreliquary:alkahestry_tome'])
})
