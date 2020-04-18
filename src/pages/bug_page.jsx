import React from 'react';
import { Link } from 'react-router-dom';
import CollectiblesLayout from '../components/collectibles_layout';
import Card from '../components/card/card';
import { forceCheck } from 'react-lazyload';
import { filterByActiveMonth, filterByLeaving, search, filterByFound } from '../utils/utils';


class BugPage extends React.Component {
  applyFilters(bugs) {
    const { filter, hemisphere } = this.props;

    bugs = search(bugs, filter.search);

    if (filter.notFoundYet) bugs = filterByFound(bugs);
    if (filter.activeMonth) bugs = filterByActiveMonth(bugs, hemisphere);
    if (filter.leavesThisMonth) bugs = filterByLeaving(bugs, hemisphere);

    return bugs;
  }

  applySorts(bugs) {
    bugs = bugs.sort((a, b) => ('' + a.name).localeCompare(b.name));
    return bugs;
  }

  render() {
    let bugs = this.applyFilters(this.props.bugs);
    bugs = this.applySorts(bugs);
    const { hemisphere } = this.props;

    bugs = bugs.map(bug => <Card key={bug.id} collectible={bug} toggle={this.props.toggleBug} hemisphere={hemisphere} />);

    setTimeout(forceCheck, 0);

    return (
      <div>
        <Link to='/'>Home</Link>
        <div>hewwo i am the bugs page</div>
        <CollectiblesLayout>
          {bugs}
        </CollectiblesLayout>
      </div>
    );
  }
}


export default BugPage;
