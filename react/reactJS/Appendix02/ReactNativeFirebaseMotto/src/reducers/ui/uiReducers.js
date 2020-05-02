import { handleActions } from 'redux-actions';
import { 
  UiState,
} from '../../constants/models';

import {
  TOGGLE_MODAL,
} from '../../constants/actionTypes';

const uiReducers = handleActions({
  TOGGLE_MODAL: (state) => (
    state.set(
      'isModalVisible',
      !state.get('isModalVisible')
    )
  ),  
}, UiState);

export default uiReducers;