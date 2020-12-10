import { StyleSheet } from 'react-native'

const LoginStyles = StyleSheet.create({
  buttonContainer: {
    marginTop: 42,
  },
  container: {
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  error: {
    color: '#383636',
    fontFamily: 'roboto-regular',
    fontSize: 18,
    marginBottom: 10,
    visibility: 'visible',
  },
  loginContainer: {
    justifyContent: 'center',
    marginHorizontal: 24,
  },
  title: {
    color: '#9C2C2C',
    fontFamily: 'roboto-light',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 90,
  },
  textField: {
    width: '100%',
    height: 48,
    backgroundColor: '#F7F3F3',
    borderBottomColor: '#B8B2B2',
    borderBottomWidth: 2,
    fontFamily: 'roboto-medium',
    fontSize: 18,
    fontColor: '#B8B2B2',
    opacity: 0.7,
    marginBottom: 20,
    paddingLeft: 15,
  },
  linksContainer: {
    marginTop: 30,
  },
  links: {
    fontFamily: 'roboto-regular',
    fontSize: 18,
    color: '#9C2C2C',
    marginBottom: 10,
    textAlign: 'center'
  }
});

export default LoginStyles