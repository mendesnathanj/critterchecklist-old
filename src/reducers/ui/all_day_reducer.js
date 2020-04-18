import { TOGGLE_ALL_DAY } from '../../actions/filter_actions';


export default (state = false, action) => {
  switch (action.type) {
    case TOGGLE_ALL_DAY:
      return !state;
    default:
      return state;
  }
};
