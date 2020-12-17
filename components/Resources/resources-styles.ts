import { StyleSheet } from 'react-native'

const ResourcesStyles = StyleSheet.create({
  resources: {
    height: '100%',
  },
  resourceContainer: {
    fontFamily: 'roboto-regular',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#FFFFFF',
  },
  text: {
    display: 'flex',
    marginVertical: 20,
    marginRight: 20,
  },
  title: {
    fontSize: 18,
    fontFamily: 'roboto-medium',
    marginBottom: 10,
  },
  desc: {
    fontSize: 12,
    color: '#333333',
    fontFamily: 'roboto-regular',
  },
  break: {
    backgroundColor: '#EBEAEA',
    width: '100%',
    height: 1,
    marginHorizontal: 9,
  }
})



export default ResourcesStyles