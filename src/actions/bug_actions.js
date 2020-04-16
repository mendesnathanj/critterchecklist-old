export const TOGGLE_FOUND = 'TOGGLE_FOUND';

const toggleBugFound = id => ({
  type: TOGGLE_FOUND,
  id
})

export const toggleBug = id => (toggleBugFound(id));
