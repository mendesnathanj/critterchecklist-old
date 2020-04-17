export const TOGGLE_ACTIVE = 'TOGGLE_ACTIVE';
export const TOGGLE_LEAVES_THIS_MONTH = 'TOGGLE_LEAVES_THIS_MONTH';
export const TOGGLE_NOT_FOUND_YET = 'TOGGLE_NOT_FOUND_YET';


const toggleActive = () => ({
  type: TOGGLE_ACTIVE
});

const toggleLeaves = () => ({
  type: TOGGLE_LEAVES_THIS_MONTH
});

const toggleFound = () => ({
  type: TOGGLE_NOT_FOUND_YET
});


export const toggleActiveThisMonth = () => ( toggleActive() );
export const toggleLeavesThisMonth = () => ( toggleLeaves() );
export const toggleAlreadyFound = () => ( toggleFound() );
