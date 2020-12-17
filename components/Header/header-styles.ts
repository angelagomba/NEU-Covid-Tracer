import { StyleSheet } from 'react-native'

const HeaderStyles = StyleSheet.create({
  container: {
    backgroundColor: '#C94040',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  label: {
    fontSize: 36,
    fontFamily: 'roboto-light',
    marginTop: 60,
    marginBottom: 20,
    marginLeft: 33,
    color: '#F7F3F3',
  },
  back: {
    transform: [{rotate: '180deg'}],
    marginLeft: 33,
    marginRight: 10,
    marginTop: 65,
  },
  backLabel: {
    fontSize: 24,
    fontFamily: 'roboto-light',
    color: '#F7F3F3',
    marginTop: 60,
    marginBottom: 20,

  }

});

export default HeaderStyles