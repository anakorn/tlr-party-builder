import { Upgrade } from '../types/types';
import { complement } from 'ramda';

const isUpgradeComplete = function(upgrade: Upgrade) {
    return upgrade.materialRequirements.every(
        ({ quantityNeeded, quantityOwned }) => quantityOwned >= quantityNeeded
    );
};

const isUpgradeIncomplete = complement(isUpgradeComplete);

export const findActiveUpgrade = function(upgrades: Array<Upgrade>) {
    return upgrades.find(isUpgradeIncomplete);
};