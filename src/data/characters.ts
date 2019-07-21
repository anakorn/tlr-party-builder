import * as TLR from '../types/types';

const characters: Array<TLR.Character> = [
  {
    "id": "allan",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "furfur-dominus",
          "equipmentTargetId": "oriax",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "oriax",
          "equipmentTargetId": "oriax-dominus",
          "materialRequirements": [
            {
              "materialId": "jewel-steel",
              "quantityNeeded": 5,
              "quantityOwned": 0
            },
            {
              "materialId": "sharp-vulture-beak",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "vile-lizard-mane",
              "quantityNeeded": 6,
              "quantityOwned": 0
            }
          ]
        }
      ]
    ]
  },
  {
    "id": "baulson",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "warrior-s-trident",
          "equipmentTargetId": "combat-harpoon",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "combat-harpoon",
          "equipmentTargetId": "warrior-s-harpoon",
          "materialRequirements": [
            {
              "materialId": "vackel-iron",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "thick-mystic-fiend-fur",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "tanned-albic-hide",
              "quantityNeeded": 3,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "warrior-s-harpoon",
          "equipmentTargetId": "commander-s-harpoon",
          "materialRequirements": [
            {
              "materialId": "royotian-steel",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "meteorite",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "thick-beast-hide",
              "quantityNeeded": 3,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "commander-s-harpoon",
          "equipmentTargetId": "elite-s-harpoon",
          "materialRequirements": [
            {
              "materialId": "platinum-ore",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "mystic-fiend-horn",
              "quantityNeeded": 5,
              "quantityOwned": 0
            },
            {
              "materialId": "glowfly",
              "quantityNeeded": 5,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "elite-s-harpoon",
          "equipmentTargetId": "champion-s-harpoon",
          "materialRequirements": [
            {
              "materialId": "mystic-skelenyte",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "wyvern-beak",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "fruit-of-knowledge",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "champion-s-harpoon",
          "equipmentTargetId": "naginata",
          "materialRequirements": [
            {
              "materialId": "necrotic-metal",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "inverted-terrapest-barb",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "glasya-labolas-larynx",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "naginata",
          "equipmentTargetId": "fafnirsbane",
          "materialRequirements": []
        }
      ]
    ]
  },
  {
    "id": "blocter",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "warrior-s-tabar-zin",
          "equipmentTargetId": "commander-s-tabar-zin",
          "materialRequirements": [
            {
              "materialId": "steel-ore",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "oilfly",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "land-insecta-carapace",
              "quantityNeeded": 4,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "commander-s-tabar-zin",
          "equipmentTargetId": "elite-s-tabar-zin",
          "materialRequirements": [
            {
              "materialId": "royotian-steel",
              "quantityNeeded": 3,
              "quantityOwned": 0
            },
            {
              "materialId": "coarse-beast-fur",
              "quantityNeeded": 5,
              "quantityOwned": 0
            },
            {
              "materialId": "fly-feather",
              "quantityNeeded": 1,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "elite-s-tabar-zin",
          "equipmentTargetId": "champion-s-tabar-zin",
          "materialRequirements": [
            {
              "materialId": "reprocessed-metal",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "crab-leg",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "polished-scale",
              "quantityNeeded": 3,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "champion-s-tabar-zin",
          "equipmentTargetId": "warlord-s-tabar-zin",
          "materialRequirements": [
            {
              "materialId": "platinum-ore",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "azhdaha-tail",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "large-talon",
              "quantityNeeded": 3,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "warlord-s-tabar-zin",
          "equipmentTargetId": "divine-tabar-zin",
          "materialRequirements": [
            {
              "materialId": "mystic-skelenyte",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "blacksteel-ore",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "inverted-chimera-scale",
              "quantityNeeded": 3,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "divine-tabar-zin",
          "equipmentTargetId": "fellwyrm",
          "materialRequirements": [
            {
              "materialId": "jewel-steel",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "grand-spider-fluid",
              "quantityNeeded": 4,
              "quantityOwned": 0
            },
            {
              "materialId": "soft-homunculus-hide",
              "quantityNeeded": 4,
              "quantityOwned": 0
            }
          ]
        }
      ]
    ]
  },
  {
    "id": "caedmon",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "valac-rex",
          "equipmentTargetId": "ose",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "ose",
          "equipmentTargetId": "ose-dominus",
          "materialRequirements": [
            {
              "materialId": "necrotic-metal",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "thick-treant-branch",
              "quantityNeeded": 3,
              "quantityOwned": 0
            },
            {
              "materialId": "war-dragon-fang",
              "quantityNeeded": 4,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "ose-dominus",
          "equipmentTargetId": "buer",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "buer",
          "equipmentTargetId": "buer-dominus",
          "materialRequirements": [
            {
              "materialId": "jewel-steel",
              "quantityNeeded": 5,
              "quantityOwned": 0
            },
            {
              "materialId": "sharp-manticore-leg",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "sharp-vulture-beak",
              "quantityNeeded": 6,
              "quantityOwned": 0
            }
          ]
        }
      ]
    ]
  },
  {
    "id": "darien",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "superior-pitchfork",
          "equipmentTargetId": "superlative-pitchfork",
          "materialRequirements": [
            {
              "materialId": "divine-dragonyte",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "circular-albic-hide",
              "quantityNeeded": 3,
              "quantityOwned": 0
            },
            {
              "materialId": "vile-lizard-pouch",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "superlative-pitchfork",
          "equipmentTargetId": "devil-s-fork",
          "materialRequirements": [
            {
              "materialId": "jewel-steel",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "leap-frog-fin",
              "quantityNeeded": 4,
              "quantityOwned": 0
            },
            {
              "materialId": "sharp-landworm-fang",
              "quantityNeeded": 4,
              "quantityOwned": 0
            }
          ]
        }
      ]
    ]
  },
  {
    "id": "david-nassau",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "warrior-s-rapier",
          "equipmentTargetId": "combat-buckler",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "combat-buckler",
          "equipmentTargetId": "warrior-s-buckler",
          "materialRequirements": [
            {
              "materialId": "steel-ore",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "faerie-meat",
              "quantityNeeded": 5,
              "quantityOwned": 0
            },
            {
              "materialId": "imp-fang",
              "quantityNeeded": 6,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "warrior-s-buckler",
          "equipmentTargetId": "commander-s-rapier",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "commander-s-rapier",
          "equipmentTargetId": "pixie-s-heart",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "pixie-s-heart",
          "equipmentTargetId": "elite-s-rapier",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "elite-s-rapier",
          "equipmentTargetId": "elite-s-buckler",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "elite-s-buckler",
          "equipmentTargetId": "champion-s-rapier",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "champion-s-rapier",
          "equipmentTargetId": "rider-shield",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "rider-shield",
          "equipmentTargetId": "bluesteel",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "bluesteel",
          "equipmentTargetId": "flame-bluesteel",
          "materialRequirements": [
            {
              "materialId": "ruby-crystal",
              "quantityNeeded": 3,
              "quantityOwned": 0
            },
            {
              "materialId": "necrotic-metal",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "large-colossus-bristle",
              "quantityNeeded": 4,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "flame-bluesteel",
          "equipmentTargetId": "superior-bluesteel",
          "materialRequirements": [
            {
              "materialId": "dragonicle-ore",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "tough-phantom-husk",
              "quantityNeeded": 4,
              "quantityOwned": 0
            },
            {
              "materialId": "world-tree-timber",
              "quantityNeeded": 7,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "superior-bluesteel",
          "equipmentTargetId": "superlative-bluesteel",
          "materialRequirements": [
            {
              "materialId": "damascus-ore",
              "quantityNeeded": 3,
              "quantityOwned": 0
            },
            {
              "materialId": "demon-mane",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "reya-s-note",
              "quantityNeeded": 1,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "superlative-bluesteel",
          "equipmentTargetId": "damascene-buckler",
          "materialRequirements": []
        }
      ]
    ]
  },
  {
    "id": "duke-of-ghor",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "bilqis-artis",
          "equipmentTargetId": "bilqis-virtutis",
          "materialRequirements": [
            {
              "materialId": "jewel-steel",
              "quantityNeeded": 8,
              "quantityOwned": 0
            },
            {
              "materialId": "fly-scale-hide",
              "quantityNeeded": 10,
              "quantityOwned": 0
            },
            {
              "materialId": "reya-s-note",
              "quantityNeeded": 3,
              "quantityOwned": 0
            }
          ]
        }
      ]
    ]
  },
  {
    "id": "emma-honeywell",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "emma-s-longsword-upgrade",
          "equipmentTargetId": "emma-s-tuck-upgrade",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "emma-s-tuck-upgrade",
          "equipmentTargetId": "emma-s-longsword-final",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "emma-s-longsword-final",
          "equipmentTargetId": "emma-s-tuck-final",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "emma-s-tuck-final",
          "equipmentTargetId": "longsword",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "longsword",
          "equipmentTargetId": "tuck",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "tuck",
          "equipmentTargetId": "superior-longsword",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "superior-longsword",
          "equipmentTargetId": "superior-tuck",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "superior-tuck",
          "equipmentTargetId": "bluesteel",
          "materialRequirements": [
            {
              "materialId": "necrotic-metal",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "giant-shellfly-scalp",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "thin-phantom-wing",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "bluesteel",
          "equipmentTargetId": "bluesteel",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "bluesteel",
          "equipmentTargetId": "superior-bluesteel",
          "materialRequirements": [
            {
              "materialId": "dragonicle-ore",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "tough-phantom-husk",
              "quantityNeeded": 4,
              "quantityOwned": 0
            },
            {
              "materialId": "world-tree-timber",
              "quantityNeeded": 7,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "superior-bluesteel",
          "equipmentTargetId": "superior-bluesteel",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "superior-bluesteel",
          "equipmentTargetId": "superlative-bluesteel",
          "materialRequirements": [
            {
              "materialId": "damascus-ore",
              "quantityNeeded": 3,
              "quantityOwned": 0
            },
            {
              "materialId": "demon-mane",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "reya-s-note",
              "quantityNeeded": 1,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "superlative-bluesteel",
          "equipmentTargetId": "superlative-bluesteel",
          "materialRequirements": []
        }
      ]
    ]
  },
  {
    "id": "emmy-honeywell",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "longsword",
          "equipmentTargetId": "superior-longsword",
          "materialRequirements": [
            {
              "materialId": "truesilver-ore",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "pointed-fenris-tail",
              "quantityNeeded": 3,
              "quantityOwned": 0
            },
            {
              "materialId": "anthrovore-bulb",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "superior-longsword",
          "equipmentTargetId": "superior-tuck",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "superior-tuck",
          "equipmentTargetId": "bluesteel",
          "materialRequirements": [
            {
              "materialId": "necrotic-metal",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "giant-shellfly-scalp",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "thin-phantom-wing",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "bluesteel",
          "equipmentTargetId": "bluesteel",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "bluesteel",
          "equipmentTargetId": "superior-bluesteel",
          "materialRequirements": [
            {
              "materialId": "dragonicle-ore",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "tough-phantom-husk",
              "quantityNeeded": 4,
              "quantityOwned": 0
            },
            {
              "materialId": "world-tree-timber",
              "quantityNeeded": 7,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "superior-bluesteel",
          "equipmentTargetId": "superior-bluesteel",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "superior-bluesteel",
          "equipmentTargetId": "superlative-bluesteel",
          "materialRequirements": [
            {
              "materialId": "damascus-ore",
              "quantityNeeded": 3,
              "quantityOwned": 0
            },
            {
              "materialId": "demon-mane",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "reya-s-note",
              "quantityNeeded": 1,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "superlative-bluesteel",
          "equipmentTargetId": "superlative-bluesteel",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "superlative-bluesteel",
          "equipmentTargetId": "nightbloom",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "nightbloom",
          "equipmentTargetId": "nightbloom-artis",
          "materialRequirements": [
            {
              "materialId": "jewel-steel",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "demon-mane",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "reya-s-note",
              "quantityNeeded": 1,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "nightbloom-artis",
          "equipmentTargetId": "nightbloom-virtutis",
          "materialRequirements": [
            {
              "materialId": "jewel-steel",
              "quantityNeeded": 5,
              "quantityOwned": 0
            },
            {
              "materialId": "vile-lizard-mane",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "reya-s-note",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        }
      ]
    ]
  },
  {
    "id": "gabriel",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "commander-s-rapier",
          "equipmentTargetId": "aspis-bellatoris",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "aspis-bellatoris",
          "equipmentTargetId": "elite-s-rapier",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "elite-s-rapier",
          "equipmentTargetId": "aspis-praetorius",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "aspis-praetorius",
          "equipmentTargetId": "champion-s-rapier",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "champion-s-rapier",
          "equipmentTargetId": "aspis-nobilatis",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "aspis-nobilatis",
          "equipmentTargetId": "bluesteel",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "bluesteel",
          "equipmentTargetId": "soulshield-shield",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "soulshield-shield",
          "equipmentTargetId": "poison-bluesteel",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "poison-bluesteel",
          "equipmentTargetId": "caustic-soulshield",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "caustic-soulshield",
          "equipmentTargetId": "superior-bluesteel",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "superior-bluesteel",
          "equipmentTargetId": "superior-soulshield",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "superior-soulshield",
          "equipmentTargetId": "superlative-bluesteel",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "superlative-bluesteel",
          "equipmentTargetId": "superlative-soulshield",
          "materialRequirements": []
        }
      ]
    ]
  },
  {
    "id": "gaou",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "commander-s-grandsword",
          "equipmentTargetId": "elite-s-grandsword",
          "materialRequirements": [
            {
              "materialId": "royotian-steel",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "superior-cotton",
              "quantityNeeded": 3,
              "quantityOwned": 0
            },
            {
              "materialId": "land-insecta-talon",
              "quantityNeeded": 5,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "elite-s-grandsword",
          "equipmentTargetId": "champion-s-grandsword",
          "materialRequirements": [
            {
              "materialId": "platinum-ore",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "polished-scale",
              "quantityNeeded": 5,
              "quantityOwned": 0
            },
            {
              "materialId": "hydra-bristle",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "champion-s-grandsword",
          "equipmentTargetId": "warlord-s-grandsword",
          "materialRequirements": [
            {
              "materialId": "mystic-skelenyte",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "colossus-skull",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "tanned-mystic-fiend-hide",
              "quantityNeeded": 6,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "warlord-s-grandsword",
          "equipmentTargetId": "masterblade",
          "materialRequirements": [
            {
              "materialId": "necrotic-metal",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "anthrovore-trunk",
              "quantityNeeded": 4,
              "quantityOwned": 0
            },
            {
              "materialId": "world-tree-timber",
              "quantityNeeded": 6,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "masterblade",
          "equipmentTargetId": "poison-masterblade",
          "materialRequirements": [
            {
              "materialId": "emerald-crystal",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "necrotic-metal",
              "quantityNeeded": 5,
              "quantityOwned": 0
            },
            {
              "materialId": "aerodynamic-wyvern-wing",
              "quantityNeeded": 6,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "poison-masterblade",
          "equipmentTargetId": "superior-masterblade",
          "materialRequirements": [
            {
              "materialId": "dragonicle-ore",
              "quantityNeeded": 8,
              "quantityOwned": 0
            },
            {
              "materialId": "djin-s-coin",
              "quantityNeeded": 8,
              "quantityOwned": 0
            },
            {
              "materialId": "hydra-beak",
              "quantityNeeded": 6,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "superior-masterblade",
          "equipmentTargetId": "superlative-masterblade",
          "materialRequirements": [
            {
              "materialId": "damascus-ore",
              "quantityNeeded": 8,
              "quantityOwned": 0
            },
            {
              "materialId": "fly-scale-hide",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "reya-s-note",
              "quantityNeeded": 1,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "superlative-masterblade",
          "equipmentTargetId": "obsidian",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "obsidian",
          "equipmentTargetId": "obsidian-artis",
          "materialRequirements": [
            {
              "materialId": "jewel-steel",
              "quantityNeeded": 10,
              "quantityOwned": 0
            },
            {
              "materialId": "oarfish-fin",
              "quantityNeeded": 14,
              "quantityOwned": 0
            },
            {
              "materialId": "reya-s-note",
              "quantityNeeded": 4,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "obsidian-artis",
          "equipmentTargetId": "obsidian-virtutis",
          "materialRequirements": [
            {
              "materialId": "jewel-steel",
              "quantityNeeded": 14,
              "quantityOwned": 0
            },
            {
              "materialId": "butterfly-liver",
              "quantityNeeded": 14,
              "quantityOwned": 0
            },
            {
              "materialId": "reya-s-note",
              "quantityNeeded": 5,
              "quantityOwned": 0
            }
          ]
        }
      ]
    ]
  },
  {
    "id": "glenys",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "ninja-katana",
          "equipmentTargetId": "tataraichi",
          "materialRequirements": [
            {
              "materialId": "primordial-alloy",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "divine-metal",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "pest-toxin",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "tataraichi",
          "equipmentTargetId": "lytic-tataraichi",
          "materialRequirements": [
            {
              "materialId": "snowy-crystal",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "necrotic-metal",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "inverted-terrapest-barb",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "lytic-tataraichi",
          "equipmentTargetId": "excellent-tataraichi",
          "materialRequirements": [
            {
              "materialId": "dragonicle-ore",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "large-colossus-bristle",
              "quantityNeeded": 4,
              "quantityOwned": 0
            },
            {
              "materialId": "grand-rockgrater-tail",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "excellent-tataraichi",
          "equipmentTargetId": "optimal-tataraichi",
          "materialRequirements": [
            {
              "materialId": "damascus-ore",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "tough-phantom-husk",
              "quantityNeeded": 4,
              "quantityOwned": 0
            },
            {
              "materialId": "djin-s-coin",
              "quantityNeeded": 4,
              "quantityOwned": 0
            }
          ]
        }
      ]
    ]
  },
  {
    "id": "hannah",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "crimsonblade-virtutis",
          "equipmentTargetId": "nightbloom-royal",
          "materialRequirements": [
            {
              "materialId": "jewel-steel",
              "quantityNeeded": 5,
              "quantityOwned": 0
            },
            {
              "materialId": "butterfly-liver",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "reya-s-note",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        }
      ]
    ]
  },
  {
    "id": "haruko",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "nagapuran",
          "equipmentTargetId": "divine-halberd",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "divine-halberd",
          "equipmentTargetId": "damascene-halberd",
          "materialRequirements": [
            {
              "materialId": "damascus-ore",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "grand-spider-fluid",
              "quantityNeeded": 4,
              "quantityOwned": 0
            },
            {
              "materialId": "vulture-underbelly-fur",
              "quantityNeeded": 8,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "damascene-halberd",
          "equipmentTargetId": "malystrix",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "malystrix",
          "equipmentTargetId": "malystrix-artis",
          "materialRequirements": [
            {
              "materialId": "jewel-steel",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "azhdaha-patagium",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "reya-s-note",
              "quantityNeeded": 1,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "malystrix-artis",
          "equipmentTargetId": "malystrix-virtutis",
          "materialRequirements": [
            {
              "materialId": "jewel-steel",
              "quantityNeeded": 5,
              "quantityOwned": 0
            },
            {
              "materialId": "sharp-vulture-beak",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "reya-s-note",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        }
      ]
    ]
  },
  {
    "id": "hinnah",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "azureblade-virtutis",
          "equipmentTargetId": "nightbloom-mist",
          "materialRequirements": [
            {
              "materialId": "jewel-steel",
              "quantityNeeded": 5,
              "quantityOwned": 0
            },
            {
              "materialId": "vile-lizard-mane",
              "quantityNeeded": 10,
              "quantityOwned": 0
            },
            {
              "materialId": "reya-s-note",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        }
      ]
    ]
  },
  {
    "id": "jager",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "warlord-s-halberd",
          "equipmentTargetId": "glaive",
          "materialRequirements": [
            {
              "materialId": "necrotic-metal",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "tough-brynhildr-husk",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "thick-treant-branch",
              "quantityNeeded": 3,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "glaive",
          "equipmentTargetId": "caustic-glaive",
          "materialRequirements": [
            {
              "materialId": "snowy-crystal",
              "quantityNeeded": 3,
              "quantityOwned": 0
            },
            {
              "materialId": "necrotic-metal",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "large-albic-ear",
              "quantityNeeded": 4,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "caustic-glaive",
          "equipmentTargetId": "superior-glaive",
          "materialRequirements": [
            {
              "materialId": "dragonicle-ore",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "sharp-landworm-fang",
              "quantityNeeded": 4,
              "quantityOwned": 0
            },
            {
              "materialId": "ancient-carapace",
              "quantityNeeded": 3,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "superior-glaive",
          "equipmentTargetId": "superlative-glaive",
          "materialRequirements": [
            {
              "materialId": "damascus-ore",
              "quantityNeeded": 3,
              "quantityOwned": 0
            },
            {
              "materialId": "azhdaha-patagium",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "reya-s-note",
              "quantityNeeded": 1,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "superlative-glaive",
          "equipmentTargetId": "schiavona-talisman",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "schiavona-talisman",
          "equipmentTargetId": "schiavona-artis",
          "materialRequirements": [
            {
              "materialId": "jewel-steel",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "demon-mane",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "reya-s-note",
              "quantityNeeded": 1,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "schiavona-artis",
          "equipmentTargetId": "schiavona-virtutis",
          "materialRequirements": [
            {
              "materialId": "jewel-steel",
              "quantityNeeded": 5,
              "quantityOwned": 0
            },
            {
              "materialId": "hydra-beak",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "reya-s-note",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        }
      ]
    ]
  },
  {
    "id": "jorgen-adventurer",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "spatha-bellatoris",
          "equipmentTargetId": "warrior-s-kiteshield",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "warrior-s-kiteshield",
          "equipmentTargetId": "spatha-praetorius",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "spatha-praetorius",
          "equipmentTargetId": "commander-s-kiteshield",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "commander-s-kiteshield",
          "equipmentTargetId": "elite-s-kiteshield",
          "materialRequirements": [
            {
              "materialId": "reprocessed-metal",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "raptor-hide",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "vicious-plant-timber",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "elite-s-kiteshield",
          "equipmentTargetId": "spatha-nobilatis",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "spatha-nobilatis",
          "equipmentTargetId": "champion-s-kiteshield",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "champion-s-kiteshield",
          "equipmentTargetId": "joyeuse",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "joyeuse",
          "equipmentTargetId": "soulshield",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "soulshield",
          "equipmentTargetId": "frost-soulshield",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "frost-soulshield",
          "equipmentTargetId": "superior-soulshield",
          "materialRequirements": [
            {
              "materialId": "dragonicle-ore",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "grand-spider-fluid",
              "quantityNeeded": 4,
              "quantityOwned": 0
            },
            {
              "materialId": "pangu-s-bone",
              "quantityNeeded": 7,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "superior-soulshield",
          "equipmentTargetId": "superlative-soulshield",
          "materialRequirements": [
            {
              "materialId": "dragonicle-ore",
              "quantityNeeded": 5,
              "quantityOwned": 0
            },
            {
              "materialId": "oculus-tooth",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "reya-s-note",
              "quantityNeeded": 1,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "superlative-soulshield",
          "equipmentTargetId": "imperator-s-sword",
          "materialRequirements": []
        }
      ]
    ]
  },
  {
    "id": "jorgen-aristocrat",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "warlord-s-scepter",
          "equipmentTargetId": "draconile-scepter",
          "materialRequirements": [
            {
              "materialId": "dragonicle-ore",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "thin-oarfish-wing",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "fly-feather",
              "quantityNeeded": 4,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "draconile-scepter",
          "equipmentTargetId": "damascene-scepter",
          "materialRequirements": [
            {
              "materialId": "damascus-ore",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "demon-mane",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "sharp-landworm-fang",
              "quantityNeeded": 6,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "damascene-scepter",
          "equipmentTargetId": "imperator-s-staff",
          "materialRequirements": []
        }
      ]
    ]
  },
  {
    "id": "jorgen-djin",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "warlord-s-trident",
          "equipmentTargetId": "divine-trident",
          "materialRequirements": [
            {
              "materialId": "mystic-skelenyte",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "blacksteel-ore",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "imp-scale-hide",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "divine-trident",
          "equipmentTargetId": "vulcanlance",
          "materialRequirements": []
        }
      ]
    ]
  },
  {
    "id": "jorgen-general",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "champion-s-bludgeon",
          "equipmentTargetId": "warlord-s-bludgeon",
          "materialRequirements": [
            {
              "materialId": "mystic-skelenyte",
              "quantityNeeded": 4,
              "quantityOwned": 0
            },
            {
              "materialId": "imp-scale-hide",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "inverted-raptor-talon",
              "quantityNeeded": 8,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "warlord-s-bludgeon",
          "equipmentTargetId": "divine-bludgeon",
          "materialRequirements": [
            {
              "materialId": "mystic-skelenyte",
              "quantityNeeded": 4,
              "quantityOwned": 0
            },
            {
              "materialId": "blacksteel-ore",
              "quantityNeeded": 4,
              "quantityOwned": 0
            },
            {
              "materialId": "azhdaha-patagium",
              "quantityNeeded": 6,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "divine-bludgeon",
          "equipmentTargetId": "damascene-bludgeon",
          "materialRequirements": [
            {
              "materialId": "damascus-ore",
              "quantityNeeded": 8,
              "quantityOwned": 0
            },
            {
              "materialId": "butterfly-liver",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "vile-lizard-mane",
              "quantityNeeded": 8,
              "quantityOwned": 0
            }
          ]
        }
      ]
    ]
  },
  {
    "id": "jorgen-raider",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "hawkwind",
          "equipmentTargetId": "poison-hawkwind",
          "materialRequirements": [
            {
              "materialId": "emerald-crystal",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "necrotic-metal",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "large-weredragon-talon",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "poison-hawkwind",
          "equipmentTargetId": "superior-hawkwind",
          "materialRequirements": [
            {
              "materialId": "dragonicle-ore",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "large-colossus-bristle",
              "quantityNeeded": 4,
              "quantityOwned": 0
            },
            {
              "materialId": "world-tree-timber",
              "quantityNeeded": 6,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "superior-hawkwind",
          "equipmentTargetId": "superlative-hawkwind",
          "materialRequirements": [
            {
              "materialId": "damascus-ore",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "tough-phantom-husk",
              "quantityNeeded": 4,
              "quantityOwned": 0
            },
            {
              "materialId": "djin-s-coin",
              "quantityNeeded": 4,
              "quantityOwned": 0
            }
          ]
        }
      ]
    ]
  },
  {
    "id": "jorgen-sage",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "vare",
          "equipmentTargetId": "superior-vare",
          "materialRequirements": [
            {
              "materialId": "divine-dragonyte",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "vulture-underbelly-fur",
              "quantityNeeded": 3,
              "quantityOwned": 0
            },
            {
              "materialId": "concealed-spiritlord-horn",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "superior-vare",
          "equipmentTargetId": "superlative-vare",
          "materialRequirements": [
            {
              "materialId": "blacksteel-ore",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "harpylia-s-hide",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "large-weredragon-talon",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        }
      ]
    ]
  },
  {
    "id": "jorgen-warrior",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "ninja-katana",
          "equipmentTargetId": "ninja-katana",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "ninja-katana",
          "equipmentTargetId": "shogun-katana",
          "materialRequirements": [
            {
              "materialId": "platinum-ore",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "fly-fluid",
              "quantityNeeded": 4,
              "quantityOwned": 0
            },
            {
              "materialId": "large-talon",
              "quantityNeeded": 3,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "shogun-katana",
          "equipmentTargetId": "shogun-katana",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "shogun-katana",
          "equipmentTargetId": "sacred-katana",
          "materialRequirements": [
            {
              "materialId": "mystic-skelenyte",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "blacksteel-ore",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "circular-albic-hide",
              "quantityNeeded": 3,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "sacred-katana",
          "equipmentTargetId": "mithril-katana",
          "materialRequirements": [
            {
              "materialId": "damascus-ore",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "leap-frog-fin",
              "quantityNeeded": 4,
              "quantityOwned": 0
            },
            {
              "materialId": "crab-fluid",
              "quantityNeeded": 8,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "mithril-katana",
          "equipmentTargetId": "mithril-katana",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "mithril-katana",
          "equipmentTargetId": "blackbeak",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "blackbeak",
          "equipmentTargetId": "blackbeak",
          "materialRequirements": []
        }
      ]
    ]
  },
  {
    "id": "kate",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "aspis-nobilatis",
          "equipmentTargetId": "superior-scythe",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "superior-scythe",
          "equipmentTargetId": "soulshield-shield",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "soulshield-shield",
          "equipmentTargetId": "superlative-scythe",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "superlative-scythe",
          "equipmentTargetId": "frost-soulshield",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "frost-soulshield",
          "equipmentTargetId": "superior-soulshield",
          "materialRequirements": [
            {
              "materialId": "dragonicle-ore",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "grand-spider-fluid",
              "quantityNeeded": 4,
              "quantityOwned": 0
            },
            {
              "materialId": "pangu-s-bone",
              "quantityNeeded": 7,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "superior-soulshield",
          "equipmentTargetId": "superlative-soulshield",
          "materialRequirements": [
            {
              "materialId": "dragonicle-ore",
              "quantityNeeded": 5,
              "quantityOwned": 0
            },
            {
              "materialId": "oculus-tooth",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "reya-s-note",
              "quantityNeeded": 1,
              "quantityOwned": 0
            }
          ]
        }
      ]
    ]
  },
  {
    "id": "khrynia",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "demonblade",
          "equipmentTargetId": "flame-demonblade",
          "materialRequirements": [
            {
              "materialId": "ruby-crystal",
              "quantityNeeded": 4,
              "quantityOwned": 0
            },
            {
              "materialId": "necrotic-metal",
              "quantityNeeded": 3,
              "quantityOwned": 0
            },
            {
              "materialId": "amoeba-membrane",
              "quantityNeeded": 4,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "flame-demonblade",
          "equipmentTargetId": "superior-demonblade",
          "materialRequirements": [
            {
              "materialId": "dragonicle-ore",
              "quantityNeeded": 5,
              "quantityOwned": 0
            },
            {
              "materialId": "djin-s-coin",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "bristly-dragon-mane",
              "quantityNeeded": 4,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "superior-demonblade",
          "equipmentTargetId": "superlative-demonblade",
          "materialRequirements": [
            {
              "materialId": "damascus-ore",
              "quantityNeeded": 5,
              "quantityOwned": 0
            },
            {
              "materialId": "sharp-manticore-leg",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "reya-s-note",
              "quantityNeeded": 1,
              "quantityOwned": 0
            }
          ]
        }
      ]
    ]
  },
  {
    "id": "leshau",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "elite-s-mace",
          "equipmentTargetId": "champion-s-mace",
          "materialRequirements": [
            {
              "materialId": "reprocessed-metal",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "mystic-fiend-meat",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "thick-beast-hide",
              "quantityNeeded": 5,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "champion-s-mace",
          "equipmentTargetId": "morningstar",
          "materialRequirements": [
            {
              "materialId": "primordial-alloy",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "tanned-beastman-hide",
              "quantityNeeded": 3,
              "quantityOwned": 0
            },
            {
              "materialId": "bristly-vánargand-mane",
              "quantityNeeded": 3,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "morningstar",
          "equipmentTargetId": "caustic-morningstar",
          "materialRequirements": [
            {
              "materialId": "snowy-crystal",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "necrotic-metal",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "glasya-labolas-larynx",
              "quantityNeeded": 1,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "caustic-morningstar",
          "equipmentTargetId": "superior-morningstar",
          "materialRequirements": [
            {
              "materialId": "necrotic-metal",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "tough-killer-insect-husk",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "divine-brynhildr-wing",
              "quantityNeeded": 1,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "superior-morningstar",
          "equipmentTargetId": "superlative-morningstar",
          "materialRequirements": [
            {
              "materialId": "dragonicle-ore",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "jhana-hipbone",
              "quantityNeeded": 4,
              "quantityOwned": 0
            },
            {
              "materialId": "world-tree-timber",
              "quantityNeeded": 6,
              "quantityOwned": 0
            }
          ]
        }
      ]
    ]
  },
  {
    "id": "leucetius",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "vine-dominus",
          "equipmentTargetId": "orobas",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "orobas",
          "equipmentTargetId": "orobas-dominus",
          "materialRequirements": [
            {
              "materialId": "jewel-steel",
              "quantityNeeded": 3,
              "quantityOwned": 0
            },
            {
              "materialId": "sharp-spiritlord-tail",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "bristly-dragon-mane",
              "quantityNeeded": 4,
              "quantityOwned": 0
            }
          ]
        }
      ]
    ]
  },
  {
    "id": "loki",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "commander-s-striker",
          "equipmentTargetId": "scythe",
          "materialRequirements": [
            {
              "materialId": "silver-ore",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "raptor-carapace",
              "quantityNeeded": 3,
              "quantityOwned": 0
            },
            {
              "materialId": "anthrovore-moss",
              "quantityNeeded": 4,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "scythe",
          "equipmentTargetId": "superior-scythe",
          "materialRequirements": [
            {
              "materialId": "divine-dragonyte",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "demon-bone",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "demon-patagium",
              "quantityNeeded": 3,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "superior-scythe",
          "equipmentTargetId": "superlative-scythe",
          "materialRequirements": [
            {
              "materialId": "blacksteel-ore",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "large-weredragon-talon",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "giant-shellfly-scalp",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        }
      ]
    ]
  },
  {
    "id": "ludope",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "dvergr-artis",
          "equipmentTargetId": "dvergr-virtutis",
          "materialRequirements": [
            {
              "materialId": "jewel-steel",
              "quantityNeeded": 5,
              "quantityOwned": 0
            },
            {
              "materialId": "hydra-beak",
              "quantityNeeded": 10,
              "quantityOwned": 0
            },
            {
              "materialId": "reya-s-note",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        }
      ]
    ]
  },
  {
    "id": "maddox",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "elite-s-rod",
          "equipmentTargetId": "champion-s-rod",
          "materialRequirements": [
            {
              "materialId": "reprocessed-metal",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "grand-beetle-barb",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "beastman-rawhide",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "champion-s-rod",
          "equipmentTargetId": "tambo",
          "materialRequirements": [
            {
              "materialId": "necrotic-metal",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "large-weredragon-talon",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "thick-treant-branch",
              "quantityNeeded": 3,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "tambo",
          "equipmentTargetId": "fire-tambo",
          "materialRequirements": [
            {
              "materialId": "ruby-crystal",
              "quantityNeeded": 3,
              "quantityOwned": 0
            },
            {
              "materialId": "necrotic-metal",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "jhana-hipbone",
              "quantityNeeded": 4,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "fire-tambo",
          "equipmentTargetId": "excellent-tambo",
          "materialRequirements": [
            {
              "materialId": "dragonicle-ore",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "large-grand-beetle-barb",
              "quantityNeeded": 4,
              "quantityOwned": 0
            },
            {
              "materialId": "world-tree-timber",
              "quantityNeeded": 7,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "excellent-tambo",
          "equipmentTargetId": "optimal-tambo",
          "materialRequirements": [
            {
              "materialId": "damascus-ore",
              "quantityNeeded": 3,
              "quantityOwned": 0
            },
            {
              "materialId": "oculus-tooth",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "reya-s-note",
              "quantityNeeded": 1,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "optimal-tambo",
          "equipmentTargetId": "ama-gi",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "ama-gi",
          "equipmentTargetId": "ama-gi-artis",
          "materialRequirements": [
            {
              "materialId": "jewel-steel",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "oculus-tooth",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "reya-s-note",
              "quantityNeeded": 1,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "ama-gi-artis",
          "equipmentTargetId": "ama-gi-virtutis",
          "materialRequirements": [
            {
              "materialId": "jewel-steel",
              "quantityNeeded": 5,
              "quantityOwned": 0
            },
            {
              "materialId": "vile-lizard-mane",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "reya-s-note",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        }
      ]
    ]
  },
  {
    "id": "milton",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "meteor-artis",
          "equipmentTargetId": "meteor-virtutis",
          "materialRequirements": [
            {
              "materialId": "jewel-steel",
              "quantityNeeded": 5,
              "quantityOwned": 0
            },
            {
              "materialId": "fly-scale-hide",
              "quantityNeeded": 10,
              "quantityOwned": 0
            },
            {
              "materialId": "reya-s-note",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        }
      ]
    ]
  },
  {
    "id": "nora",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "elite-s-sledgehammer",
          "equipmentTargetId": "champion-s-sledgehammer",
          "materialRequirements": [
            {
              "materialId": "reprocessed-metal",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "mystic-fiend-meat",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "retral-colossus-shell",
              "quantityNeeded": 3,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "champion-s-sledgehammer",
          "equipmentTargetId": "blackjack",
          "materialRequirements": [
            {
              "materialId": "primordial-alloy",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "divine-metal",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "godwood-timber",
              "quantityNeeded": 1,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "blackjack",
          "equipmentTargetId": "flame-blackjack",
          "materialRequirements": [
            {
              "materialId": "ruby-crystal",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "necrotic-metal",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "harpylia-s-hide",
              "quantityNeeded": 1,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "flame-blackjack",
          "equipmentTargetId": "superior-blackjack",
          "materialRequirements": [
            {
              "materialId": "dragonicle-ore",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "large-albic-ear",
              "quantityNeeded": 4,
              "quantityOwned": 0
            },
            {
              "materialId": "pangu-s-bone",
              "quantityNeeded": 6,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "superior-blackjack",
          "equipmentTargetId": "superlative-blackjack",
          "materialRequirements": [
            {
              "materialId": "damascus-ore",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "tough-phantom-husk",
              "quantityNeeded": 4,
              "quantityOwned": 0
            },
            {
              "materialId": "djin-s-coin",
              "quantityNeeded": 4,
              "quantityOwned": 0
            }
          ]
        }
      ]
    ]
  },
  {
    "id": "pagus",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "warrior-s-rod",
          "equipmentTargetId": "commander-s-rod",
          "materialRequirements": [
            {
              "materialId": "steel-ore",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "talon",
              "quantityNeeded": 7,
              "quantityOwned": 0
            },
            {
              "materialId": "imp-fang",
              "quantityNeeded": 3,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "commander-s-rod",
          "equipmentTargetId": "elite-s-rod",
          "materialRequirements": [
            {
              "materialId": "royotian-steel",
              "quantityNeeded": 3,
              "quantityOwned": 0
            },
            {
              "materialId": "large-fang",
              "quantityNeeded": 5,
              "quantityOwned": 0
            },
            {
              "materialId": "mystic-fiend-husk",
              "quantityNeeded": 3,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "elite-s-rod",
          "equipmentTargetId": "champion-s-rod",
          "materialRequirements": [
            {
              "materialId": "reprocessed-metal",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "grand-beetle-barb",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "beastman-rawhide",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "champion-s-rod",
          "equipmentTargetId": "wand",
          "materialRequirements": [
            {
              "materialId": "primordial-alloy",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "divine-metal",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "poison-deathclaw-talon",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "wand",
          "equipmentTargetId": "flame-wand",
          "materialRequirements": [
            {
              "materialId": "ruby-crystal",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "necrotic-metal",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "tough-killer-insect-husk",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "flame-wand",
          "equipmentTargetId": "superior-wand",
          "materialRequirements": [
            {
              "materialId": "dragonicle-ore",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "jhana-hipbone",
              "quantityNeeded": 4,
              "quantityOwned": 0
            },
            {
              "materialId": "ancient-carapace",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "superior-wand",
          "equipmentTargetId": "superlative-wand",
          "materialRequirements": [
            {
              "materialId": "damascus-ore",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "large-grand-beetle-barb",
              "quantityNeeded": 4,
              "quantityOwned": 0
            },
            {
              "materialId": "djin-s-coin",
              "quantityNeeded": 4,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "superlative-wand",
          "equipmentTargetId": "ama-gi",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "ama-gi",
          "equipmentTargetId": "ama-gi-artis",
          "materialRequirements": [
            {
              "materialId": "jewel-steel",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "oculus-tooth",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "reya-s-note",
              "quantityNeeded": 1,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "ama-gi-artis",
          "equipmentTargetId": "ama-gi-virtutis",
          "materialRequirements": [
            {
              "materialId": "jewel-steel",
              "quantityNeeded": 5,
              "quantityOwned": 0
            },
            {
              "materialId": "vile-lizard-mane",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "reya-s-note",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        }
      ]
    ]
  },
  {
    "id": "paris",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "phoenix-perch",
          "equipmentTargetId": "warlord-s-greatstaff",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "warlord-s-greatstaff",
          "equipmentTargetId": "divine-greatstaff",
          "materialRequirements": [
            {
              "materialId": "mystic-skelenyte",
              "quantityNeeded": 4,
              "quantityOwned": 0
            },
            {
              "materialId": "blacksteel-ore",
              "quantityNeeded": 4,
              "quantityOwned": 0
            },
            {
              "materialId": "azhdaha-patagium",
              "quantityNeeded": 6,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "divine-greatstaff",
          "equipmentTargetId": "damascene-greatstaff",
          "materialRequirements": [
            {
              "materialId": "damascus-ore",
              "quantityNeeded": 8,
              "quantityOwned": 0
            },
            {
              "materialId": "oarfish-fin",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "spiky-chimera-tail",
              "quantityNeeded": 8,
              "quantityOwned": 0
            }
          ]
        }
      ]
    ]
  },
  {
    "id": "rhagoh",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "warrior-s-club",
          "equipmentTargetId": "commander-s-club",
          "materialRequirements": [
            {
              "materialId": "royotian-steel",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "meteorite",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "shed-husk",
              "quantityNeeded": 6,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "commander-s-club",
          "equipmentTargetId": "elite-s-club",
          "materialRequirements": [
            {
              "materialId": "platinum-ore",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "large-grand-beetle-talon",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "fenris-rawhide",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "elite-s-club",
          "equipmentTargetId": "superlative-scythe",
          "materialRequirements": [
            {
              "materialId": "blacksteel-ore",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "large-weredragon-talon",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "giant-shellfly-scalp",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        }
      ]
    ]
  },
  {
    "id": "roberto",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "commander-s-claymore",
          "equipmentTargetId": "elite-s-claymore",
          "materialRequirements": [
            {
              "materialId": "platinum-ore",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "polished-scale",
              "quantityNeeded": 5,
              "quantityOwned": 0
            },
            {
              "materialId": "mystic-fiend-horn",
              "quantityNeeded": 5,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "elite-s-claymore",
          "equipmentTargetId": "highbrand",
          "materialRequirements": [
            {
              "materialId": "necrotic-metal",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "tough-brynhildr-husk",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "hydra-fin",
              "quantityNeeded": 3,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "highbrand",
          "equipmentTargetId": "poison-highbrand",
          "materialRequirements": [
            {
              "materialId": "emerald-crystal",
              "quantityNeeded": 3,
              "quantityOwned": 0
            },
            {
              "materialId": "necrotic-metal",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "large-albic-ear",
              "quantityNeeded": 4,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "poison-highbrand",
          "equipmentTargetId": "superior-highbrand",
          "materialRequirements": [
            {
              "materialId": "dragonicle-ore",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "amoeba-membrane",
              "quantityNeeded": 4,
              "quantityOwned": 0
            },
            {
              "materialId": "pangu-s-bone",
              "quantityNeeded": 7,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "superior-highbrand",
          "equipmentTargetId": "superlative-highbrand",
          "materialRequirements": [
            {
              "materialId": "damascus-ore",
              "quantityNeeded": 3,
              "quantityOwned": 0
            },
            {
              "materialId": "demon-mane",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "reya-s-note",
              "quantityNeeded": 1,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "superlative-highbrand",
          "equipmentTargetId": "frostblade",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "frostblade",
          "equipmentTargetId": "frostblade-artis",
          "materialRequirements": [
            {
              "materialId": "jewel-steel",
              "quantityNeeded": 5,
              "quantityOwned": 0
            },
            {
              "materialId": "sharp-vulture-beak",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "reya-s-note",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "frostblade-artis",
          "equipmentTargetId": "frostblade-virtutis",
          "materialRequirements": [
            {
              "materialId": "jewel-steel",
              "quantityNeeded": 8,
              "quantityOwned": 0
            },
            {
              "materialId": "butterfly-liver",
              "quantityNeeded": 10,
              "quantityOwned": 0
            },
            {
              "materialId": "reya-s-note",
              "quantityNeeded": 3,
              "quantityOwned": 0
            }
          ]
        }
      ]
    ]
  },
  {
    "id": "sheryl",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "superior-quarterstaff",
          "equipmentTargetId": "superlative-quarterstaff",
          "materialRequirements": [
            {
              "materialId": "blacksteel-ore",
              "quantityNeeded": 4,
              "quantityOwned": 0
            },
            {
              "materialId": "large-albic-ear",
              "quantityNeeded": 3,
              "quantityOwned": 0
            },
            {
              "materialId": "evil-fenris-eye",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        }
      ]
    ]
  },
  {
    "id": "sibal",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "divine-striker",
          "equipmentTargetId": "damascene-striker",
          "materialRequirements": [
            {
              "materialId": "damascus-ore",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "leap-frog-fin",
              "quantityNeeded": 4,
              "quantityOwned": 0
            },
            {
              "materialId": "thin-oarfish-wing",
              "quantityNeeded": 8,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "damascene-striker",
          "equipmentTargetId": "daedalus-weapon",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "daedalus-weapon",
          "equipmentTargetId": "daedalus-artis",
          "materialRequirements": [
            {
              "materialId": "jewel-steel",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "demon-mane",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "reya-s-note",
              "quantityNeeded": 1,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "daedalus-artis",
          "equipmentTargetId": "daedalus-virtutis",
          "materialRequirements": [
            {
              "materialId": "jewel-steel",
              "quantityNeeded": 5,
              "quantityOwned": 0
            },
            {
              "materialId": "spiky-chimera-tail",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "reya-s-note",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        }
      ]
    ]
  },
  {
    "id": "snievan",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "rhongomynad-artis",
          "equipmentTargetId": "rhongomynad-virtutis",
          "materialRequirements": [
            {
              "materialId": "jewel-steel",
              "quantityNeeded": 5,
              "quantityOwned": 0
            },
            {
              "materialId": "sharp-vulture-beak",
              "quantityNeeded": 10,
              "quantityOwned": 0
            },
            {
              "materialId": "reya-s-note",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        }
      ]
    ]
  },
  {
    "id": "irina-sykes",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "warlord-s-scepter",
          "equipmentTargetId": "divine-scepter",
          "materialRequirements": [
            {
              "materialId": "mystic-skelenyte",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "blacksteel-ore",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "evil-fenris-eye",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "divine-scepter",
          "equipmentTargetId": "damascene-scepter",
          "materialRequirements": [
            {
              "materialId": "damascus-ore",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "demon-mane",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "sharp-landworm-fang",
              "quantityNeeded": 6,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "damascene-scepter",
          "equipmentTargetId": "nightbloom",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "nightbloom",
          "equipmentTargetId": "nightbloom-artis",
          "materialRequirements": [
            {
              "materialId": "jewel-steel",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "demon-mane",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "reya-s-note",
              "quantityNeeded": 1,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "nightbloom-artis",
          "equipmentTargetId": "nightbloom-virtutis",
          "materialRequirements": [
            {
              "materialId": "jewel-steel",
              "quantityNeeded": 5,
              "quantityOwned": 0
            },
            {
              "materialId": "vile-lizard-mane",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "reya-s-note",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        }
      ]
    ]
  },
  {
    "id": "torgal",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "leraje-princeps",
          "equipmentTargetId": "leraje-princeps",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "leraje-princeps",
          "equipmentTargetId": "leraje-rex",
          "materialRequirements": [
            {
              "materialId": "silver-ore",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "superior-cotton",
              "quantityNeeded": 3,
              "quantityOwned": 0
            },
            {
              "materialId": "shed-husk",
              "quantityNeeded": 6,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "leraje-rex",
          "equipmentTargetId": "leraje-rex",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "leraje-rex",
          "equipmentTargetId": "naberius",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "naberius",
          "equipmentTargetId": "naberius",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "naberius",
          "equipmentTargetId": "naberius-dominus",
          "materialRequirements": [
            {
              "materialId": "voltaic-crystal",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "large-spiritlord-beak",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "avian-fiend-meat",
              "quantityNeeded": 3,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "naberius-dominus",
          "equipmentTargetId": "naberius-dominus",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "naberius-dominus",
          "equipmentTargetId": "gremory",
          "materialRequirements": [
            {
              "materialId": "necrotic-metal",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "giant-shellfly-scalp",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "thin-phantom-wing",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "gremory",
          "equipmentTargetId": "gremory",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "gremory",
          "equipmentTargetId": "gremory-dominus",
          "materialRequirements": [
            {
              "materialId": "jewel-steel",
              "quantityNeeded": 5,
              "quantityOwned": 0
            },
            {
              "materialId": "vile-lizard-mane",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "spiky-chimera-tail",
              "quantityNeeded": 6,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "gremory-dominus",
          "equipmentTargetId": "gremory-dominus",
          "materialRequirements": []
        }
      ]
    ]
  },
  {
    "id": "violet",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "commander-s-cudgel",
          "equipmentTargetId": "vare",
          "materialRequirements": [
            {
              "materialId": "silver-ore",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "purple-divain-rawhide",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "oarfish-tentacle",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "vare",
          "equipmentTargetId": "superior-vare",
          "materialRequirements": [
            {
              "materialId": "divine-dragonyte",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "vulture-underbelly-fur",
              "quantityNeeded": 3,
              "quantityOwned": 0
            },
            {
              "materialId": "concealed-spiritlord-horn",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "superior-vare",
          "equipmentTargetId": "superlative-vare",
          "materialRequirements": [
            {
              "materialId": "blacksteel-ore",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "harpylia-s-hide",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "large-weredragon-talon",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        }
      ]
    ]
  },
  {
    "id": "wyngale",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "gaap",
          "equipmentTargetId": "gaap-dominus",
          "materialRequirements": [
            {
              "materialId": "jewel-steel",
              "quantityNeeded": 3,
              "quantityOwned": 0
            },
            {
              "materialId": "oculus-tooth",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "bristly-dragon-mane",
              "quantityNeeded": 4,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "gaap-dominus",
          "equipmentTargetId": "gaap-dominus",
          "materialRequirements": []
        }
      ]
    ]
  },
  {
    "id": "young",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "frostsword-artis",
          "equipmentTargetId": "frostsword-virtutis",
          "materialRequirements": [
            {
              "materialId": "jewel-steel",
              "quantityNeeded": 5,
              "quantityOwned": 0
            },
            {
              "materialId": "world-tree-timber",
              "quantityNeeded": 18,
              "quantityOwned": 0
            },
            {
              "materialId": "reya-s-note",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        }
      ]
    ]
  },
  {
    "id": "yuniver",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "champion-s-harpoon",
          "equipmentTargetId": "naginata",
          "materialRequirements": [
            {
              "materialId": "necrotic-metal",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "inverted-terrapest-barb",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "glasya-labolas-larynx",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "naginata",
          "equipmentTargetId": "fire-naginata",
          "materialRequirements": [
            {
              "materialId": "ruby-crystal",
              "quantityNeeded": 4,
              "quantityOwned": 0
            },
            {
              "materialId": "necrotic-metal",
              "quantityNeeded": 3,
              "quantityOwned": 0
            },
            {
              "materialId": "sharp-landworm-fang",
              "quantityNeeded": 4,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "fire-naginata",
          "equipmentTargetId": "excellent-naginata",
          "materialRequirements": [
            {
              "materialId": "dragonicle-ore",
              "quantityNeeded": 5,
              "quantityOwned": 0
            },
            {
              "materialId": "djin-s-coin",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "bristly-dragon-mane",
              "quantityNeeded": 4,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "excellent-naginata",
          "equipmentTargetId": "optimal-naginata",
          "materialRequirements": [
            {
              "materialId": "damascus-ore",
              "quantityNeeded": 5,
              "quantityOwned": 0
            },
            {
              "materialId": "sharp-manticore-leg",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "reya-s-note",
              "quantityNeeded": 1,
              "quantityOwned": 0
            }
          ]
        }
      ]
    ]
  },
  {
    "id": "zolean",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "ninja-uchigatana",
          "equipmentTargetId": "shogun-uchigatana",
          "materialRequirements": [
            {
              "materialId": "mystic-skelenyte",
              "quantityNeeded": 1,
              "quantityOwned": 0
            },
            {
              "materialId": "crab-fluid",
              "quantityNeeded": 3,
              "quantityOwned": 0
            },
            {
              "materialId": "glagonos-fragment",
              "quantityNeeded": 1,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "shogun-uchigatana",
          "equipmentTargetId": "sacred-uchigatana",
          "materialRequirements": [
            {
              "materialId": "mystic-skelenyte",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "blacksteel-ore",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "anthrovore-trunk",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "sacred-uchigatana",
          "equipmentTargetId": "mithril-uchigatana",
          "materialRequirements": [
            {
              "materialId": "damascus-ore",
              "quantityNeeded": 2,
              "quantityOwned": 0
            },
            {
              "materialId": "aerodynamic-wyvern-wing",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "tough-phantom-husk",
              "quantityNeeded": 6,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "mithril-uchigatana",
          "equipmentTargetId": "imperator-s-katana",
          "materialRequirements": []
        }
      ]
    ]
  },
  {
    "id": "zuido",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "somberblade-artis",
          "equipmentTargetId": "somberblade-virtutis",
          "materialRequirements": [
            {
              "materialId": "jewel-steel",
              "quantityNeeded": 5,
              "quantityOwned": 0
            },
            {
              "materialId": "oarfish-fin",
              "quantityNeeded": 6,
              "quantityOwned": 0
            },
            {
              "materialId": "reya-s-note",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        }
      ]
    ]
  }
];

export default characters;