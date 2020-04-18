import initialState from '../../state/music_filter';
import { TOGGLE_LIVE_ONLY_MUSIC, TOGGLE_NOT_FOUND_YET_MUSIC } from '../../actions/music_filter_actions';
import { UPDATE_SEARCH } from '../../actions/filter_actions';

export default (state = initialState, action) => {

  switch (action.type) {
    case TOGGLE_LIVE_ONLY_MUSIC:
      return Object.assign({}, state, { liveOnly: !state.liveOnly });

    case TOGGLE_NOT_FOUND_YET_MUSIC:
      return Object.assign({}, state, { notFoundYet: !state.notFoundYet });

    case UPDATE_SEARCH:
      return Object.assign({}, state, { search: action.text });

    default:
      return state;
  }
};
