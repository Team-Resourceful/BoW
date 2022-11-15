ItemEvents.entityInteracted(e => {
  if (e.hand == 'main_hand' && e.item.id == 'resourcefulbees:bloodmourne') {
    let nbt = e.target.fullNBT
    e.player.tell(Component.join(' ', [Component.darkPurple('ID:'), Component.lightPurple(e.target.type)]))
    if (nbt == null) e.player.tell(Component.darkPurple('This entity has no NBT'))
    else e.player.tell(Component.join(' ', [Component.darkPurple('Click'), Component.lightPurple('here').click(`copy:${nbt}`), Component.darkPurple('to copy the NBT')]))
  }
})

BlockEvents.rightClicked(e => {
  if (e.hand == 'main_hand' && e.item.id == 'resourcefulbees:bloodmourne') {
    let nbt = e.block.entityData
    e.player.tell(Component.join(' ', [Component.darkPurple('ID:'), Component.lightPurple(e.block.id)]))
    if (nbt == null) e.player.tell(Component.darkPurple('This block has no NBT'))
    else e.player.tell(Component.join(' ', [Component.darkPurple('Click'), Component.lightPurple('here').click(`copy:${nbt}`), Component.darkPurple('to copy the NBT')]))
  }
})

EntityEvents.hurt(e => {
  if (e.source.player && e.source.player.mainHandItem.id == 'resourcefulbees:bloodmourne') {
    e.entity.kill()
  }
})