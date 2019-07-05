import * as TLR from '../types/types.d';

const characters: Array<TLR.Character> = [
  {
    id: 'baulson',
    focus: TLR.FOCUS.BALANCE,
    upgradeGroups: [
      [
        {
          equipmentBaseId: 'warriors-trident',
          equipmentTargetId: 'commanders-trident',
          materialRequirements: [
            {
              materialId: 'vackel-iron',
              quantityNeeded: 2,
              quantityOwned: 2,
            },
            {
              materialId: 'thick-mystic-fiend-fur',
              quantityNeeded: 6,
              quantityOwned: 8,
            },
            {
              materialId: 'amoeba-rawhide',
              quantityNeeded: 7,
              quantityOwned: 7,
            },
          ],
          battlerank: 12,
        },
        {
          equipmentBaseId: 'commanders-trident',
          equipmentTargetId: 'elites-trident',
          materialRequirements: [
            {
              materialId: 'vackel-iron',
              quantityNeeded: 1,
              quantityOwned: 0,
            },
            {
              materialId: 'meteorite',
              quantityNeeded: 1,
              quantityOwned: 1,
            },
            {
              materialId: 'mystic-fiend-horn',
              quantityNeeded: 3,
              quantityOwned: 2,
            },
          ],
          battlerank: 12,
        },
      ],
    ],
  },
  {
    id: 'emma-honeywell',
    focus: TLR.FOCUS.BALANCE,
    upgradeGroups: [
      [
        {
          equipmentBaseId: 'emmas-longsword-upgrade',
          equipmentTargetId: 'emmas-longsword-final',
          materialRequirements: [
            {
              materialId: 'steel-ore',
              quantityNeeded: 3,
              quantityOwned: 3,
            },
            {
              materialId: 'albic-hide',
              quantityNeeded: 6,
              quantityOwned: 5,
            },
            {
              materialId: 'colossus-rawhide',
              quantityNeeded: 6,
              quantityOwned: 6,
            },
          ],
        },
      ],
      [
        {
          equipmentBaseId: 'emmas-tuck-upgrade',
          equipmentTargetId: 'emmas-tuck-final',
          materialRequirements: [
            {
              materialId: 'vackel-iron',
              quantityNeeded: 2,
              quantityOwned: 1,
            },
            {
              materialId: 'beastman-rawhide',
              quantityNeeded: 4,
              quantityOwned: 4,
            },
            {
              materialId: 'leap-frog-rawhide',
              quantityNeeded: 3,
              quantityOwned: 6,
            },
          ],
        },
      ]
    ],
  }
];

export default characters;