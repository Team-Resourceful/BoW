onEvent('recipes', e => {
  //#regionconstants
  let oreMetals = ['iron', 'gold', 'copper', 'aluminum', 'silver', 'lead', 'nickel', 'uranium', 'osmium', 'tin', 'zinc']
  let alloyMetals = ['bronze', 'brass', 'constantan', 'electrum', 'steel', 'invar', 'signalum', 'lumium', 'enderium']
  let gems = ['emerald', 'coal', 'diamond', 'redstone', 'lapis', 'quartz', 'fluorite', 'bitumen', 'cinnabar', 'apatite', 'sulfur', 'potassium_nitrate', 'arcane', 'dimensional', 'ruby', 'sapphire']
  //#endregion

  /**
  *UnifiesMetalstohaveallofthembefromthesamemod
  *@param{String}metalsListofMetalnamestobeunified
  */
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
        // mekanismDissolution(e, `forge:ores/${metal}`, `emendatusenigmatica:dirty_${metal}`)
        // mekanismWashing(e, `#mekanism:dirty_${metal}`, `emendatusenigmatica:clean_${metal}`)
        // mekanismCrystallizing(e, `#mekanism:dirty_${metal}`, `emendatusenigmatica:${metal}_crystal`)
        // mekanismInjecting(e, `#mekanism:crystals/${metal}`, `emendatusenigmatica:${metal}_shard`)
        // mekanismPurifying(e, `#mekanism:shards/${metal}`, `emendatusenigmatica:${metal}_clump`)
        // mekanismCrushing(e, `#mekanism:clump/${metal}`, `emendatusenigmatica:${metal}_dirty_dust`)
        // mekanismEnriching(e, `#mekanism:dirty_dusts/${metal}`, `emendatusenigmatica:${metal}_dust`)
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
      // mekanismDissolution(e, `forge:ores/${gem}`, `emendatusenigmatica:dirty_${gem}`)
      // mekanismWashing(e, `#mekanism:dirty_${gem}`, `emendatusenigmatica:clean_${gem}`)
      // mekanismCrystallizing(e, `#mekanism:dirty_${gem}`, `emendatusenigmatica:${gem}_crystal`)
      // mekanismInjecting(e, `#mekanism:crystals/${gem}`, `emendatusenigmatica:${gem}_shard`)
      // mekanismPurifying(e, `#mekanism:shards/${gem}`, `emendatusenigmatica:${gem}_clump`)
      // mekanismCrushing(e, `#mekanism:clump/${gem}`, `emendatusenigmatica:${gem}_dirty_dust`)
      // mekanismEnriching(e, `#mekanism:dirty_dusts/${gem}`, `emendatusenigmatica:${gem}_dust`)

      e.replaceOutput(`#create:crushed_ores/${gem}`, `emendatusenigmatica:${gem}_crushed`)

      e.replaceOutput(`#bloodmagic:fragments/${gem}`, `emendatusenigmatica:${gem}_fragment`)
      e.replaceOutput(`#bloodmagic:gravels/${gem}`, `emendatusenigmatica:${gem}_gravel`)
    })
  }

  unifyOreMetals(oreMetals)
  unifyAlloyMetals(alloyMetals)
  unifyGems(gems)

  removeRecipeByID(e, [
    /^emendatusenigmatica:ore_from_chunk_crafting\/.*/,
    /^emendatusenigmatica:chunk_from_cluster\/.*/,
    /^emendatusenigmatica:cluster_from_chunk\/.*/,
    /^emendatusenigmatica:dust_from_chunk\/.*/
  ])
})
