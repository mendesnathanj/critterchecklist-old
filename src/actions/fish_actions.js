export const RECEIVE_FISH = 'RECEIVE_FISH';
export const TOGGLE_FOUND = 'TOGGLE_FOUND';

const receiveFish = fish => ({
  type: RECEIVE_FISH,
  fish
});

const toggleFishFound = id => ({
  type: TOGGLE_FOUND,
  id
})


export const toggleFish = id => (toggleFishFound(id));
