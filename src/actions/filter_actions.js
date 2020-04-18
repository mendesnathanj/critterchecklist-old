export const TOGGLE_HEMISPHERE = 'TOGGLE_HEMISPHERE';
export const UPDATE_SEARCH = 'UPDATE_SEARCH';
export const UPDATE_TIME = 'UPDATE_TIME';

const toggleHemisphere = hemisphere => ({
  type: TOGGLE_HEMISPHERE,
  hemisphere
});

const updateTime = time => ({
  type: UPDATE_TIME,
  time
});

const updateSearch = text => ({
  type: UPDATE_SEARCH,
  text
});


export const toggleCurrentHemisphere = hemisphere => ( toggleHemisphere(hemisphere) );
export const dispatchUpdateSearch = text => ( updateSearch(text) );
export const dispatchUpdateTime = time => (updateTime(time));
