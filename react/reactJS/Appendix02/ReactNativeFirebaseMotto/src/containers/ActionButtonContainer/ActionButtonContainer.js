import { connect } from 'react-redux';
import ActionButton from '../../components/ActionButton';
import {
  toggleModal,
} from '../../actions';
 
export default connect(
  (state) => ({}),
  (dispatch) => ({
    onToggleModal: () => (
      dispatch(toggleModal())
    )
  })
)(ActionButton);
