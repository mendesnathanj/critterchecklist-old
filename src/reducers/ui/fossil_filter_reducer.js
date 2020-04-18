import initialState from '../../state/fossil_filter';
import { TOGGLE_NOT_FOUND_YET_FOSSIL } from '../../actions/fossil_filter_actions';
import { UPDATE_SEARCH } from '../../actions/filter_actions';

export default (state = initialState, action) => {

  switch (action.type) {
    case TOGGLE_NOT_FOUND_YET_FOSSIL:
      return Object.assign({}, state, { notFoundYet: !state.notFoundYet });

    case UPDATE_SEARCH:
      return Object.assign({}, state, { search: action.text });

    default:
      return state;
  }
};
