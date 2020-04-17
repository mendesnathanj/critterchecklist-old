import { combineReducers } from 'redux';
import bugs from './bugs_reducer';
import fish from './fish_reducer';
import music from './music_reducer';

const collectibles = combineReducers({
  bugs,
  fish,
  music
});

export default collectibles;
