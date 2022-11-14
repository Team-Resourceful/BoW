ItemEvents.entityInteracted(e => {
  if (e.hand == MAIN_HAND && e.item.id == 'resourcefulbees:dev_tool') {
    let nbt = e.target.fullNBT
    e.player.tell(Text.of(e.target.type).red())
    if (nbt == null) e.player.tell('This entity has no NBT')
    else e.player.tell(Text.of('Click here to copy the NBT').click(`copy:${nbt}`))
  }
})

BlockEvents.rightClicked(e => {
  if (e.hand == MAIN_HAND && e.item.id == 'resourcefulbees:dev_tool') {
    let nbt = e.block.entityData
    e.player.tell(Text.of(e.block.id).red())
    if (nbt == null) e.player.tell('This block has no NBT')
    else e.player.tell(Text.of('Click here to copy the NBT').click(`copy:${nbt}`))
  }
})

EntityEvents.hurt(e => {
  if (e.source.player && e.source.player.mainHandItem.id == 'resourcefulbees:dev_tool') {
    e.entity.kill()
  }
})