import * as TLR from '../types/types';

const characters: Array<TLR.Character> = [
  {
    "id": "allan",
    "focus": 0,
    "upgradeGroups": [
      [
        {
          "equipmentBaseId": "furfur-dominus",
          "equipmentTargetId": "paimon",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "paimon",
          "equipmentTargetId": "oriax-dominus",
          "materialRequirements": []
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
          "equipmentTargetId": "ghorian",
          "materialRequirements": []
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
          "equipmentTargetId": "stolas-dominus",
          "materialRequirements": []
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
          "equipmentTargetId": "ice-tataraichi",
          "materialRequirements": [
            {
              "materialId": "sapphire-crystal",
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
          "equipmentTargetId": "draconile-halberd",
          "materialRequirements": []
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
          "equipmentTargetId": "poison-glaive",
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
        }
      ]
    ]
  },
  {
    "id": "jorgen-adventurer",
    "focus": 0,
    "upgradeGroups": []
  },
  {
    "id": "jorgen-aristocrat",
    "focus": 0,
    "upgradeGroups": []
  },
  {
    "id": "jorgen-djin",
    "focus": 0,
    "upgradeGroups": []
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
          "equipmentTargetId": "flame-hawkwind",
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
              "materialId": "large-weredragon-talon",
              "quantityNeeded": 2,
              "quantityOwned": 0
            }
          ]
        },
        {
          "equipmentBaseId": "flame-hawkwind",
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
    "upgradeGroups": []
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
          "equipmentTargetId": "paimon",
          "materialRequirements": []
        },
        {
          "equipmentBaseId": "paimon",
          "equipmentTargetId": "orobas-dominus",
          "materialRequirements": []
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
        }
      ]
    ]
  },
  {
    "id": "paris",
    "focus": 0,
    "upgradeGroups": []
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
        }
      ]
    ]
  },
  {
    "id": "torgal",
    "focus": 0,
    "upgradeGroups": []
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
          "equipmentTargetId": "bolt-naginata",
          "materialRequirements": [
            {
              "materialId": "voltaic-crystal",
              "quantityNeeded": 3,
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
        }
      ]
    ]
  },
  {
    "id": "zolean",
    "focus": 0,
    "upgradeGroups": []
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