import { TOGGLE_HEMISPHERE } from "../../actions/filter_actions";

export default (state = 'north', action) => {
  switch (action.type) {
    case TOGGLE_HEMISPHERE:
      return action.hemisphere.substring(0, 5);

    default:
      return state;
  }
};
