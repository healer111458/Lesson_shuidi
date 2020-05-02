import { handleActions } from 'redux-actions';
import { 
  MottoState
} from '../../constants/models';

import {
  GET_MOTTOS,
  CREATE_MOTTO,
  SET_IN_MOTTO,
} from '../../constants/actionTypes';

const mottoReducers = handleActions({
  GET_MOTTOS: (state, { payload }) => (
    state.set(
      'mottos',
      payload.mottos
    )
  ),  
  CREATE_MOTTO: (state) => (
    state.set(
      'mottos',
      state.get('mottos').push(state.get('motto'))
    )
  ),
  SET_IN_MOTTO: (state, { payload }) => (
    state.setIn(
      payload.path,
      payload.value
    )
  )
}, MottoState);

export default mottoReducers;