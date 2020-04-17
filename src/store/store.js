import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers/root_reducer';
import initialState from '../state/state';
import logger from 'redux-logger';


// const persistConfig = {
//   key: 'collectibles',
//   storage
// };



// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(rootReducer, initialState, applyMiddleware(logger));
if (window) {
  window.getState = store.getState;
}
export const persistor = persistStore(store);
