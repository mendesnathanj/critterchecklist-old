import { connect } from 'react-redux';
import MusicFilter from './music_filter';
import { toggleAlreadyFound, toggleOnlyLive } from '../../actions/music_filter_actions';

const mapStateToProps = (_, ownProps) => ({
  filter: ownProps.filter
});


const mapDispatchToProps = dispatch => ({
  toggleAlreadyFound: () => dispatch(toggleAlreadyFound()),
  toggleOnlyLive: () => dispatch(toggleOnlyLive())
});


export default connect(mapStateToProps, mapDispatchToProps)(MusicFilter);
