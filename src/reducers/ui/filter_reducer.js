import { combineReducers } from 'redux';
import bugs from './bug_filter_reducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const bugsPersistConfig = {
  key: 'bugs',
  storage,
  whitelist: []
}

export default combineReducers({
  bugs: persistReducer(bugsPersistConfig, bugs)
})
