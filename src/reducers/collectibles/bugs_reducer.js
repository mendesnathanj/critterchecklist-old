import initialState from '../../state/bugs';
import { RECEIVE_BUG } from '../../actions/bug_actions';

const bugs = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_BUG:
      return Object.assign({}, initialState, { [action.bug.id]: action.bug });
    default:
      return state;
  }
};


export default bugs;
