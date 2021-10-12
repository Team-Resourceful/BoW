onEvent('recipes', e => {
  e.remove({ id: 'akashictome:tome' })

  e.shapeless(
    Item.of('akashictome:tome', {
      'akashictome:is_morphing': 1,
      'akashictome:data': {
        industrialforegoing: {
          id: 'patchouli:guide_book',
          Count: 1,
          tag: {
            'patchouli:book': 'industrialforegoing:industrial_foregoing',
            'akashictome:displayName': {
              text: "IndustrialForegoing'sManual"
            }
          }
        },
        psi: {
          id: 'patchouli:guide_book',
          Count: 1,
          tag: {
            'patchouli:book': 'psi:encyclopaedia_psionica',
            'akashictome:displayName': {
              text: 'EncylopaediaPsionica'
            }
          }
        },
        resourcefulbees: {
          id: 'patchouli:guide_book',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: 'FiftyShadesofBees'
            },
            'patchouli:book': 'resourcefulbees:fifty_shades_of_bees',
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"FiftyShadesofBees"}]}'
            }
          }
        },
        astralsorcery: {
          id: 'astralsorcery:tome',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: 'AstralTome'
            }
          }
        },
        theoneprobe: {
          id: 'theoneprobe:probenote',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: 'ProbeSettings'
            },
            'akashictome:is_morphing': 1
          }
        },
        immersiveengineering: {
          id: 'immersiveengineering:manual',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: "Engineer'sManual"
            },
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Engineer\\\'sManual"}]}'
            }
          }
        },
        eidolon: {
          id: 'eidolon:codex',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: 'ArsEcclesia'
            },
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"ArsEcclesia"}]}'
            }
          }
        },
        elementalcraft: {
          id: 'patchouli:guide_book',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: 'Elementopedia'
            },
            'patchouli:book': 'elementalcraft:element_book',
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Elementopedia"}]}'
            }
          }
        },
        silentgear: {
          id: 'silentgear:guide_book',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: 'SilentGearGuide'
            }
          }
        },
        botania: {
          id: 'botania:lexicon',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: 'LexicaBotania'
            },
            'botania:elven_unlock': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"LexicaBotania"}]}'
            },
            'akashictome:is_morphing': 1
          }
        },
        thermal: {
          id: 'patchouli:guide_book',
          Count: 1,
          tag: {
            'patchouli:book': 'thermal:guidebook',
            'akashictome:displayName': {
              text: 'Thermalpedia'
            }
          }
        },
        rftoolsbase: {
          id: 'rftoolsbase:manual',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: 'TechnologyGuide'
            },
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"TechnologyGuide"}]}'
            }
          }
        },
        integratedtunnels: {
          id: 'integrateddynamics:on_the_dynamics_of_integration',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: 'OnTheDynamicsOfIntegration'
            }
          }
        },
        powah: {
          id: 'powah:book',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: 'Manual(Powah!)'
            },
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Manual(Powah!)"}]}'
            }
          }
        },
        pneumaticcraft: {
          id: 'patchouli:guide_book',
          Count: 1,
          tag: {
            'patchouli:book': 'pneumaticcraft:book',
            'akashictome:displayName': {
              text: 'PNC:RManual'
            }
          }
        },
        naturesaura: {
          id: 'patchouli:guide_book',
          Count: 1,
          tag: {
            'patchouli:book': 'naturesaura:book',
            'akashictome:displayName': {
              text: 'BookOfNaturalAura'
            }
          }
        },
        engineersdecor: {
          id: 'patchouli:guide_book',
          Count: 1,
          tag: {
            'patchouli:book': 'engineersdecor:engineersdecor_manual',
            'akashictome:displayName': {
              text: "Engineer'sDecor"
            }
          }
        },
        mahoutsukai: {
          id: 'mahoutsukai:guidebook',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: 'MahouTsukaiKnowledgeCompendium'
            },
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"MahouTsukaiKnowledgeCompendium"}]}'
            }
          }
        },
        solcarrot: {
          id: 'solcarrot:food_book',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: 'FoodBook'
            },
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"FoodBook"}]}'
            }
          }
        },
        modularrouters: {
          id: 'patchouli:guide_book',
          Count: 1,
          tag: {
            'patchouli:book': 'modularrouters:book',
            'akashictome:displayName': {
              text: 'ModularRoutersManual'
            }
          }
        },
        ars_nouveau: {
          id: 'ars_nouveau:worn_notebook',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: 'WornNotebook'
            }
          }
        },
        bloodmagic: {
          id: 'patchouli:guide_book',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: 'SanguineScientiem'
            },
            'patchouli:book': 'bloodmagic:guide',
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"SanguineScientiem"}]}'
            }
          }
        },
        mysticalagriculture: {
          id: 'patchouli:guide_book',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: 'MysticalAgriculture'
            },
            'patchouli:book': 'mysticalagriculture:guide',
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"MysticalAgriculture"}]}'
            }
          }
        },
        advancedperipherals: {
          id: 'patchouli:guide_book',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: "Advanced Peripherals"
            },
            'patchouli:book': 'advancedperipherals:manual'
          }
        }
      }
    }),
    'minecraft:stick'
  ).id(`kubejs:akashik_tome`)
})
