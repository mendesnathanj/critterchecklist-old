import React from 'react';


class MeridianDropdown extends React.Component {
  render() {
    return (
      <div className="meridian-dropdown" onClick={this.props.toggle}>
        { this.props.meridian }
      </div>
    );
  }
}


export default MeridianDropdown;
