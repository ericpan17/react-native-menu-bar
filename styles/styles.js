import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },
  header: {
    flex: 1,
  },
  content: {
    flex: 1,
    left: 10,
    bottom: 50,
    top: 0
  },
  footer: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: 45,
    bottom: 15,
    top: 10
  },
  details: {
  },
  text: {
    fontSize: 30
  }
});
