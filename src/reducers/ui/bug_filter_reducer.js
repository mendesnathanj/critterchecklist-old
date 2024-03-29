import initialState from '../../state/bug_filter';
import { TOGGLE_ACTIVE_BUG, TOGGLE_LEAVES_THIS_MONTH_BUG, TOGGLE_NOT_FOUND_YET_BUG } from '../../actions/bug_filter_actions';
import { UPDATE_SEARCH } from '../../actions/filter_actions';

export default (state = initialState, action) => {

  switch (action.type) {
    case TOGGLE_ACTIVE_BUG:
      return Object.assign({}, state, { activeMonth: !state.activeMonth });

    case TOGGLE_LEAVES_THIS_MONTH_BUG:
      return Object.assign({}, state, { leavesThisMonth: !state.leavesThisMonth });

    case TOGGLE_NOT_FOUND_YET_BUG:
      return Object.assign({}, state, { notFoundYet: !state.notFoundYet });

    case UPDATE_SEARCH:
      return Object.assign({}, state, { search: action.text });

    default:
      return state;
  }
};
