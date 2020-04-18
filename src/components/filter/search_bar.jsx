import React from 'react';


class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-bar-wrapper">
        <input className="search-bar" placeholder="Search" type="text" onChange={e => this.props.updateSearch(e.target.value)} />
      </div>
    )
  }
}


export default SearchBar;
