import React from 'react';
import BugsFilter from './bugs_filter_container';
import FishFilter from './fish_filter_container';
import MusicFilter from './music_filter_container';
import FossilFilter from './fossil_filter_container';
import Settings from './settings';
import SearchBarContainer from './search_bar_container';
import './Filter.css';


class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: false };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState({ open: !this.state.open });
  }

  render() {
    let pageFilter;
    let settings = null;
    const { page, filter, currentHemisphere, toggleCurrentHemisphere } = this.props;

    const openClass = this.state.open ? ' open' : '';
    if (page === 'bugs')
      pageFilter = <BugsFilter filter={filter} />;
    else if (page === 'fish')
      pageFilter = <FishFilter filter={filter} />;
    else if (page === 'music')
      pageFilter = <MusicFilter filter={filter} />;
    else
      pageFilter = <FossilFilter filter={filter} />;

    if (['bugs', 'fish'].includes(page))
      settings = <Settings toggleCurrentHemisphere={toggleCurrentHemisphere} currentHemisphere={currentHemisphere} />;

    return (
      <div className={`filter-wrapper${openClass}`}>
        <h3 className="filter-toggler" onClick={this.toggleOpen}>Filters</h3>
        <div className='filter-options'>
          { pageFilter }
          { settings }
          <SearchBarContainer />
        </div>
      </div>
    )
  }
}


export default Filter;
