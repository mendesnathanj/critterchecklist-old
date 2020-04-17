import { connect } from 'react-redux';
import MusicPage from './music_page';


const mapStateToProps = state => ({
  music: Object.values(state.collectibles.music)
});


export default connect(mapStateToProps)(MusicPage);
