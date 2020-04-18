import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import SearchBar from './search_bar';
import { dispatchUpdateSearch } from '../../actions/filter_actions';


const mapStateToProps = (state, ownProps) => ({
  searchTerm: state.ui.filter[ownProps.match.params.page]
});

const mapDispatchToProps = dispatch => ({
  updateSearch: text => dispatch(dispatchUpdateSearch(text))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));
