import React from 'react'
import { Text, View } from 'react-native'
import Header from '../Header/index'
import PositiveStyles from './positiveTestForm-styles'
import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'
import Button from '../Button/index'

function PositiveTestForm({ navigation, route }) {

  const goToConfirmation = () => {
    navigation.navigate('Confirmation')
  }

  return(
    <View style={PositiveStyles.container}>
      <Header label={'Positive Test Result Form'} labelStyle={{}} back={true} navigation={navigation}/>
      <View style={PositiveStyles.contentContainer}>
        <Text style={PositiveStyles.text}>When did you take the COVID-19 test that received a postiive result?</Text>
        <View style={PositiveStyles.calendar}>
          <DateTimePicker
            testID="dateTimePicker"
            value={moment().toDate()}
            mode='date'
            display='inline'
          />
        </View>
        <Button label={'Complete Form'} onPress={goToConfirmation} buttonStyle={{}} labelStyle={{}}/>
      </View>
    </View>
  )
}

export default PositiveTestForm