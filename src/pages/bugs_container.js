import { connect } from 'react-redux';
import BugPage from './bugs';
import { updateBug } from '../actions/bug_actions';


const mapStateToProps = state => ({
  bugs: Object.values(state.collectibles.bugs)
});


const mapDispatchToProps = dispatch => ({
  updateBug: bug => dispatch(updateBug(bug))
});


export default connect(mapStateToProps, mapDispatchToProps)(BugPage);
