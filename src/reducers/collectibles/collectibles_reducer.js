import { combineReducers } from 'redux';
import bugs from './bugs_reducer';

const collectibles = combineReducers({
  bugs
});

export default collectibles;
