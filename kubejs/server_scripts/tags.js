onEvent('item.tags', e => {
  //#region additions
  e.add('forge:marble', ['#chisel:marble'])
  e.add('integrateddynamics:menril_logs', ['integrateddynamics:menril_log_filled'])
  e.add('chisel:marble', ['astralsorcery:marble_raw', 'quark:marble'])
  e.add('chisel:limestone', ['create:limestone', 'create:weathered_limestone', 'quark:limestone'])
  e.add('forge:ingots/aluminum', ['zycraft:aluminium'])
  e.add('forge:ingots/aluminium', ['zycraft:aluminium'])
  e.add('forge:plastic', ['#pneumaticcraft:plastic_sheets', 'mekanism:hdpe_sheet'])
  e.add('minecraft:wooden_buttons', ['/forbidden_arcanus:.+_button/'])
  e.add('minecraft:planks', ['/forbidden_arcanus:.+_planks/'])
  e.add('ultimine:zychorium_vein', ['#zycraft:ores/zychorium', 'zycraft:zychorite'])
  e.add('ultimine:obsidian', ['minecraft:obsidian', 'minecraft:crying_obsidian'])
  //#endregion
  //#region removals
  e.remove('minecraft:beehives', ['resourcefulbees:t1_beehive', 'resourcefulbees:t2_beehive', 'resourcefulbees:t3_beehive', 'resourcefulbees:t4_beehive'])
  e.remove('forge:chests/personal', ['mekanism:personal_chest'])
  e.remove('forge:chests/electric', ['mekanism:personal_chest'])
  e.remove('forge:chests', ['mekanism:personal_chest'])
  //#endregion
})
//#endregion

//#region BLOCK TAGS
onEvent('block.tags', e => {
  //#region additions
  e.add('ultimine:zychorium_vein', ['#zycraft:ores/zychorium', 'zycraft:zychorite'])
  e.add('ultimine:obsidian', ['minecraft:obsidian', 'minecraft:crying_obsidian'])
  e.add('integrateddynamics:menril_logs', ['integrateddynamics:menril_log_filled'])
  e.add('resourcefulbees:valid_apiary', ['glassential:glass_dark_ethereal', 'glassential:glass_dark_ethereal_reverse', 'glassential:glass_ethereal', 'glassential:glass_ethereal_reverse', 'glassential:glass_ghostly'])
  e.add('forge:gems/quartz', ['zycraft:quartz_crystal'])
  e.add('forge:marble', ['#chisel:marble'])
  //#endregion
  //#region removals
  e.remove('forge:chests/personal', ['mekanism:personal_chest'])
  e.remove('forge:chests/electric', ['mekanism:personal_chest'])
  e.remove('forge:chests', ['mekanism:personal_chest'])
  //#endregion
})
//#endregion

//#region ENTITY TAGS
onEvent('entity_type.tags', e => {
  e.add('industrialforegoing:mob_imprisonment_tool_blacklist', [/resourcefulbees:.+_bee/])
  e.add('mob_grinding_utils:noswab', [/resourcefulbees:.+_bee/])
})
//#endregion
