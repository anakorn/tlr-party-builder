import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { charactersReducer } from './reducers';

const rootReducer = combineReducers({
    characters: charactersReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const middleWareEnhancer = applyMiddleware();

    const store = createStore(
        rootReducer,
        composeWithDevTools(middleWareEnhancer)
    );

    store.subscribe(() => {
        window.localStorage.setItem(
            'characters',
            JSON.stringify(store.getState().characters.characters)
        );
    });

    return store;
}
