import { StyleSheet } from 'react-native'

const SelfScreeningStyles = StyleSheet.create({
  question: {
    paddingHorizontal: 33,
    paddingVertical: 30,
    fontSize: 18,
    fontFamily: 'roboto'
  },
  questionTitle: {
    fontWeight: '500',
    marginBottom: 8,
    fontSize: 18,
  },
  questionCTA: {
    marginBottom: 12,
    fontSize: 18
  },
  question1questions: {
    marginLeft: 12,
    fontSize: 18
  },
  question2desc: {
    fontSize: 18,
    textDecorationLine: 'underline'

  },
  break: {
    backgroundColor: '#EBEAEA',
    height: 2,
    marginHorizontal: 27
  },
  answer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 30
  },
  answerCheckBox: {
    display: 'flex',
    flexDirection: 'row',
    width: '14%',
    marginLeft: 33,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  confirm: {
    marginHorizontal: 30,
    marginTop: 20,
    marginBottom: 50
  }
})

export default SelfScreeningStyles