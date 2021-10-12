onEvent('recipes', e => {
  colors.forEach(color => {
    e.shapeless(`botanypots:${color}_botany_pot`, [utils.listOf([
      'botanypots:botany_pot',
      'botanypots:white_botany_pot',
      'botanypots:orange_botany_pot',
      'botanypots:magenta_botany_pot',
      'botanypots:light_blue_botany_pot',
      'botanypots:yellow_botany_pot',
      'botanypots:lime_botany_pot',
      'botanypots:pink_botany_pot',
      'botanypots:gray_botany_pot',
      'botanypots:light_gray_botany_pot',
      'botanypots:cyan_botany_pot',
      'botanypots:purple_botany_pot',
      'botanypots:blue_botany_pot',
      'botanypots:brown_botany_pot',
      'botanypots:green_botany_pot',
      'botanypots:red_botany_pot',
      'botanypots:black_botany_pot'
    ]), `#forge:dyes/${color}`])
    e.shapeless(`botanypots:hopper_${color}_botany_pot`, ['#botanypots:hopper_botany_pots', `#forge:dyes/${color}`])
  })
})
