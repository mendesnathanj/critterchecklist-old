import React from 'react';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { text: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const text = e.target.value.toLowerCase();
    this.setState({ text });
    this.props.updateSearch(text);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.page !== this.props.match.params.page) {
      this.setState({ text: '' });
      this.props.updateSearch('');
    }
  }

  render() {
    return (
      <div className="search-bar-wrapper">
        <input className="search-bar" placeholder="Search" type="text" value={this.state.text} onChange={e => this.handleChange(e)} />
      </div>
    )
  }
}


export default SearchBar;
