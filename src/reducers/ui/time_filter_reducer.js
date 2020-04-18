import { UPDATE_TIME } from '../../actions/filter_actions';


export default (state = null, action) => {
  switch (action.type) {
    case UPDATE_TIME:
      if (action.time === '') action.time = null;
      return action.time;
    default:
      return state;
  }
};
