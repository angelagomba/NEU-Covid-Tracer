import { StyleSheet } from 'react-native'

const ProfileStyles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#FFFFFF'
  },
  contentContainer: {
    marginHorizontal: 22,
    marginVertical: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  name: {
    fontFamily: 'roboto-bold',
    fontSize: 18,
  },
  boldText: {
    fontFamily: 'roboto-bold',
    fontSize: 12,
  },
  idContainer: {
    flexDirection: 'row',
  },
  id: {
    fontFamily: 'roboto-regular',
    fontSize: 12,
  },
  infoContainer: {
    flexDirection: 'row',
    height: 67,
    alignItems: 'center'
  },
  studentInfoContainer: {
    marginLeft: 13,
  },
  cardContainer: {
    backgroundColor: '#F7F3F3',
    height: 59,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 14,
  },
  cardsContainer: {
    width: '100%',
    marginTop: 14
  }

})

export default ProfileStyles