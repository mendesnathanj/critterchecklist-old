import { combineReducers } from 'redux';
import collectibles from './collectibles/collectibles_reducer';
import ui from './ui/ui_reducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer, createMigrate } from 'redux-persist';

const migrations = {
  0: state => {
    delete state.collectibles.fossils[17]
    delete state.collectibles.fossilComponents[19]
    delete state.collectibles.fossilComponents[20]

    return { ...state }
  }
}

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['ui'],
  version: 0,
  migrate: createMigrate(migrations, { debug: false })
};

const rootReducer = combineReducers({
  ui,
  collectibles
});


export default persistReducer(persistConfig, rootReducer);
