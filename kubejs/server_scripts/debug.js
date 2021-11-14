onEvent('item.entity_interact', e => {
  if (e.hand == MAIN_HAND) {
    if (e.getItem().id == 'kubejs:dev_tool') {
      let nbt = e.target.getFullNBT()
      e.player.tell(Text.of(e.target.type).red())
      if (nbt == null) e.player.tell('This entity has no NBT.')
      else e.player.tell(Text.of('Click here to copy the NBT').click(`copy:${nbt}`))
    }
  }
})

onEvent('block.right_click', e => {
  if (e.hand == MAIN_HAND) {
    if (e.getItem().id == 'kubejs:dev_tool') {
      let nbt = e.getBlock().getEntityData()
      e.player.tell(Text.of(e.getBlock().id).red())
      if (nbt == null) e.player.tell('This block has no NBT.')
      else e.player.tell(Text.of('Click here to copy the NBT').click(`copy:${nbt}`))
    }
  }
})

onEvent('entity.attack', e => {
  if (e.source.getPlayer()) {
    if (e.source.getImmediate().getMainHandItem().id == 'kubejs:dev_tool') {
      e.entity.kill()
    }
  }
})
