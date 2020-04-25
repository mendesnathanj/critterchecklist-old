import React from 'react';


class LocationItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.toggle(this.props.value);
    this.props.toggleOpen();
  }

  render() {
    const { location } = this.props;

    return (
      <li className="location-item" onClick={this.handleClick}>{location}</li>
    )
  }
}


export default LocationItem
