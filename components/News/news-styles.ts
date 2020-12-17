import { StyleSheet } from 'react-native'

const NewsStyles = StyleSheet.create({
  container: {
    marginBottom: 238,
  },
  scrollContainer: {
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  sectionContainer: {
    height: 49,
    width: '100%',
    backgroundColor: '#C94040',
    flexDirection: 'row',
  },
  sectionText: {
    fontFamily: 'roboto-bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  tabContainer: {
    flexDirection: 'column',
    marginTop: 18,
    width: '50%',
  },
  indicator: {
    height: 4,
    backgroundColor: '#F7F3F3',
    width: '100%',
    marginTop: 11,
  },
  newsContainer: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
  },
  contentContainer: {
    marginVertical: 19,
    marginHorizontal: 24,
  },
  dateText: {
    color: '#828282',
    fontSize: 12,
    fontFamily: 'roboto-regular',
  },
  titleText: {
    fontFamily: 'roboto-medium',
    fontSize: 18,
    marginTop: 3,
    marginRight: 50,
  },
  descText: {
    fontFamily: 'roboto-regular',
    fontSize: 12,
    marginTop: 22,
    marginRight: 70,
    color: '#333333'
  },
  break: {
    height: 1,
    width: '100%',
    marginHorizontal: 9,
    backgroundColor: '#EBEAEA'
  },
  loadMore: {
    height: 50,
    backgroundColor: '#9C2C2C',
    marginHorizontal: 30,
    marginTop: 30,
  },
  loadMoreText: {
    fontFamily: 'roboto-regular',
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    marginVertical: 16,
  },
  noFavoritesContainer: {
    height: '100%',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  noFavoritesText: {
    marginTop: 177,
    fontFamily: 'roboto-regular',
    fontSize: 20,
    fontStyle: 'italic',
  }, 
  star: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: -30,
  }
})

export default NewsStyles