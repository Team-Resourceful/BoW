onEvent('jei.hide.items', e => {
  let refined = ['controller', 'creative_controller', 'grid', 'crafting_grid', 'pattern_grid', 'fluid_grid', 'network_receiver', 'network_transmitter', 'relay', 'detector', 'security_manager', 'wireless_transmitter', 'disk_manipulator', 'crafter', 'crafter_manager', 'crafting_monitor']
  let colors = ['white', 'light_gray', 'gray', 'black', 'red', 'orange', 'yellow', 'lime', 'green', 'light_blue', 'cyan', 'blue', 'purple', 'magenta', 'pink', 'brown']
  let enimaticaRemovals = ['lithium', 'certus', 'fluix', 'cobalt', 'iridium', 'cast_iron', 'enigmatic_fortunizer', 'enigmatic_hammer', 'thallasium', 'regalium', 'utherium', 'froststeel', 'cloggrum', 'nebu', 'cluster']

  //#region unification removals
  // remove enigmatica things
  enimaticaRemovals.forEach(item => {
    e.hide(`/^emendatusenigmatica:.*${item}.*/`)
  })

  utils.listOf(['apatite', 'cinnabar', 'niter', 'sulfur']).forEach(item => e.hide([`thermal:${item}`, `thermal:${item}_dust`, `thermal:${item}_block`]))
  utils.listOf(['lapis', 'diamond', 'emerald', 'quartz']).forEach(item => e.hide([`thermal:${item}_dust`, `thermal:${item}_gear`, `thermal:${item}_plate`, `thermal:${item}_coin`]))
  utils.listOf(['copper', 'tin', 'lead', 'silver', 'nickel', 'bronze', 'electrum', 'invar', 'constantan', 'signalum', 'lumium', 'enderium']).forEach(item => e.hide([`thermal:${item}_ingot`, `thermal:${item}_nugget`, `thermal:${item}_dust`, `thermal:${item}_gear`, `thermal:${item}_plate`, `thermal:${item}_coin`, `thermal:${item}_block`]))

  e.hide([
    'bloodmagic:saltpeter',
    'bloodmagic:sulfur',
    'eidolon:sulfur',
    'immersivepetroleum:bitumen',
    'immersivepetroleum:petcoke_block',
    'immersivepetroleum:petcoke',
    'immersivepetroleum:petcoke_dust',
    'immersiveengineering:coke',
    'immersiveengineering:slab_coke',
    'immersiveengineering:coal_coke',
    'immersiveengineering:dust_coke',
    'immersiveengineering:dust_wood',
    'thermal:bitumen',
    'thermal:bitumen_block',
    'thermal:apatite',
    'thermal:cinnabar',
    'thermal:niter',
    'thermal:sulfur',
    'thermal:ender_pearl_dust',
    'thermal:sawdust_block',
    'thermal:sawdust',
    'mekanism:block_charcoal',
    'mekanism:dust_sulfur',
    'mekanism:dust_charcoal',

    /^emendatusenigmatica:.*_ore/,
    /^thermal:.*coke.*/
  ])
  //#endregion

  //color related removals
  colors.forEach(color => {
    refined.forEach(item => e.hide([`refinedstorage:${color}_${item}`]))
    e.hide([`creativewirelesstransmitter:${color}_creative_wireless_transmitter`])
  })

  //general removals
  e.hide([
    '@chipped',

    /engineerstools:.+_grit/,
    /ftblibrary:fluid_container/,
    /resourcefulbees:.*spawn_egg/,
    /supplementaries:bamboo_spikes_tipped/,
    /zycraft:aluminium_foil/,
    /zycraft:quartz_bucket/,
    /zycraft:aluminium_can/,

    'apotheosis:iron_mining_arrow',
    'apotheosis:diamond_mining_arrow',
    'apotheosis:explosive_arrow',
    'create:honey_bucket',
    'createaddition:diamond_grit',
    'immersiveengineering:slag',
    'immersivepetroleum:oil_bucket',
    'kubejs:dummy_fluid_item',
    'mekanism:sawdust',
    'naturesaura:chunk_loader',
    'thermal:creosote_bucket',
    'thermal:crude_oil_bucket',
    'translocators:diamond_nugget',
    'xreliquary:alkahestry_tome',
  ])
})
