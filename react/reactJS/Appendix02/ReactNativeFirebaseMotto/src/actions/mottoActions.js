import { createAction } from 'redux-actions';
import {
  GET_MOTTOS,
  CREATE_MOTTO,
  SET_IN_MOTTO,
} from '../constants/actionTypes';

export const getMottos = createAction('GET_MOTTOS');
export const createMotto = createAction('CREATE_MOTTO');
export const setInMotto = createAction('SET_IN_MOTTO');
