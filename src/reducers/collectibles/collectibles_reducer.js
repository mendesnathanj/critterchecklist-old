import { combineReducers } from 'redux';
import bugs from './bugs_reducer';
import fish from './fish_reducer';

const collectibles = combineReducers({
  bugs,
  fish
});

export default collectibles;
