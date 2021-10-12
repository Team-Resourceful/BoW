onEvent('jei.hide.items', e => {
  //#region consts
  let refined = ['controller', 'creative_controller', 'grid', 'crafting_grid', 'pattern_grid', 'fluid_grid', 'network_receiver', 'network_transmitter', 'relay', 'detector', 'security_manager', 'wireless_transmitter', 'disk_manipulator', 'crafter', 'crafter_manager', 'crafting_monitor']
  let colors = ['white', 'light_gray', 'gray', 'black', 'red', 'orange', 'yellow', 'lime', 'green', 'light_blue', 'cyan', 'blue', 'purple', 'magenta', 'pink', 'brown']
  //#endregion
  //#region functions
  function hideMetal(mod, name, types) {
    types.forEach(type => {
      let id = utils.listOf(['mekanism', 'immersiveengineering']).includes(mod) ? `${mod}:${type}_${name}` : `${mod}:${name}_${type}`
      if (!Ingredient.of(id).stacks.empty) e.hide(id)
    })
  }
  function hideStuff(mod, type, names) {
    names.forEach(name => {
      if (!Ingredient.of(`${mod}:${utils.listOf(['mekanism', 'immersiveengineering']).includes(mod) ? type + '_' + name : name + '_' + type}`).stacks.empty)
        e.hide(`${mod}:${utils.listOf(['mekanism', 'immersiveengineering']).includes(mod) ? type + '_' + name : name + '_' + type}`)
    })
  }
  //#endregion

  e.hide([
    'apotheosis:iron_mining_arrow',
    'apotheosis:diamond_mining_arrow',
    'apotheosis:explosive_arrow',
    'projectred-exploration:copper_ore',
    'projectred-exploration:tin_ore',
    'projectred-exploration:silver_ore',
    '@chipped',
    /supplementaries:bamboo_spikes_tipped/,
    'quark:ancient_tome',
    'naturesaura:chunk_loader',
    /extrastorage:disk_.+/,
    /extrastorage:block_.+/,
    /extrastorage:storagepart_.+/,
    /titanium:.+/,
    'bloodmagic:saltpeter',
    'bloodmagic:sulfur',
    'bloodmagic:coalsand',
    'bloodmagic:ironsand',
    'bloodmagic:goldsand',
    /pedestals:dust.+/,
    /pedestals:pedestal\/stone(?!333)\d{3}/,
    'mekanism:copper_ore',
    'mekanism:tin_ore',
    'mekanism:osmium_ore',
    'mekanism:uranium_ore',
    'mekanism:lead_ore',
    'mekanism:sawdust',
    'mekanism:block_charcoal',
    /mekanism:creative_chemical_tank/,
    /mekanism:creative_fluid_tank/,
    'immersiveengineering:slag',
    'immersivepetroleum:bitumen',
    'darkutils:ender_hopper',
    /biggerreactors:yello.+/,
    /engineerstools:.+_grit/,
    'platforms:ramp',
    'platforms:rise',
    'platforms:rail',
    'platforms:floor',
    'platforms:flat',
    'platforms:frame',
    'xreliquary:alkahestry_tome',
    'mininggadgets:minerslight',
    'mysticalagradditions:nitro_crystal_crux',
    'eidolon:sulfur',
    'eidolon:lead_ore',
    'eidolon:lead_ingot',
    'eidolon:lead_block',
    'eidolon:lead_nugget',
    /resourcefulbees:.*spawn_egg/,
    'cyclic:honey_bucket',
    'create:honey_bucket',
    'thermal:creosote_bucket',
    'thermal:crude_oil_bucket',
    'immersivepetroleum:oil_bucket',
    /^thermal:.*coke.*/,
    'thermal:rf_coil_creative_augment',
    'thermal:fluid_tank_creative_augment',
    'thermal:machine_catalyst_creative_augment',
    'mekanism:dust_sulfur',
    'translocators:diamond_nugget',
    'createaddition:diamond_grit'
  ])

  colors.forEach(color => {
    refined.forEach(item => e.hide([`refinedstorage:${color}_${item}`]))
    e.hide([
      `creativewirelesstransmitter:${color}_creative_wireless_transmitter`,
      `/enviromats:alabaster_${color}_.*/`
    ])
  })

  //#region hideMetal
  hideMetal('immersiveengineering', 'copper', ['ingot', 'ore', 'dust', 'nugget', 'storage', 'slab_storage'])
  hideMetal('immersiveengineering', 'silver', ['ingot', 'ore', 'dust', 'nugget', 'storage', 'slab_storage'])
  hideMetal('immersiveengineering', 'aluminum', ['ingot', 'ore', 'dust', 'nugget', 'storage', 'slab_storage'])
  hideMetal('immersiveengineering', 'uranium', ['ingot', 'ore', 'dust', 'nugget', 'storage', 'slab_storage'])
  hideMetal('immersiveengineering', 'lead', ['ingot', 'ore', 'dust', 'nugget', 'storage', 'slab_storage'])
  hideMetal('immersiveengineering', 'nickel', ['ingot', 'ore', 'dust', 'nugget', 'storage', 'slab_storage'])
  hideMetal('immersiveengineering', 'steel', ['ingot', 'dust', 'nugget', 'storage', 'slab_storage'])
  hideMetal('immersiveengineering', 'electrum', ['ingot', 'dust', 'nugget', 'storage', 'slab_storage'])
  hideMetal('immersiveengineering', 'constantan', ['ingot', 'dust', 'nugget', 'storage', 'slab_storage'])
  hideMetal('mekanism', 'copper', ['ingot', 'dust', 'nugget', 'block'])
  hideMetal('mekanism', 'tin', ['ingot', 'dust', 'nugget', 'block'])
  hideMetal('mekanism', 'uranium', ['ingot', 'dust', 'nugget', 'block'])
  hideMetal('mekanism', 'lead', ['ingot', 'dust', 'nugget', 'block'])
  hideMetal('mekanism', 'osmium', ['ingot', 'dust', 'nugget', 'block'])
  hideMetal('mekanism', 'bronze', ['ingot', 'dust', 'nugget', 'block'])
  hideMetal('create', 'copper', ['ingot', 'ore', 'nugget', 'block'])
  hideMetal('create', 'zinc', ['ingot', 'ore', 'nugget', 'block'])
  hideMetal('thermal', 'copper', ['ingot', 'ore', 'dust', 'nugget', 'block'])
  hideMetal('thermal', 'tin', ['ingot', 'ore', 'dust', 'nugget', 'block'])
  hideMetal('thermal', 'lead', ['ingot', 'ore', 'dust', 'nugget', 'block'])
  hideMetal('thermal', 'silver', ['ingot', 'ore', 'dust', 'nugget', 'block'])
  hideMetal('thermal', 'nickel', ['ingot', 'ore', 'dust', 'nugget', 'block'])
  //#endregion
  //#region hideStuff
  hideStuff('thermal', 'dust', ['iron', 'gold'])
  hideStuff('immersiveengineering', 'dust', ['iron', 'gold', 'sulfur', 'wood'])
  hideStuff('immersiveengineering', 'plate', ['iron', 'gold', 'copper', 'aluminum', 'lead', 'silver', 'nickel', 'constantan', 'electrum'])
  hideStuff('mekanism', 'dust', ['lapis_lazuli', 'emerald', 'diamond', 'quartz', 'iron', 'gold'])
  hideStuff('mekanism', 'crystal', ['osmium', 'copper', 'tin', 'lead', 'uranium'])
  hideStuff('mekanism', 'shard', ['osmium', 'copper', 'tin', 'lead', 'uranium'])
  hideStuff('mekanism', 'dirty_dust', ['osmium', 'copper', 'tin', 'lead', 'uranium'])
  hideStuff('mekanism', 'clump', ['osmium', 'copper', 'tin', 'lead', 'uranium'])
  hideStuff('create', 'sheet', ['iron', 'golden', 'copper'])
  hideStuff('quark', 'crate', ['apple', 'carrot', 'beetroot', 'potato'])
  hideStuff('quark', 'block', ['bamboo', 'charcoal', 'sugar_cane'])
  hideStuff('mysticalagriculture', 'seeds', ['basalz', 'blazing_crystal', 'blitz', 'blizz', 'brass', 'bronze', 'compressed_iron', 'constantan', 'crimson_steel', 'chrome', 'electrum', 'elementium', 'enderium', 'ender_biotite', 'energized_steel', 'fluix', 'graphite', 'hop_graphite', 'invar', 'iridium', 'lumium', 'manasteel', 'niotic_crystal', 'nitro_crystal', 'oratchalcum', 'quartz_enriched_iron', 'refined_glowstone', 'refined_obsidian', 'rock_crystal', 'rubber', 'signalum', 'silicon', 'sky_stone', 'spirited_crystal', 'starmetal', 'steel', 'sulfur', 'terrasteel', 'titanium', 'tungsten', 'mithril'])
  hideStuff('mysticalagriculture', 'essence', ['basalz', 'blazing_crystal', 'blitz', 'blizz', 'brass', 'bronze', 'compressed_iron', 'constantan', 'crimson_steel', 'chrome', 'electrum', 'elementium', 'enderium', 'ender_biotite', 'energized_steel', 'fluix', 'graphite', 'hop_graphite', 'invar', 'iridium', 'lumium', 'manasteel', 'niotic_crystal', 'nitro_crystal', 'oratchalcum', 'quartz_enriched_iron', 'refined_glowstone', 'refined_obsidian', 'rock_crystal', 'rubber', 'signalum', 'silicon', 'sky_stone', 'spirited_crystal', 'starmetal', 'steel', 'sulfur', 'terrasteel', 'titanium', 'tungsten', 'mithril'])
  //#endregion
})
