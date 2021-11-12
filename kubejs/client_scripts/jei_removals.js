onEvent('jei.hide.items', e => {
  //#region consts
  let refined = ['controller', 'creative_controller', 'grid', 'crafting_grid', 'pattern_grid', 'fluid_grid', 'network_receiver', 'network_transmitter', 'relay', 'detector', 'security_manager', 'wireless_transmitter', 'disk_manipulator', 'crafter', 'crafter_manager', 'crafting_monitor']
  let colors = ['white', 'light_gray', 'gray', 'black', 'red', 'orange', 'yellow', 'lime', 'green', 'light_blue', 'cyan', 'blue', 'purple', 'magenta', 'pink', 'brown']
  let enimaticaRemovals = ['certus', 'fluix', 'cobalt', 'iridium', 'cast_iron', 'enigmatic_fortunizer', 'enigmatic_hammer', 'thallasium', 'regalium', 'utherium', 'froststeel', 'cloggrum', 'nebu', 'cluster']
  //#endregion
  //#region functions
  /**
   * @param  {String} mod Name of the mod to be used in the removal
   * @param  {String} metal Name of the metal to be used in the removal
   */
  function hideMetal(mod, name) {
    if (mod == 'mekanism' || mod == 'immersiveengineering') {
      if (!Ingredient.of(`${mod}:nugget_${name}`).stacks.empty) e.hide(`${mod}:nugget_${name}`)
      if (!Ingredient.of(`${mod}:ingot_${name}`).stacks.empty) e.hide(`${mod}:ingot_${name}`)
      if (!Ingredient.of(`${mod}:storage_${name}`).stacks.empty) e.hide(`${mod}:storage_${name}`)
      if (!Ingredient.of(`${mod}:dust_${name}`).stacks.empty) e.hide(`${mod}:dust_${name}`)
      if (!Ingredient.of(`${mod}:${mod == 'mekanism' ? name + '_ore' : 'ore_' + name}`).stacks.empty) e.hide(`${mod}:${mod == 'mekanism' ? name + '_ore' : 'ore_' + name}`)
    } else {
      if (!Ingredient.of(`${mod}:${name}_nugget`).stacks.empty) e.hide(`${mod}:${name}_nugget`)
      if (!Ingredient.of(`${mod}:${name}_ingot`).stacks.empty) e.hide(`${mod}:${name}_ingot`)
      if (!Ingredient.of(`${mod}:${name}_block`).stacks.empty) e.hide(`${mod}:${name}_block`)
      if (!Ingredient.of(`${mod}:${name}_dust`).stacks.empty) e.hide(`${mod}:${name}_dust`)
      if (!Ingredient.of(`${mod}:${name}_ore`).stacks.empty) e.hide(`${mod}:${name}_ore`)
    }
  }
  //#endregion

  hideMetal('create', 'copper')
  hideMetal('eidolon', 'lead')
  hideMetal('mekanism', 'tin')
  hideMetal('mekanism', 'lead')
  hideMetal('mekanism', 'copper')
  hideMetal('occultism', 'copper')
  hideMetal('occultism', 'silver')
  hideMetal('projectred-core', 'tin')
  hideMetal('projectred-core', 'copper')
  hideMetal('projectred-core', 'silver')
  hideMetal('immersiveengineering', 'lead')
  hideMetal('immersiveengineering', 'copper')
  hideMetal('immersiveengineering', 'nickel')
  hideMetal('immersiveengineering', 'silver')

  // remove enigmatica things
  enimaticaRemovals.forEach(item => {
    e.hide(`/^emendatusenigmatica:.*${item}.*/`)
  })

  colors.forEach(color => {
    refined.forEach(item => e.hide([`refinedstorage:${color}_${item}`]))
    e.hide([`creativewirelesstransmitter:${color}_creative_wireless_transmitter`])
  })

  e.hide([
    'apotheosis:iron_mining_arrow',
    'apotheosis:diamond_mining_arrow',
    'apotheosis:explosive_arrow',
    '@chipped',
    /engineerstools:.+_grit/,
    'naturesaura:chunk_loader',
    'bloodmagic:saltpeter',
    'bloodmagic:sulfur',
    'kubejs:dummy_fluid_item',
    'mekanism:sawdust',
    'mekanism:block_charcoal',
    'mekanism:dust_sulfur',
    'immersiveengineering:slag',
    'immersivepetroleum:bitumen',
    'immersivepetroleum:oil_bucket',
    'xreliquary:alkahestry_tome',
    'eidolon:sulfur',
    /resourcefulbees:.*spawn_egg/,
    'create:honey_bucket',
    'thermal:creosote_bucket',
    'thermal:crude_oil_bucket',
    /^thermal:.*coke.*/,
    'thermal:rf_coil_creative_augment',
    'thermal:fluid_tank_creative_augment',
    'thermal:machine_catalyst_creative_augment',
    'translocators:diamond_nugget',
    'createaddition:diamond_grit',
    /supplementaries:bamboo_spikes_tipped/,
    /zycraft:aluminium_foil/,
    /zycraft:quartz_bucket/,
    /zycraft:aluminium_can/,
    /ftblibrary:fluid_container/
  ])
})
