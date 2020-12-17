import { StyleSheet } from 'react-native'

const HomeStyles = StyleSheet.create({
  container: {
    height: '100%',
  },
  buttonsContainer: {
    paddingVertical: 30,
    backgroundColor: '#9C2C2C',
    width: '100%',
  },
  buttonContainer: {
    borderWidth: 2, 
    borderColor: '#FFFFFF',
    marginHorizontal: 33,
  },
  dashboardContainer: {
    backgroundColor: '#F7F3F3',
    marginVertical: 20,
  },
  dashboardInfo: {
    marginVertical: 21,
    flexDirection: 'row',
  },
  dashboardTextContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  divider: {
    backgroundColor: '#EBEAEA',
    height: 2,
  },
  infoText: {
    fontFamily: 'roboto-light',
    fontSize: 24,
    color: '#383636',
  },
  infoTitle: {
    fontFamily: 'roboto-regular',
    fontSize: 12,
    color: '#383636',
    marginBottom: 12,
  },
  scheduleContainer: {
    backgroundColor: '#F7F3F3',
    marginVertical: 20,
  },
  scheduleInfo: {
    marginVertical: 21,
    alignItems: 'center',
  },
  sectionContainer: {
    marginHorizontal: 33,
    marginTop: 30,
  },
  sectionLink: {
    color: '#9C2C2C',
    fontFamily: 'roboto-regular',
    fontSize: 18,
    marginBottom: 30
  },
  sectionTitle: {
    fontFamily: 'roboto-light',
    fontSize: 24,
    color: '#383636',
  },
  newsContainer: {
    backgroundColor: '#F7F3F3',
    marginVertical: 20,
  },
  contentContainer: {
    marginHorizontal: 16,
    marginVertical: 14,
  }
})

export default HomeStyles