import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import initialState from '../state/state';

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({ 'root': reducer });

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
