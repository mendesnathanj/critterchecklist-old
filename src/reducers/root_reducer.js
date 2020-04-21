import { combineReducers } from 'redux';
import collectibles from './collectibles/collectibles_reducer';
import ui from './ui/ui_reducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['ui']
};

const rootReducer = combineReducers({
  ui,
  collectibles
});


export default persistReducer(persistConfig, rootReducer);
