import { connect } from 'react-redux';
import BugsFilter from './bugs_filter';
import { toggleActiveThisMonth, toggleLeavesThisMonth, toggleAlreadyFound } from '../../actions/bug_filter_actions';

const mapStateToProps = (_, ownProps) => ({
  page: ownProps.page,
  filter: ownProps.filter
});


const mapDispatchToProps = dispatch => ({
  toggleActiveThisMonth: () => dispatch(toggleActiveThisMonth()),
  toggleLeavesThisMonth: () => dispatch(toggleLeavesThisMonth()),
  toggleAlreadyFound: () => dispatch(toggleAlreadyFound())
});


export default connect(mapStateToProps, mapDispatchToProps)(BugsFilter);
