export const TOGGLE_ACTIVE_BUG = 'TOGGLE_ACTIVE_BUG';
export const TOGGLE_LEAVES_THIS_MONTH_BUG = 'TOGGLE_LEAVES_THIS_MONTH_BUG';
export const TOGGLE_NOT_FOUND_YET_BUG = 'TOGGLE_NOT_FOUND_YET_BUG';

const toggleActive = () => ({
  type: TOGGLE_ACTIVE_BUG
});

const toggleLeaves = () => ({
  type: TOGGLE_LEAVES_THIS_MONTH_BUG
});

const toggleFound = () => ({
  type: TOGGLE_NOT_FOUND_YET_BUG
});



export const toggleActiveThisMonth = () => ( toggleActive() );
export const toggleLeavesThisMonth = () => ( toggleLeaves() );
export const toggleAlreadyFound = () => ( toggleFound() );
