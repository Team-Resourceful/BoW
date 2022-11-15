let keypressed = false
ClientEvents.tick(e => {
  if (Client.isKeyDown(87) ||
    Client.isKeyDown(65) ||
    Client.isKeyDown(83) ||
    Client.isKeyDown(68) ||
    Client.isKeyDown(32)) {
    if (!keypressed) {
      keypressed = true
      e.player.sendData('player_moved', {
        code: 69
      })
    }
  } else keypressed = false
})