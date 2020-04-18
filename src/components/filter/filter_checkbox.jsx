import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { forceCheck } from 'react-lazyload';

class FilterCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.props.toggle();
    setTimeout(() => forceCheck(), 0);
  }

  render() {
    const { header, active } = this.props;

    const icon = active === true ? faCheckSquare : faSquare;
    return (
      <div className="filter-checkbox-container">
        <h3 className="filter-header">{header}</h3>
        <FontAwesomeIcon className="checkbox" icon={icon} onClick={this.toggle} />
      </div>
    )
  }
}


export default FilterCheckbox;
