import { connect } from 'react-redux';
import LocationFilter from './location_filter';
import { toggleFoundLocation } from '../../actions/fish_filter_actions';


const mapStateToProps = state => {
  const locations = Array.from(new Set(Object.values(state.collectibles.fish).map(fish => fish.location))).map(loc => ({ location: loc, value: loc }));
  locations.unshift({ location: 'Any', value: '' });
  return {
    location: state.ui.filter.fish.filterByLocation,
    locations
  }
}


const mapDispatchToProps = dispatch => ({
  toggleLocation: location => dispatch(toggleFoundLocation(location))
});


export default connect(mapStateToProps, mapDispatchToProps)(LocationFilter);
