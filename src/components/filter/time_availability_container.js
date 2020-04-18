import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import TimeAvailabilityInput from './time_availability';
import { dispatchUpdateTime } from '../../actions/filter_actions';


const mapStateToProps = (state, ownProps) => ({
  currentMeridian: state.ui.time
});


const mapDispatchToProps = dispatch => ({
  updateTime: time => dispatch(dispatchUpdateTime(time))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TimeAvailabilityInput));
