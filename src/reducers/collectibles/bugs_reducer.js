import initialState from '../../state/bugs';
import { TOGGLE_FOUND_BUG } from '../../actions/bug_actions';

export default (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_FOUND_BUG:
      const toggledBug = state[action.id];
      toggledBug.found = !toggledBug.found;

      return Object.assign({}, state, { [toggledBug.id]: toggledBug });
    default:
      return state;
  }
};
