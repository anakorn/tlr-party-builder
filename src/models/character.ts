import { combineMaterialRequirementLists } from './material-requirement';
import { Character, Upgrade } from '../types/types';
import { findActiveUpgrade, completeUpgradeFromUpgradesList } from './upgrade';

export const getActiveUpgrades = function(character: Character) {
    return character.upgradeGroups
        .map(findActiveUpgrade)
        .filter((x): x is Upgrade => !!x)
        .map((upgrade: Upgrade) => upgrade.materialRequirements)
        .reduce(combineMaterialRequirementLists, []);
}

export const completeActiveUpgrade = function(
    upgradeGroupIndex: number,
    character: Character
): Character {
    return ({
        ...character,
        upgradeGroups: [
            ...character.upgradeGroups.slice(0, upgradeGroupIndex),
            completeUpgradeFromUpgradesList(character.upgradeGroups[upgradeGroupIndex]),
            ...character.upgradeGroups.slice(upgradeGroupIndex + 1, character.upgradeGroups.length)
        ]
    })
}