import React from 'react';
import ReactNative from 'react-native';
import styles from './listItemStyles';
const { View, Text, TouchableHighlight } = ReactNative;

const ListItem = (props) => {
  return (
    <View style={styles.listItemContainer}>
      <Text style={styles.listItemText}>{props.item.get('text')}</Text>
      <TouchableHighlight onPress={props.onDeleteMotto(props.item.get('id'), props.itemsRef)}>
        <Text>Delete</Text>
      </TouchableHighlight>
    </View>
  )
};

export default ListItem;