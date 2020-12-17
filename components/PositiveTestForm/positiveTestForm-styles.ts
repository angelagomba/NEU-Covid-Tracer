import { StyleSheet } from 'react-native'

const positiveStyles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  calendar: {
    backgroundColor: '#F7F3F3',
    width: '100%',
    marginBottom: 116,
  },
  contentContainer: {
    marginHorizontal: 33,
    marginVertical: 30,
  },
  text: {
    fontFamily: 'roboto-regular',
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    marginTop: 116, 
    height: 50,
    width: '100%',
    backgroundColor: '#9C2C2C',
  },
  buttonText: {
    fontFamily: 'roboto-regular',
    fontSize: 18,
    textAlign: 'center',
    color: '#FFFFFF',
    paddingVertical: 16,
  }
})

export default positiveStyles