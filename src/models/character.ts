import { combineMaterialRequirementLists } from './material-requirement';
import { Character, Upgrade } from '../types/types';
import { findActiveUpgrade } from './upgrade';

export const getActiveUpgrades = function(character: Character) {
    return character.upgradeGroups
        .map(findActiveUpgrade)
        .filter((x): x is Upgrade => !!x)
        .map((upgrade: Upgrade) => upgrade.materialRequirements)
        .reduce(combineMaterialRequirementLists);
};