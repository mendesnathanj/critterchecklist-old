export const TOGGLE_ACTIVE_FISH = 'TOGGLE_ACTIVE_FISH';
export const TOGGLE_LEAVES_THIS_MONTH_FISH = 'TOGGLE_LEAVES_THIS_MONTH_FISH';
export const TOGGLE_NOT_FOUND_YET_FISH = 'TOGGLE_NOT_FOUND_YET_FISH';


const toggleActive = () => ({
  type: TOGGLE_ACTIVE_FISH
});

const toggleLeaves = () => ({
  type: TOGGLE_LEAVES_THIS_MONTH_FISH
});

const toggleFound = () => ({
  type: TOGGLE_NOT_FOUND_YET_FISH
});


export const toggleActiveThisMonth = () => (toggleActive());
export const toggleLeavesThisMonth = () => (toggleLeaves());
export const toggleAlreadyFound = () => (toggleFound());
