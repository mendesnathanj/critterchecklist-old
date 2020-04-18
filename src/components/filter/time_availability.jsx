import React from 'react';
import MeridianDropdown from './meridian_dropdown';


class TimeAvailabilityInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = { time: '', meridian: 'AM' };
    this.toggleMeridian = this.toggleMeridian.bind(this);
    this.handleTimeInput = this.handleTimeInput.bind(this);
    this.submitTime = this.submitTime.bind(this);
  }

  handleTimeInput(e) {
    let time = e.target.value;
    if (parseInt(time) > 12) time = 12;
    else if (parseInt(time) < 1) time = 1;

    this.setState({ time }, this.submitTime);
  }

  toggleMeridian() {
    const meridian = this.state.meridian === 'AM' ? 'PM' : 'AM';
    this.setState({ meridian }, this.submitTime);
  }

  submitTime() {
    let time = parseInt(this.state.time);
    if (this.state.time.length === 0) this.props.updateTime(this.state.time);

    if (isNaN(time)) return;

    if (this.state.meridian === 'PM') time += 12;

    console.log(time);
    this.props.updateTime(time);
  }


  render() {
    return (
      <div className="time-input-wrapper">
        <span className="filter-header">Available at this time</span>
        <div className="inputs-wrapper">
          <input className="time-input" placeholder="All" type="number" min={1} max={12} onChange={e => this.handleTimeInput(e)} />
          <MeridianDropdown meridian={this.state.meridian} toggle={this.toggleMeridian} />
        </div>
      </div>
    )
  }
}


export default TimeAvailabilityInput;
