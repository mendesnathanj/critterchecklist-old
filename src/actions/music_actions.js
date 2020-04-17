export const TOGGLE_FOUND_MUSIC = 'TOGGLE_FOUND_MUSIC';


const toggleMusicFound = id => ({
  type: TOGGLE_FOUND_MUSIC,
  id
});


export const toggleMusic = id => (toggleMusicFound(id));
