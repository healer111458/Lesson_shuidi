import React from 'react';
import ReactNative from 'react-native';
import styles from './inputModelStyles';
const { View, Text, Modal, TextInput, TouchableHighlight } = ReactNative;
const InputModal = (props) => (
  <View>
    <Modal
      animationType={"slide"}
      transparent={false}
      visible={props.isModalVisible}
      onRequestClose={props.onToggleModal}
      >
     <View>
      <View>
        <Text style={styles.modalHeader}>Please Keyin your Motto!</Text>
        <TextInput
          onChangeText={props.onChangeMottoText}
        />
        <View style={styles.buttonContainer}>      
          <TouchableHighlight 
            onPress={props.onToggleModal}
            style={[styles.cancelButton]}
          >
            <Text
              style={styles.buttonText}
            >
              Cancel
            </Text>
          </TouchableHighlight>
          <TouchableHighlight 
            onPress={props.onCreateMotto(props.itemsRef)}
            style={[styles.submitButton]}
          >
            <Text
              style={styles.buttonText}
            >
              Submit
            </Text>
          </TouchableHighlight>  
        </View>
      </View>
     </View>
    </Modal>
  </View>
);

export default InputModal;