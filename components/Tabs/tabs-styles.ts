import { StyleSheet } from 'react-native'

const TabStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    backgroundColor: '#C94040',
    height: 94,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  indicator: {
    width: 54,
    height: 54,
    backgroundColor: '#C94040', 
    marginHorizontal: 21,
    marginTop: 13,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 9,
    fontFamily: 'roboto-medium',
    color: '#F7F3F3'
  }
})

export default TabStyles