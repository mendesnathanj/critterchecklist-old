import initialState from '../../state/music';
import { TOGGLE_FOUND_MUSIC } from '../../actions/music_actions';

export default (state = initialState, action) => {
  switch (action.type) {
    case (TOGGLE_FOUND_MUSIC):
      const toggledMusic = state[action.id];
      toggledMusic.found = !toggledMusic.found;

      return Object.assign({}, state, { [toggledMusic.id]: toggledMusic });
    default:
      return state;
  }
};
