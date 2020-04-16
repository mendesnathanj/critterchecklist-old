import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers/root_reducer';
import initialState from '../state/state';
import logger from 'redux-logger';

console.log(initialState)
const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, initialState, applyMiddleware(logger));
export const persistor = persistStore(store);
