import { connect } from 'react-redux';
import FossilFilter from './fossil_filter';
import { toggleAlreadyFound } from '../../actions/fossil_filter_actions';

const mapStateToProps = (_, ownProps) => ({
  filter: ownProps.filter
});


const mapDispatchToProps = dispatch => ({
  toggleAlreadyFound: () => dispatch(toggleAlreadyFound())
});


export default connect(mapStateToProps, mapDispatchToProps)(FossilFilter);
