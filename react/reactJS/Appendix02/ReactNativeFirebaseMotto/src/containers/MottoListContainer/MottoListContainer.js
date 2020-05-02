import { connect } from 'react-redux';
import MottoList from '../../components/MottoList';
import Immutable from 'immutable';
import uuid from 'uuid';

import {
  createMotto,
  getMottos,
  changeMottoTitle,
} from '../../actions';

export default connect(
  (state) => ({
    mottos: state.getIn(['motto', 'mottos']),
  }),
  (dispatch) => ({
    onCreateMotto: () => (
      dispatch(createMotto())
    ),
    onGetMottos: (mottos) => (
      dispatch(getMottos({ mottos }))
    ),
    onChangeMottoTitle: (title) => (
      dispatch(changeMottoTitle({ value: title }))
    ),
    onDeleteMotto: (mottos) => (id, itemsRef) => () => {
      mottos.forEach((value, key) => {
        if(value.get('id') === id) {
          itemsRef.child(key).remove();
        }
      });
    }
  }),
  (stateToProps, dispatchToProps, ownProps) => {
    const { mottos } = stateToProps;
    const { onDeleteMotto } = dispatchToProps;
    return Object.assign({}, stateToProps, dispatchToProps, ownProps, {
      onDeleteMotto: onDeleteMotto(mottos),
    });
  }
)(MottoList);