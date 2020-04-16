import collectibles from './collectibles/collectibles_reducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  collectibles
});


export default rootReducer;
