onEvent('jei.hide.items', e => {
  //#region constants
  let refined = ['controller', 'creative_controller', 'grid', 'crafting_grid', 'pattern_grid', 'fluid_grid', 'network_receiver', 'network_transmitter', 'relay', 'detector', 'security_manager', 'wireless_transmitter', 'disk_manipulator', 'crafter', 'crafter_manager', 'crafting_monitor']
  let colors = ['white', 'light_gray', 'gray', 'black', 'red', 'orange', 'yellow', 'lime', 'green', 'light_blue', 'cyan', 'blue', 'purple', 'magenta', 'pink', 'brown']
  let enimaticaRemovals = ['lithium', 'sawdust', 'certus', 'fluix', 'cobalt', 'iridium', 'cast_iron', 'enigmatic_fortunizer', 'enigmatic_hammer', 'thallasium', 'regalium', 'utherium', 'froststeel', 'cloggrum', 'nebu', 'cluster']
  //#endregion
  //#region unification removals
  // remove enigmatica things
  enimaticaRemovals.forEach(item => {
    e.hide(`/^emendatusenigmatica:.*${item}.*/`)
  })

  utils.listOf(['apatite', 'cinnabar', 'niter', 'sulfur'])
    .forEach(item => {
      e.hide([
        `thermal:${item}`,
        `thermal:${item}_dust`,
        `thermal:${item}_ore`,
        `thermal:${item}_block`
      ])
    })
  utils.listOf(['lapis', 'diamond', 'emerald', 'quartz'])
    .forEach(item => {
      e.hide([
        `thermal:${item}_dust`,
        `thermal:${item}_gear`
      ])
    })
  utils.listOf(['copper', 'tin', 'lead', 'silver', 'nickel', 'bronze', 'electrum', 'invar', 'constantan', 'signalum', 'lumium', 'enderium'])
    .forEach(item => {
      if (utils.listOf(['copper', 'tin', 'lead', 'silver', 'nickel']).contains(item)) e.hide(`thermal:${item}_ore`)
      e.hide([
        `thermal:${item}_block`,
        `thermal:${item}_ingot`,
        `thermal:${item}_nugget`,
        `thermal:${item}_dust`,
        `thermal:${item}_gear`,
        `thermal:${item}_plate`,
        `thermal:${item}_coin`
      ])
    })

  e.hide([
    'bloodmagic:saltpeter',
    'bloodmagic:sulfur',
    'eidolon:sulfur',
    'eidolon:lead_nugget',
    'eidolon:lead_ingot',
    'eidolon:lead_block',
    'immersivepetroleum:bitumen',
    'immersivepetroleum:petcoke_block',
    'immersivepetroleum:petcoke',
    'immersivepetroleum:petcoke_dust',
    'immersiveengineering:coke',
    'immersiveengineering:slab_coke',
    'immersiveengineering:coal_coke',
    'immersiveengineering:dust_coke',
    'immersiveengineering:dust_wood',
    'immersiveengineering:dust_sulfur',
    'immersiveengineering:stick_iron',
    'immersiveengineering:stick_steel',
    'immersiveengineering:stick_aluminum',
    'immersiveengineering:stick_gold',
    'immersiveposts:stick_copper',
    'immersiveposts:stick_lead',
    'immersiveposts:stick_silver',
    'immersiveposts:stick_nickel',
    'immersiveposts:stick_constantan',
    'immersiveposts:stick_electrum',
    'immersiveposts:stick_uranium',
    'mekanism:block_charcoal',
    'mekanism:dust_sulfur',
    'mekanism:dust_charcoal',
    'mekanism:nugget_bronze',
    'mekanism:nugget_steel',
    'mekanism:nugget_osmium',
    'mekanism:nugget_copper',
    'mekanism:nugget_tin',
    'mekanism:nugget_lead',
    'mekanism:nugget_uranium',
    'mekanism:ingot_bronze',
    'mekanism:ingot_steel',
    'mekanism:ingot_osmium',
    'mekanism:ingot_copper',
    'mekanism:ingot_tin',
    'mekanism:ingot_lead',
    'mekanism:ingot_uranium',
    'mekanism:block_bronze',
    'mekanism:block_steel',
    'mekanism:block_osmium',
    'mekanism:block_copper',
    'mekanism:block_tin',
    'mekanism:block_lead',
    'mekanism:block_uranium',
    'occultism:copper_ore',
    'occultism:copper_nugget',
    'occultism:copper_ingot',
    'occultism:copper_block',
    'occultism:silver_ore',
    'occultism:silver_nugget',
    'occultism:silver_ingot',
    'occultism:silver_block',
    'projectred-exploration:ruby_ore',
    'projectred-exploration:sapphire_ore',
    'projectred-exploration:peridot_ore',
    'projectred-exploration:copper_ore',
    'projectred-exploration:tin_ore',
    'projectred-exploration:silver_ore',
    'projectred-exploration:copper_ingot',
    'projectred-exploration:tin_ingot',
    'projectred-exploration:silver_ingot',
    'projectred-exploration:copper_block',
    'projectred-exploration:tin_block',
    'projectred-exploration:silver_block',
    'quark:charcoal_block',
    'refinedstorage:silicon',
    'silentgear:iron_rod',
    'thermal:bitumen',
    'thermal:bitumen_block',
    'thermal:apatite',
    'thermal:cinnabar',
    'thermal:niter',
    'thermal:sulfur',
    'thermal:ender_pearl_dust',
    'tinyredstone:silicon',
    'tinyredstone:silicon_compound',
    'werewolves:silver_ore',
    'zycraft:aluminium_ore',
    'zycraft:aluminum',

    /^ars_nouveau:.+_ore/,
    /^buildersaddition:.+_rod/,
    /^cb_microblock:.+_rod/,
    /^create:.+_ore/,
    /^create:.+_sheet/,
    /^create:.+_nugget/,
    /^create:.+_ingot/,
    /^create:.+_block/,
    /^createaddition:.+_rod/,
    /^eidolon:.+_ore/,
    /^emendatusenigmatica:.*_ore/,
    /^immersiveengineering:.+_ore/,
    /^immersiveengineering:plate_.+/,
    /^immersiveengineering:nugget_.+/,
    /^immersiveengineering:ingot_.+/,
    /^immersiveengineering:storage_.+/,
    /^mekanism:.+_ore/,
    /^mekanism:.*fluorite.*/,
    /^minecraft:.+_ore/,
    /^pedestals:dust.+/,
    /^rftoolsbase:dimensionalshard_.+/,
    /^thermal:.*coke.*/,
    /^thermal:.+_gear/,
    /^thermal:.+_plate/,
    /^titanium:.+_gear/,
  ])
  //#endregion
  //#region color related removals
  colors.forEach(color => {
    refined.forEach(item => {
      e.hide([`refinedstorage:${color}_${item}`])
    })
    e.hide([`creativewirelesstransmitter:${color}_creative_wireless_transmitter`])
  })
  //#endregion
  //#region general removals
  e.hide([
    '@chipped',

    /engineerstools:.+_grit/,
    /resourcefulbees:.*spawn_egg/,

    'apotheosis:iron_mining_arrow',
    'apotheosis:diamond_mining_arrow',
    'apotheosis:explosive_arrow',
    'create:honey_bucket',
    'createaddition:diamond_grit',
    'immersiveengineering:slag',
    'immersivepetroleum:oil_bucket',
    'ironfurnaces:rainbow_coal',
    'kubejs:dummy_fluid_item',
    'mekanism:sawdust',
    'naturesaura:chunk_loader',
    'thermal:creosote_bucket',
    'thermal:crude_oil_bucket',
    'translocators:diamond_nugget',
    'zerocore:debugtool'
  ])
  //#endregion
})
