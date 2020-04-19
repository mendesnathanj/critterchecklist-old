import React from 'react';
import Title from './title';
import FossilComponent from './fossil_component';

class FossilCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { collectible, toggle, components } = this.props;
    const { name } = collectible;

    const fossilComponents = components.map(component => (
      <FossilComponent
        key={component.id}
        component={component}
        toggle={toggle} />
    ));

    return (
      <div className="card">
        <Title name={name} />
        { fossilComponents }
      </div>
    )
  }
};


export default FossilCard;
