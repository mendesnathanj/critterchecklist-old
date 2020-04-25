import initialState from '../../state/fish_filter';
import { TOGGLE_ACTIVE_FISH, TOGGLE_LEAVES_THIS_MONTH_FISH, TOGGLE_NOT_FOUND_YET_FISH, TOGGLE_LOCATION } from '../../actions/fish_filter_actions';
import { UPDATE_SEARCH } from '../../actions/filter_actions';

export default (state = initialState, action) => {

  switch (action.type) {
    case TOGGLE_ACTIVE_FISH:
      return Object.assign({}, state, { activeMonth: !state.activeMonth });

    case TOGGLE_LEAVES_THIS_MONTH_FISH:
      return Object.assign({}, state, { leavesThisMonth: !state.leavesThisMonth });

    case TOGGLE_NOT_FOUND_YET_FISH:
      return Object.assign({}, state, { notFoundYet: !state.notFoundYet });

    case UPDATE_SEARCH:
      return Object.assign({}, state, { search: action.text });
    case TOGGLE_LOCATION:
      return Object.assign({}, state, { filterByLocation: action.location });

    default:
      return state;
  }
};
