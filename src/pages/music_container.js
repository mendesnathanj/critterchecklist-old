import { connect } from 'react-redux';
import MusicPage from './music_page';
import { toggleMusic } from '../actions/music_actions';


const mapStateToProps = state => ({
  music: Object.values(state.collectibles.music),
  filter: state.ui.filter.music
});

const mapDispatchToProps = dispatch => ({
  toggleMusic: id => dispatch(toggleMusic(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(MusicPage);
