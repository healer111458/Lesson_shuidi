import { connect } from 'react-redux';
import InputModal from '../../components/InputModal';
import Immutable from 'immutable';

import {
  toggleModal,
  setInMotto,
  createMotto,
} from '../../actions';
import uuid from 'uuid';
 
export default connect(
  (state) => ({
    isModalVisible: state.getIn(['ui', 'isModalVisible']),
    motto: state.getIn(['motto', 'motto']),
  }),
  (dispatch) => ({
    onToggleModal: () => (
      dispatch(toggleModal())
    ),
    onChangeMottoText: (text) => (
      dispatch(setInMotto({ path: ['motto', 'text'], value: text }))
    ),
    onCreateMotto: (motto) => (itemsRef) => () => {
      itemsRef.push({ id: uuid.v4(), text: motto.get('text'), updatedAt: Date.now() });
      dispatch(setInMotto({ path: ['motto'], value: Immutable.fromJS({ id: '', text: '', updatedAt: '' })}));
      dispatch(toggleModal());
    }
  }),
  (stateToProps, dispatchToProps, ownProps) => {
    const { motto } = stateToProps;
    const { onCreateMotto } = dispatchToProps;
    return Object.assign({}, stateToProps, dispatchToProps, ownProps, {
      onCreateMotto: onCreateMotto(motto),
    });
  },
)(InputModal);
