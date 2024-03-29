import { combineReducers } from 'redux';
import bugs from './bug_filter_reducer';
import fish from './fish_filter_reducer';
import music from './music_filter_reducer';
import fossils from './fossil_filter_reducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const bugsPersistConfig = {
  key: 'ui_bugs',
  storage,
  whitelist: []
}

const fishPersistConfig = {
  key: 'ui_fish',
  storage,
  whitelist: []
};

const musicPersistConfig = {
  key: 'ui_music',
  storage,
  whitelist: []
};

const fossilPersistConfig = {
  key: 'ui_fossils',
  storage,
  whitelist: []
};

export default combineReducers({
  bugs: persistReducer(bugsPersistConfig, bugs),
  fish: persistReducer(fishPersistConfig, fish),
  music: persistReducer(musicPersistConfig, music),
  fossils: persistReducer(fossilPersistConfig, fossils)
});
