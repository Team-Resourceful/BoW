onEvent('recipes', e => {
  /**
  * Unifies Metals to have all of them be from the same mod
  * @param {String} metal The name of the Metal to be unified
  * @param {String} mod The name of the Mod the metal should be unified to
  */
  let unify = (metal, mod) => {
    let dust, nugget, ingot, block
    if (mod == 'immersiveengineering') {
      dust = `${mod}:dust_${metal}`
      nugget = `${mod}:nugget_${metal}`
      ingot = `${mod}:ingot_${metal}`
      block = `${mod}:storage_${metal}`
    } else {
      dust = `${mod}:${metal}_dust`
      nugget = `${mod}:${metal}_nugget`
      ingot = `${mod}:${metal}_ingot`
      block = `${mod}:${metal}_block`
    }

    e.replaceOutput(`#forge:dusts/${metal}`, dust)
    e.replaceOutput(`#forge:nuggets/${metal}`, nugget)
    e.replaceOutput(`#forge:ingots/${metal}`, ingot)
    e.replaceOutput(`#forge:storage_blocks/${metal}`, block)

    e.remove({ type: 'minecraft:smelting', output: ingot })
    e.remove({ type: 'minecraft:blasting', output: ingot })
    e.remove({ type: 'minecraft:crafting_shaped', output: ingot })
    e.remove({ type: 'minecraft:crafting_shaped', output: nugget })
    e.remove({ type: 'minecraft:crafting_shaped', output: block })
    e.remove({ type: 'minecraft:crafting_shapeless', output: ingot })
    e.remove({ type: 'minecraft:crafting_shapeless', output: nugget })
    e.remove({ type: 'minecraft:crafting_shapeless', output: block })

    e.shapeless(Item.of(ingot, 9), `#forge:storage_blocks/${metal}`)
    e.shapeless(ingot, `9x #forge:nuggets/${metal}`)
    e.shapeless(Item.of(nugget, 9), `#forge:ingots/${metal}`)
    e.shapeless(block, `9x #forge:ingots/${metal}`)
    e.smelting(ingot, `#forge:dusts/${metal}`)
    e.smelting(ingot, `#forge:ores/${metal}`)
    e.smelting(ingot, `create:crushed_${metal}_ore`)
    e.blasting(ingot, `#forge:dusts/${metal}`)
    e.blasting(ingot, `#forge:ores/${metal}`)
    e.blasting(ingot, `create:crushed_${metal}_ore`)
  }

  unify('copper', 'thermal')
  unify('nickel', 'thermal')
  unify('silver', 'thermal')
  unify('lead', 'thermal')
  unify('tin', 'thermal')
  unify('uranium', 'immersiveengineering')

  e.replaceOutput('#forge:slag', 'thermal:slag')
})