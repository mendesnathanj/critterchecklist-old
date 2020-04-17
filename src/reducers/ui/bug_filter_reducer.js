import initialState from '../../state/bug_filter';
import { TOGGLE_ACTIVE, TOGGLE_LEAVES_THIS_MONTH, TOGGLE_NOT_FOUND_YET } from '../../actions/bug_filter_actions';

export default (state = initialState, action) => {

  switch (action.type) {
    case TOGGLE_ACTIVE:
      return Object.assign({}, state, { activeMonth: !state.activeMonth });

    case TOGGLE_LEAVES_THIS_MONTH:
      return Object.assign({}, state, { leavesThisMonth: !state.leavesThisMonth });

    case TOGGLE_NOT_FOUND_YET:
      return Object.assign({}, state, { notFoundYet: !state.notFoundYet });

    default:
      return state;
  }
};
