onEvent('recipes', e => {
  //#region constants
  let oreMetals = ['iron', 'gold', 'copper', 'aluminum', 'silver', 'lead', 'nickel', 'uranium', 'osmium', 'tin', 'zinc']
  let alloyMetals = ['bronze', 'brass', 'constantan', 'electrum', 'steel', 'invar', 'signalum', 'lumium', 'enderium']
  let gems = ['emerald', 'coal', 'diamond', 'redstone', 'lapis', 'quartz', 'fluorite', 'bitumen', 'cinnabar', 'apatite', 'sulfur', 'potassium_nitrate', 'arcane', 'dimensional', 'ruby', 'sapphire']
  //#endregion

  let unifyOreMetals = (metals) => {
    metals.forEach(metal => {
      if (!utils.listOf(['iron', 'gold']).contains(metal)) {
        e.replaceOutput(`#forge:nuggets/${metal}`, `emendatusenigmatica:${metal}_nugget`)
        e.replaceOutput(`#forge:ingots/${metal}`, `emendatusenigmatica:${metal}_ingot`)
        e.replaceOutput(`#forge:storage_blocks/${metal}`, `emendatusenigmatica:${metal}_block`)
      }

      e.replaceOutput(`#forge:dusts/${metal}`, `emendatusenigmatica:${metal}_dust`)
      e.replaceOutput(`#forge:gears/${metal}`, `emendatusenigmatica:${metal}_gear`)
      e.replaceOutput(`#forge:plates/${metal}`, `emendatusenigmatica:${metal}_plate`)
      e.replaceOutput(`#forge:rods/${metal}`, `emendatusenigmatica:${metal}_rod`)

      if (!utils.listOf(['copper', 'gold', 'iron', 'lead', 'osmium', 'tin', 'uranium']).contains(metal)) {
        e.replaceOutput(`#mekanism:dirty_dusts/${metal}`, `emendatusenigmatica:${metal}_dirty_dust`)
        e.replaceOutput(`#mekanism:clump/${metal}`, `emendatusenigmatica:${metal}_clump`)
        e.replaceOutput(`#mekanism:crystals/${metal}`, `emendatusenigmatica:${metal}_crystal`)
        e.replaceOutput(`#mekanism:shards/${metal}`, `emendatusenigmatica:${metal}_shard`)
        e.replaceOutput(`mekanism:clean_${metal}`, `emendatusenigmatica:clean_${metal}`)
        e.replaceOutput(`mekanism:dirty_${metal}`, `emendatusenigmatica:dirty_${metal}`)
        recipes.mekanism.x5_processing(e, metal)
      }

      e.replaceOutput(`#bloodmagic:fragments/${metal}`, `emendatusenigmatica:${metal}_fragment`)
      e.replaceOutput(`#bloodmagic:gravels/${metal}`, `emendatusenigmatica:${metal}_gravel`)
    })
  }

  let unifyAlloyMetals = (metals) => {
    metals.forEach(metal => {
      e.replaceOutput(`#forge:ingots/${metal}`, `emendatusenigmatica:${metal}_ingot`)
      e.replaceOutput(`#forge:storage_blocks/${metal}`, `emendatusenigmatica:${metal}_block`)
      e.replaceOutput(`#forge:nuggets/${metal}`, `emendatusenigmatica:${metal}_nugget`)
      e.replaceOutput(`#forge:dusts/${metal}`, `emendatusenigmatica:${metal}_dust`)
      e.replaceOutput(`#forge:gears/${metal}`, `emendatusenigmatica:${metal}_gear`)
      e.replaceOutput(`#forge:plates/${metal}`, `emendatusenigmatica:${metal}_plate`)
      e.replaceOutput(`#forge:rods/${metal}`, `emendatusenigmatica:${metal}_rod`)

      e.replaceOutput(`#create:crushed_ores/${metal}`, `emendatusenigmatica:${metal}_crushed`)
    })
  }

  let unifyGems = (gems) => {
    gems.forEach(gem => {
      if (!utils.listOf(['redstone', 'diamond', 'lapis', 'emerald', 'quartz', 'coal']).contains(gem)) {
        e.replaceOutput(`#forge:gems/${gem}`, `emendatusenigmatica:${gem}_gem`)
        e.replaceOutput(`#forge:storage_blocks/${gem}`, `emendatusenigmatica:${gem}_block`)
        e.replaceOutput(`#forge:dusts/${gem}`, `emendatusenigmatica:${gem}_dust`)
      }

      e.replaceOutput(`#mekanism:clump/${gem}`, `emendatusenigmatica:${gem}_clump`)
      e.replaceOutput(`#mekanism:crystals/${gem}`, `emendatusenigmatica:${gem}_crystal`)
      e.replaceOutput(`#mekanism:dirty_dusts/${gem}`, `emendatusenigmatica:${gem}_dirty_dust`)
      e.replaceOutput(`#mekanism:shards/${gem}`, `emendatusenigmatica:${gem}_shard`)

      recipes.mekanism.x5_processing(e, gem)

      e.replaceOutput(`#create:crushed_ores/${gem}`, `emendatusenigmatica:${gem}_crushed`)
      e.replaceOutput(`#forge:dusts/coal`, `emendatusenigmatica:coal_dust`)

      e.replaceOutput(`#bloodmagic:fragments/${gem}`, `emendatusenigmatica:${gem}_fragment`)
      e.replaceOutput(`#bloodmagic:gravels/${gem}`, `emendatusenigmatica:${gem}_gravel`)
    })
  }

  recipes.custom.crushing(e, 'minecraft:ender_pearl', 'emendatusenigmatica:ender_dust')
  recipes.custom.crushing(e, 'minecraft:charcoal', 'emendatusenigmatica:charcoal_dust')
  recipes.custom.crushing(e, 'minecraft:obsidian', 'emendatusenigmatica:obsidian_dust')
  recipes.custom.crushing(e, '#forge:ingots/graphite', 'bigreactors:graphite_dust')

  e.recipes.createPressing('bigreactors:graphite_ingot', 'minecraft:coal')
  e.recipes.createPressing('bigreactors:graphite_ingot', 'minecraft:charcoal')

  e.replaceOutput('#forge:silicon', 'emendatusenigmatica:silicon_gem')
  e.replaceOutput('#forge:gems/dimensional', 'emendatusenigmatica:dimensional_gem')
  e.replaceOutput('rftoolsbase:dimensionalshard', 'emendatusenigmatica:dimensional_gem')

  e.replaceInput('rftoolsbase:dimensionalshard', 'emendatusenigmatica:dimensional_gem')

  unifyOreMetals(oreMetals)
  unifyAlloyMetals(alloyMetals)
  unifyGems(gems)

  e.remove({ input: 'ob_core:iron_gear' })

  removeRecipeByID(e, [
    /^emendatusenigmatica:ore_from_chunk_crafting\/.*/,
    /^emendatusenigmatica:chunk_from_cluster\/.*/,
    /^emendatusenigmatica:cluster_from_chunk\/.*/,
    /^emendatusenigmatica:dust_from_chunk\/.*/,

    'quark:building/crafting/compressed/charcoal_block',
    'ob_core:iron_gear',
    'cb_microblock:stone_rod',
    'bigreactors:smelting/graphite_from_charcoal',
    'bigreactors:smelting/graphite_from_coal',
    'bigreactors:blasting/graphite_from_charcoal',
    'bigreactors:blasting/graphite_from_coal',
  ])
})
