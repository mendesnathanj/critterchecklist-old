import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Filter from './filter';
import { toggleCurrentHemisphere } from '../../actions/filter_actions';


const mapStateToProps = (state, ownProps) => ({
  page: ownProps.match.params.page,
  filter: state.ui.filter[ownProps.match.params.page],
  currentHemisphere: state.ui.hemisphere
});

const mapDispatchToProps = dispatch => ({
  toggleCurrentHemisphere: hemisphere => dispatch(toggleCurrentHemisphere(hemisphere))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Filter));
