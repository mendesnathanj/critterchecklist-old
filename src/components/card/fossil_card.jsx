import React from 'react';
import Title from './title';
import FossilComponent from './fossil_component';

class FossilCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { found: false };
  }

  componentDidMount() {
    const { components } = this.props;
    const found = components.map(c => c.found).reduce((acc, el) => acc && el);
    this.setState({ found });
  }

  componentDidUpdate(_, prevState) {
    const { components } = this.props;
    const found = components.map(c => c.found).reduce((acc, el) => acc && el);
    if (prevState.found !== found) this.setState({ found });
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
