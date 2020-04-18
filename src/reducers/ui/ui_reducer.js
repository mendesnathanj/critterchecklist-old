import { combineReducers } from 'redux';
import filter from './filter_reducer';
import hemisphere from './hemisphere_reducer';
import time from './time_filter_reducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';


const uiPersistConfig = {
  key: 'ui',
  storage,
  blacklist: ['filter', 'time']
};

const uiReducer = combineReducers({
  hemisphere,
  time,
  filter
});

export default persistReducer(uiPersistConfig, uiReducer);
