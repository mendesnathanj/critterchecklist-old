export const TOGGLE_HEMISPHERE = 'TOGGLE_HEMISPHERE';

const toggleHemisphere = hemisphere => ({
  type: TOGGLE_HEMISPHERE,
  hemisphere
});


export const toggleCurrentHemisphere = hemisphere => ( toggleHemisphere(hemisphere) );
