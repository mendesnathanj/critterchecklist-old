import React from 'react';
import Card from '../components/card/card';
import CollectiblesLayout from '../components/fossils_layout';
import { search, filterByFoundFossils } from '../utils/utils';

class FossilPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { totalCol: null };
    this.addHeight = this.addHeight.bind(this);
    this.subHeight = this.subHeight.bind(this);
    this.updateTotalCol = this.updateTotalCol.bind(this);
    this.listener = null;
    this.smallBrkPoint = 600;
    this.mediumBrkPoint = 900;
  }

  componentDidMount() {
    this.updateTotalCol();

    this.listener = window.addEventListener('resize', this.updateTotalCol);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.listener);
  }

  updateTotalCol() {
    const { totalCol } = this.state;
    if (window.innerWidth <= this.smallBrkPoint && totalCol !== 1)
      this.setState({ totalCol: 1 });
    else if (window.innerWidth > this.smallBrkPoint && window.innerWidth <= this.mediumBrkPoint && totalCol !== 2)
      this.setState({ totalCol: 2 });
    else if (window.innerWidth > this.mediumBrkPoint && totalCol !== 3)
      this.setState({ totalCol: 3 });
  }

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

  addHeight(amt) {
    this.height += amt;
    this.cardsMounted += 1;
    if (this.cardsMounted === this.props.fossils.length)
      this.setState({ totalHeight: this.height });
  }

  subHeight(amt) {
    this.cardsMounted -= 1;
    this.height -= amt;
    this.setState({ totalHeight: this.state.totalHeight - amt });
  }

  render() {
    if (this.state.totalCol === null) return null;

    let fossils = this.applyFilters(this.props.fossils);
    fossils = this.applySorts(fossils);

    let cols = new Array(this.state.totalCol).fill(null).map(el => []);
    let currCol = 0;

    fossils = fossils.map(fossil => {
      const components = fossil.components.map(id => this.props.components[id]);

      return <Card key={fossil.id} collectible={fossil} components={components} toggle={this.props.toggleComponent} fossil={true} addHeight={this.addHeight} subHeight={this.subHeight} />;
    });

    for (let i = 0; i < fossils.length; i++) {
      cols[currCol % cols.length].push(fossils[i]);
      currCol++;
    }

    cols = cols.map(items => <div className="fossil-col">{ items }</div>);
    return (
      <CollectiblesLayout>
        { cols }
      </CollectiblesLayout>
    );
  }
}


export default FossilPage;
