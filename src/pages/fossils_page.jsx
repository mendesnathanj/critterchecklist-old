import React from 'react';
import Card from '../components/card/card';
import CollectiblesLayout from '../components/collectibles_layout';
import { forceCheck } from 'react-lazyload';
import { search, filterByFoundFossils } from '../utils/utils';

class FossilPage extends React.Component {
  applyFilters(fossils) {
    const { filter, components } = this.props;

    fossils = search(fossils, filter.search);
    if (filter.notFoundYet) fossils = filterByFoundFossils(fossils, components);

    return fossils;
  }

  applySorts(fossils) {
    fossils = fossils.sort((a, b) => ('' + a.name).localeCompare(b.name));
    return fossils;
  }

  render() {
    let fossils = this.applyFilters(this.props.fossils);
    fossils = this.applySorts(fossils);

    fossils = fossils.map(fossil => {
      const components = fossil.components.map(id => this.props.components[id]);
      return <Card key={fossil.id} collectible={fossil} components={components} toggle={this.props.toggleComponent} />;
    });

    setTimeout(forceCheck, 0);

    return (
      <CollectiblesLayout>
        {fossils}
      </CollectiblesLayout>
    );
  }
}


export default FossilPage;
