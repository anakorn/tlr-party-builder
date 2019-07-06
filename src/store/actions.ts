import { CharactersActionTypes, LOAD, UPGRADE_COMPLETE, RESET } from './types';
import * as TLR from '../types/types';

export function load(characters: Array<TLR.Character>): CharactersActionTypes {
    return {
        type: LOAD,
        payload: characters
    };
}

export function reset(): CharactersActionTypes {
    return {
        type: RESET
    };
}

export function completeUpgrade(
    characterId: string,
    upgradeGroupIndex: number
): CharactersActionTypes {
    return {
        type: UPGRADE_COMPLETE,
        payload: {
            characterId,
            upgradeGroupIndex
        }
    };
}