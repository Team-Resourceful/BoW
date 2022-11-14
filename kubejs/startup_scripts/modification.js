ItemEvents.modification(e => {
  let modifyStack = (stackSize, itemList) => {
    itemList.forEach(item => e.modify(item, i => i.maxStackSize = stackSize))
  }

  modifyStack(64, [
    // /^industrialforegoing:.*addon.*/,
    'minecraft:ender_pearl',
    'minecraft:egg',
    'minecraft:honey_bottle',
    'minecraft:snowball',
    'minecraft:armor_stand',
    'minecraft:bucket',
    'minecraft:oak_sign',
    'minecraft:spruce_sign',
    'minecraft:oak_sign',
    'minecraft:spruce_sign',
    'minecraft:birch_sign',
    'minecraft:acacia_sign',
    'minecraft:jungle_sign',
    'minecraft:dark_oak_sign',
    'minecraft:crimson_sign',
    'minecraft:warped_sign',
    // 'forbidden_arcanus:cherrywood_sign',
    // 'forbidden_arcanus:edelwood_sign',
    // 'forbidden_arcanus:mysterywood_sign',
    // 'forbidden_arcanus:aureal_bottle',
    // 'forbidden_arcanus:xpetrified_orb',
    // 'upgrade_aquatic:driftwood_sign',
    // 'upgrade_aquatic:river_sign',
    // 'powah:charged_snowball',
    // 'resourcefulbees:bee_jar',
    // 'resourcefulbees:rainbow_honey_bottle',
    // 'resourcefulbees:starry_honey_bottle',
    // 'resourcefulbees:catnip_honey_bottle',
    // 'resourcefulbees:iron_storage_upgrade',
    // 'resourcefulbees:gold_storage_upgrade',
    // 'resourcefulbees:diamond_storage_upgrade',
    // 'resourcefulbees:emerald_storage_upgrade',
    // 'resourcefulbees:apiary_breeder_upgrade',
    // 'resourcefulbees:apiary_breed_time_upgrade',
    // 'resourcefulbees:t1_hive_upgrade',
    // 'resourcefulbees:t2_hive_upgrade',
    // 'resourcefulbees:t3_hive_upgrade',
    // 'resourcefulbees:t4_hive_upgrade',
    // 'upgrade_aquatic:mulberry_jam_bottle',
    // 'mekanism:upgrade_speed',
    // 'mekanism:upgrade_energy',
    // 'mekanism:upgrade_filter',
    // 'mekanism:upgrade_muffling',
    // 'mekanism:upgrade_gas',
    // 'mekanism:upgrade_anchor',
    // 'thermal:explosive_grenade',
    // 'thermal:slime_grenade',
    // 'thermal:redstone_grenade',
    // 'thermal:glowstone_grenade',
    // 'thermal:ender_grenade',
    // 'thermal:earth_grenade',
    // 'thermal:fire_grenade',
    // 'thermal:ice_grenade',
    // 'thermal:lightning_grenade',
    // 'bloodmagic:voidsigil',
    // 'sophisticatedbackpacks:advanced_void_upgrade',
    // 'ars_nouveau:void_jar',
    // 'mininggadgets:upgrade_void_junk'
  ])
  modifyStack(1, [
    // 'forbidden_arcanus:quantum_catcher',
    // 'immersiveengineering:graphite_electrode'
  ])

  global.colors.forEach(color => {
    e.modify(`minecraft:${color}_banner`, item => item.maxStackSize = 64)
  })
})