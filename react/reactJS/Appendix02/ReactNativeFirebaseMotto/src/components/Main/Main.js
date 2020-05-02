import React from 'react';
import ReactNative from 'react-native';
import { Provider } from 'react-redux'; 
import ToolBar from '../ToolBar';
import MottoListContainer from '../../containers/MottoListContainer';
import ActionButtonContainer from '../../containers/ActionButtonContainer';
import InputModalContainer from '../../containers/InputModalContainer';
import ListItem from '../ListItem';
import * as firebase from 'firebase';
import { firebaseConfig } from '../../constants/config';
import store from '../../store';
const { View, Text } = ReactNative;

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Create a reference with .ref() instead of new Firebase(url)
const rootRef = firebaseApp.database().ref();
const itemsRef = rootRef.child('items');

const Main = () => (
  <Provider store={store}>
    <View>
      <ToolBar style={styles.toolBar} />
      <MottoListContainer itemsRef={itemsRef} />
      <ActionButtonContainer />
      <InputModalContainer itemsRef={itemsRef} />
    </View>
  </Provider>
);

export default Main; 