import { StyleSheet } from 'react-native'

const ResourcesStyles = StyleSheet.create({
  resources: {
    marginBottom: 94,
    height: '100%'

  },
  resourceContainer: {
    fontFamily: 'roboto-regular',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30
  },
  text: {
    display: 'flex',
    width: '75%'
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
  desc: {
    fontSize: 12

  }
})



export default ResourcesStyles