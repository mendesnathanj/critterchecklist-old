import React from 'react';
import { Link } from 'react-router-dom';
import CollectiblesLayout from '../components/collectibles_layout';
import Card from '../components/card/card';


class BugPage extends React.Component {
  applyFilters(bugs) {
    const { filter, hemisphere } = this.props;
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'];
    const currMonthIdx = new Date().getMonth();

    if (filter.notFoundYet) bugs = bugs.filter(bug => !bug.found);

    if (filter.activeMonth) bugs = bugs.filter(bug => bug.months[hemisphere][months[currMonthIdx]]);

    if (filter.leavesThisMonth) {
      bugs = bugs.filter(bug => {
        const availableThisMonth = bug.months[hemisphere][months[currMonthIdx]];
        const unavailableNextMonth = !bug.months[hemisphere][months[currMonthIdx + 1]];

        return (availableThisMonth && unavailableNextMonth);
      });
    }


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
