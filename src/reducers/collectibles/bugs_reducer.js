import initialState from '../../state/bugs';
import { TOGGLE_FOUND } from '../../actions/bug_actions';

const bugs = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_FOUND:
      const toggledBug = state[action.id];
      toggledBug.found = !toggledBug.found;

      return Object.assign({}, state, { [toggledBug.id]: toggledBug });
    default:
      return state;
  }
};


export default bugs;
