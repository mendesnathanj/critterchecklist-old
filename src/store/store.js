import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import rootReducer from '../reducers/root_reducer';
import initialState from '../state/state';
import logger from 'redux-logger';


export const store = createStore(rootReducer, initialState, applyMiddleware(logger));
if (window) {
  window.getState = store.getState;
}
export const persistor = persistStore(store);
