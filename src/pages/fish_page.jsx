import React from 'react';
import CollectiblesLayout from '../components/collectibles_layout';
import Card from '../components/card/card';
import { forceCheck } from 'react-lazyload';
import { filterByActiveMonth, filterByLeaving, search, filterByFound } from '../utils/utils';


class FishPage extends React.Component {
  applyFilters(fish) {
    const { filter, hemisphere } = this.props;

    fish = search(fish, filter.search);

    if (filter.notFoundYet) fish = filterByFound(fish);
    if (filter.activeMonth) fish = filterByActiveMonth(fish, hemisphere);
    if (filter.leavesThisMonth) fish = filterByLeaving(fish, hemisphere);

    return fish;
  }

  applySorts(fish) {
    fish = fish.sort((a, b) => ('' + a.name).localeCompare(b.name));
    return fish;
  }

  render() {
    let fish = this.applyFilters(this.props.fish);
    fish = this.applySorts(fish);
    const { hemisphere } = this.props;

    fish = fish.map(fish => <Card key={fish.id} collectible={fish} toggle={this.props.toggleFish} hemisphere={hemisphere} />);

    setTimeout(forceCheck, 0);

    return (
      <CollectiblesLayout>
        {fish}
      </CollectiblesLayout>
    );
  }
}




export default FishPage;
