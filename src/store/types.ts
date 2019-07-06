import * as TLR from '../types/types';

// State
export interface CharactersState {
    characters: Array<TLR.Character>;
}

// Actions
export const LOAD = 'LOAD';
export const UPGRADE_COMPLETE = 'UPGRADE_COMPLETE';

interface LoadAction {
    type: typeof LOAD;
    payload: Array<TLR.Character>;
}

interface UpgradeCompleteAction {
    type: typeof UPGRADE_COMPLETE;
    payload: {
        characterId: string,
        upgradeGroupIndex: number
    }
}

export type CharactersActionTypes =
    LoadAction |
    UpgradeCompleteAction;
