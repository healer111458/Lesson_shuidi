import Immutable from 'immutable';

export const MottoState = Immutable.fromJS({
  mottos: [],
  motto: {
    id : '',
    text: '',
    updatedAt: '',
  }
});

export const UiState = Immutable.fromJS({
  isModalVisible: false,
});