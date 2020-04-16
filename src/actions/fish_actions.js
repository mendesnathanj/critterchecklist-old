export const TOGGLE_FOUND = 'TOGGLE_FOUND';

const toggleFishFound = id => ({
  type: TOGGLE_FOUND,
  id
})


export const toggleFish = id => (toggleFishFound(id));
