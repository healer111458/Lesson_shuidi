import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  modalHeader: {
    flex: 1,
    height: 30,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#ffc107',
    fontSize: 20,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    borderRadius: 5,

  },
  cancelButton: {
    flex: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eceff1',
    margin: 5,
  },
  submitButton: {
    flex: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4fc3f7',
    margin: 5,
  },
  buttonText: {
    fontSize: 20,
  }
});