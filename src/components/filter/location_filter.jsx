import React from 'react';
import LocationItem from './location_item';

class LocationFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: false };
    this.toggleOpen = this.toggleOpen.bind(this);
  }


  toggleOpen() {
    this.setState({ open: !this.state.open });
  }


  render() {
    const { location, locations, toggleLocation } = this.props;

    let currentLocation = locations.find(loc => loc.value === location);
    let otherLocations = locations.filter(loc => loc.value !== location);

    const containerOpen = this.state.open ? ' open' : '';

    let locationItems = this.state.open ? otherLocations.map(loc => (
      <LocationItem key={loc.location} location={loc.location} value={loc.value} toggle={toggleLocation} toggleOpen={this.toggleOpen} />
    )) : null;

    return (
      <div className="filter-location-container">
        <h3 className="filter-header">Location</h3>
        <div className={`location-list-container${containerOpen}`}>
            <div onClick={this.toggleOpen} className="selected">{ currentLocation.location }</div>
            <ul className="location-list">
              {locationItems}
            </ul>
        </div>
      </div>
    )
  }
};


export default LocationFilter;
