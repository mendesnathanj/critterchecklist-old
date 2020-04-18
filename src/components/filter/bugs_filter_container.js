import { connect } from 'react-redux';
import BugsFilter from './bugs_filter';
import { toggleShowAllDay } from '../../actions/filter_actions';
import { toggleActiveThisMonth, toggleLeavesThisMonth, toggleAlreadyFound } from '../../actions/bug_filter_actions';

const mapStateToProps = (state, ownProps) => ({
  filter: ownProps.filter,
  hideAllDay: state.ui.allDay
});


const mapDispatchToProps = dispatch => ({
  toggleActiveThisMonth: () => dispatch(toggleActiveThisMonth()),
  toggleLeavesThisMonth: () => dispatch(toggleLeavesThisMonth()),
  toggleAlreadyFound: () => dispatch(toggleAlreadyFound()),
  toggleShowAllDay: () => dispatch(toggleShowAllDay())
});


export default connect(mapStateToProps, mapDispatchToProps)(BugsFilter);
