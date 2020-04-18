import { connect } from 'react-redux';
import { toggleFish } from '../actions/fish_actions';
import FishPage from './fish_page';


const mapStateToProps = state => ({
  fish: Object.values(state.collectibles.fish),
  hemisphere: state.ui.hemisphere.hemisphere,
  filter: state.ui.filter.fish
});


const mapDispatchToProps = dispatch => ({
  toggleFish: id => dispatch(toggleFish(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(FishPage);
