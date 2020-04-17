export const TOGGLE_FOUND_COMPONENT = 'TOGGLE_FOUND_COMPONENT';


const toggleFoundComponent = id => ({
  type: TOGGLE_FOUND_COMPONENT,
  id
});


export const toggleComponent = id => ( toggleFoundComponent(id) );
