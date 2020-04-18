import { connect } from 'react-redux';
import { toggleComponent } from '../actions/fossil_component_actions';
import FossilPage from './fossils_page';


const mapStateToProps = state => ({
  fossils: Object.values(state.collectibles.fossils),
  components: state.collectibles.fossilComponents,
  filter: state.ui.filter.fossils
})


const mapDispatchToProps = dispatch => ({
  toggleComponent: id => dispatch(toggleComponent(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(FossilPage);
