import initialState from '../../state/fish';
import { TOGGLE_FOUND_FISH } from '../../actions/fish_actions';

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FOUND_FISH:
      const toggledFish = state[action.id];
      toggledFish.found = !toggledFish.found;

      return Object.assign({}, state, { [toggledFish.id]: toggledFish });
    default:
      return state;
  }
};
