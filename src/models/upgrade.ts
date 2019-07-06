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

const completeUpgrade = function(upgrade: Upgrade) {
    return {
        ...upgrade,
        materialRequirements: upgrade.materialRequirements.map(
            materialRequirement => ({
                ...materialRequirement,
                quantityOwned: materialRequirement.quantityNeeded
            })
        )
    };
};

export const completeUpgradeFromUpgradesList = function (upgrades: Array<Upgrade>) {
    const indexOfIncompleteUpgrade = upgrades.findIndex(isUpgradeIncomplete);
    return indexOfIncompleteUpgrade !== -1
        ? [
            ...upgrades.slice(0, indexOfIncompleteUpgrade),
            completeUpgrade(upgrades[indexOfIncompleteUpgrade]),
            ...upgrades.slice(indexOfIncompleteUpgrade + 1, upgrades.length)
        ]
        : upgrades;
};