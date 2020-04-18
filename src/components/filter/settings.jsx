import React from 'react';
import SettingOption from './setting_option';


class Settings extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: false };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState({ open: !this.state.open });
  }


  render() {
    const options = ['northern', 'southern']
      .map(option => <SettingOption key={option} option={option} curr={this.props.currentHemisphere} toggle={this.props.toggleCurrentHemisphere} />);

    return (
      <div className="hemispheres-wrapper">
        <div className="hemispheres-container">
          <h3 className="hemisphere-header" onClick={this.toggleOpen}>Hemisphere</h3>
          <div className="options">
            { options }
          </div>
        </div>
      </div>
    )
  }
};


export default Settings;
