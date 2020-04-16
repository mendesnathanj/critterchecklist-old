export const RECEIVE_BUG = 'RECEIVE_BUG';


const receiveBug = bug => ({
  type: RECEIVE_BUG,
  bug
});


export const updateBug = bug => ( receiveBug(bug) );
