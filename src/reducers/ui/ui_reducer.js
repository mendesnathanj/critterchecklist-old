import { combineReducers } from 'redux';
import filter from './filter_reducer';
import hemisphere from './hemisphere_reducer';
import time from './time_filter_reducer';
import allDay from './all_day_reducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';


const uiPersistConfig = {
  key: 'ui',
  storage,
  whitelist: ['hemisphere']
};

const uiReducer = combineReducers({
  hemisphere,
  time,
  filter,
  allDay
});

export default persistReducer(uiPersistConfig, uiReducer);
