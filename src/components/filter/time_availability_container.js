import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import TimeAvailabilityInput from './time_availability';
import { dispatchUpdateTime, toggleShowAllDay } from '../../actions/filter_actions';


const mapStateToProps = (state, ownProps) => ({
  currentMeridian: state.ui.time,
  hideAllDay: state.ui.allDay
});


const mapDispatchToProps = dispatch => ({
  updateTime: time => dispatch(dispatchUpdateTime(time)),
  toggleShowAllDay: () => dispatch(toggleShowAllDay())
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TimeAvailabilityInput));
