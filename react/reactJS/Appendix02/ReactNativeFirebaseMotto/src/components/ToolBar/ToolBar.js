import React from 'react';
import ReactNative from 'react-native';
import styles from './toolBarStyles';
const { View, Text } = ReactNative;

const ToolBar = () => (
  <View style={styles.toolBarContainer}>
    <Text style={styles.toolBarText}>Startup Mottos</Text>
  </View>
);

export default ToolBar; 