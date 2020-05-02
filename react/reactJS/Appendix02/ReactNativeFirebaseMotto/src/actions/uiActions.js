import { createAction } from 'redux-actions';
import {
  TOGGLE_MODAL,
} from '../constants/actionTypes';

export const toggleModal = createAction('TOGGLE_MODAL');
