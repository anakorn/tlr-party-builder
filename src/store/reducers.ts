import { CharactersState, CharactersActionTypes, LOAD, UPGRADE_COMPLETE, RESET } from './types';
import initialCharacters from '../data/characters';
import { completeActiveUpgrade } from '../models/character';
import { Character } from '../types/types';

const loadedCharacters: Array<Character> = JSON.parse(window.localStorage.getItem('characters') || 'false');

const initialState: CharactersState = {
    characters: loadedCharacters || initialCharacters
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
        case RESET: {
            return {
                ...state,
                characters: initialCharacters
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
