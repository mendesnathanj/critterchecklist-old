export const TOGGLE_NOT_FOUND_YET_MUSIC = 'TOGGLE_NOT_FOUND_YET_MUSIC';
export const TOGGLE_LIVE_ONLY_MUSIC = 'TOGGLE_LIVE_ONLY_MUSIC';


const toggleFound = () => ({
  type: TOGGLE_NOT_FOUND_YET_MUSIC
});

const toggleLiveOnly = () => ({
  type: TOGGLE_LIVE_ONLY_MUSIC
});


export const toggleOnlyLive = () => (toggleLiveOnly());
export const toggleAlreadyFound = () => (toggleFound());
