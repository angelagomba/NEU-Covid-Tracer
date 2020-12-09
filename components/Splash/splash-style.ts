import { StyleSheet } from 'react-native'

const SplashStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#9C2C2C',
    height: '100%',
  },
  title: {
    fontFamily: 'roboto-light',
    color: '#F7F3F3',
    textAlign: 'center',
    fontSize: 36,
    fontWeight: '300',
    marginHorizontal: 40,
  },
  button: {
    borderColor: '#F7F3F3',
    borderWidth: 2,
    marginHorizontal: 33,
    marginTop: 132,
  }
});

export default SplashStyles