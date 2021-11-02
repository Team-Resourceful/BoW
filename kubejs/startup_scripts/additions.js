onEvent('item.registry', e => {
  e.create('kubejs:dev_tool').maxStackSize(1).displayName('§4Dev Tool').tooltip('You should only have this item').tooltip('if you know what you\'re doing.')
})
