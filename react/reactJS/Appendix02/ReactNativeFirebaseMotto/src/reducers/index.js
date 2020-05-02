import { combineReducers } from 'redux-immutable';
import ui from './ui/uiReducers';
import motto from './data/mottoReducers';

const rootReducer = combineReducers({
  ui,
  motto,
});

export default rootReducer;
