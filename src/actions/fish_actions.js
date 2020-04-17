export const TOGGLE_FOUND_FISH = 'TOGGLE_FOUND_FISH';

const toggleFishFound = id => ({
  type: TOGGLE_FOUND_FISH,
  id
})


export const toggleFish = id => (toggleFishFound(id));
