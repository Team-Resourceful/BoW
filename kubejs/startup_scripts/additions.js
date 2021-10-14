onEvent('item.registry', e => {
  e.create('kubejs:dev_tool').maxStackSize(1)
})