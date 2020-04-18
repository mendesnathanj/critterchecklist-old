import { connect } from 'react-redux';
import FishFilter from './fish_filter';
import { toggleActiveThisMonth, toggleLeavesThisMonth, toggleAlreadyFound } from '../../actions/fish_filter_actions';

const mapStateToProps = (_, ownProps) => ({
  filter: ownProps.filter
});


const mapDispatchToProps = dispatch => ({
  toggleActiveThisMonth: () => dispatch(toggleActiveThisMonth()),
  toggleLeavesThisMonth: () => dispatch(toggleLeavesThisMonth()),
  toggleAlreadyFound: () => dispatch(toggleAlreadyFound())
});


export default connect(mapStateToProps, mapDispatchToProps)(FishFilter);
