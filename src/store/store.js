import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import rootReducer from '../reducers/root_reducer';
import initialState from '../state/state';


export const store = createStore(rootReducer, initialState);
export const persistor = persistStore(store);
