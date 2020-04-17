import initialState from '../../state/fossil_components';
import { TOGGLE_FOUND_COMPONENT } from '../../actions/fossil_component_actions';

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FOUND_COMPONENT:
      const toggledComponent = state[action.id];
      toggledComponent.found = !toggledComponent.found;

      return Object.assign({}, state, { [toggledComponent.id]: toggledComponent });
    default:
      return state;
  }
};
