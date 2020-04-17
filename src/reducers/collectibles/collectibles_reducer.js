import { combineReducers } from 'redux';
import bugs from './bugs_reducer';
import fish from './fish_reducer';
import music from './music_reducer';
import fossils from './fossils_reducer';
import fossilComponents from './fossil_components_reducer';

const collectibles = combineReducers({
  bugs,
  fish,
  music,
  fossils,
  fossilComponents
});

export default collectibles;
