import { StyleSheet, Dimensions } from 'react-native';
const { height } = Dimensions.get('window');
export default StyleSheet.create({
  listView: {
    flex: 1,
    flexDirection: 'column',
    height: height - 105,
  },
});