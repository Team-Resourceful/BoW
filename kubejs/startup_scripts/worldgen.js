onEvent('worldgen.remove', e => {
  e.removeOres(ore => {
    ore.blocks = [
      'minecraft:iron_ore',
      'minecraft:gold_ore',
      'minecraft:redstone_ore',
      'minecraft:diamond_ore',
      'minecraft:emerald_ore',
      'minecraft:lapis_ore',
      'minecraft:coal_ore',
      'minecraft:nether_quartz_ore',
      'minecraft:nether_gold_ore',

      'byg:blue_nether_gold_ore',
      'byg:brimstone_nether_gold_ore',

      'zycraft:aluminium_ore',

      'chisel:marble/raw',
      'chisel:limestone/raw',
      'chisel:basalt/raw',

      'powah:dry_ice'
    ]
  })
})
