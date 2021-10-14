onEvent('item.entity_interact', e => {
  if (e.hand == MAIN_HAND) {
    if (e.target.type == 'the_bumblezone:beehemoth') {
      if (e.getItem().id == 'resourcefulbees:honey_dipper') {
        e.player.setStatusMessage(
          Text.of('Friendship status: ' + e.target.getFullNBT()['friendship'] + '/1000').gold().bold()
        )
      }
    }
  }
})
