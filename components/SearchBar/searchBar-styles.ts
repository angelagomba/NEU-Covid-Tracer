import { StyleSheet } from 'react-native'

const SearchBarStyles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#9C2C2C',
  },
  searchContainer: {
    flexDirection: 'row',
    marginVertical: 16,
    marginHorizontal: 30,
    backgroundColor: '#FFFFFF',
    height: 35,
  },
  text: {
    color: '#B8B2B2',
    fontFamily: 'roboto-regular',
    marginLeft: 15,
    fontSize: 12,
    marginVertical: 10,
  },
  textAndIcon: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  }
})

export default SearchBarStyles