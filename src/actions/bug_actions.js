export const TOGGLE_FOUND_BUG = 'TOGGLE_FOUND_BUG';

const toggleBugFound = id => ({
  type: TOGGLE_FOUND_BUG,
  id
})

export const toggleBug = id => (toggleBugFound(id));
