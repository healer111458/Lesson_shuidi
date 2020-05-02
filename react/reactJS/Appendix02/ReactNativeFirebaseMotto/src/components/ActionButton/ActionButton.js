import React from 'react';
import ReactNative from 'react-native';
import styles from './actionButtonStyles';
const { View, Text, Modal, TextInput, TouchableHighlight } = ReactNative;  

const ActionButton = (props) => (
  <TouchableHighlight onPress={props.onToggleModal}>
    <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Add Motto</Text>
    </View>
  </TouchableHighlight>
);

export default ActionButton;
