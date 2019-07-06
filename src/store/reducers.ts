import { CharactersState, CharactersActionTypes, LOAD, UPGRADE_COMPLETE } from './types';
import initialCharacters from '../data/characters';
import { completeActiveUpgrade } from '../models/character';

const initialState: CharactersState = {
    characters: initialCharacters
};

export function charactersReducer(
    state = initialState,
    action: CharactersActionTypes
): CharactersState {
    switch (action.type) {
        case LOAD: {
            return {
                ...state,
                characters: action.payload
            };
        }
        case UPGRADE_COMPLETE: {
            return {
                ...state,
                characters: [
                    ...(state.characters.map(
                        character => character.id === action.payload.characterId
                            ? completeActiveUpgrade(action.payload.upgradeGroupIndex, character)
                            : character
                    ))
                ]
            }
        }
        default:
            return state;
    }
}
