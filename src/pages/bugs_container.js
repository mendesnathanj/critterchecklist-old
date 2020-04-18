import { connect } from 'react-redux';
import BugPage from './bug_page';
import { toggleBug } from '../actions/bug_actions';


const mapStateToProps = state => ({
  bugs: Object.values(state.collectibles.bugs),
  filter: state.ui.filter['bugs'],
  hemisphere: state.ui.hemisphere,
  time: state.ui.time,
  hideAllDay: state.ui.allDay
});


const mapDispatchToProps = dispatch => ({
  toggleBug: id => dispatch(toggleBug(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(BugPage);
