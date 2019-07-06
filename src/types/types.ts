export interface Character {
    // e.g. 'baulson'
    id: string;
    focus: FOCUS;
    upgradeGroups: Array<Array<Upgrade>>;
}

export enum FOCUS {
    BALANCE,
    COMBAT,
    MYSTIC,
}

export interface Upgrade {
    equipmentBaseId: string;
    equipmentTargetId: string;
    materialRequirements: Array<MaterialRequirement>;
    battlerank?: number;
}

export interface Equipment {
    id: string;
}

export interface MaterialRequirement {
    materialId: string;
    quantityNeeded: number;
    quantityOwned: number;
}

export interface Material {
    id: string;
}