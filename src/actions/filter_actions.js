export const TOGGLE_HEMISPHERE = 'TOGGLE_HEMISPHERE';
export const UPDATE_SEARCH = 'UPDATE_SEARCH';

const toggleHemisphere = hemisphere => ({
  type: TOGGLE_HEMISPHERE,
  hemisphere
});


const updateSearch = text => ({
  type: UPDATE_SEARCH,
  text
});


export const toggleCurrentHemisphere = hemisphere => ( toggleHemisphere(hemisphere) );
export const dispatchUpdateSearch = text => ( updateSearch(text) );
