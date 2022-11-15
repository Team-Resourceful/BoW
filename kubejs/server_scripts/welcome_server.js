PlayerEvents.loggedIn(e => {
  if (!e.player.persistentData.alreadyLogged) {
    e.player.persistentData.alreadyLogged = true
    e.server.runCommandSilent(`/title ${e.player.name} times 20 100000 20`)
    e.server.runCommandSilent(`/title ${e.player.name} title {"text":"Bees of Wonder","color":"gold"}`)
    e.server.runCommandSilent(`/title ${e.player.name} subtitle ["",{"text":"Welcome to "},{"text":"Team Resourceful","color":"gold"},{"text":"'s pack!"}]`)
  }
})

NetworkEvents.fromClient('player_moved', e => {
  if (e.data.code == 69) {
    e.server.runCommandSilent(`/title ${e.player.name} clear`)
    e.server.runCommandSilent(`/title ${e.player.name} reset`)
  }
})