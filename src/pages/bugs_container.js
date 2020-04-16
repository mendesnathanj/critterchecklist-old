import { connect } from 'react-redux';
import BugPage from './bug_page';
import { toggleBug } from '../actions/bug_actions';


const mapStateToProps = state => ({
  bugs: Object.values(state.collectibles.bugs)
});


const mapDispatchToProps = dispatch => ({
  toggleBug: id => dispatch(toggleBug(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(BugPage);
