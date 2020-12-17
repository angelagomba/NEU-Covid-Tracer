import React from 'react'
import Header from '../Header/index'
import SelfScreeningStyles from './selfscreening-styles'
import Button from '../Button/index'
import * as WebBrowser from 'expo-web-browser'

import { 
  Text, 
  View,
  ScrollView,
  CheckBox
} from 'react-native'

function SelfScreening({navigation, route}) {
  
  const question1 = () => {
    return ( 
      <View style={SelfScreeningStyles.question}>
        <Text style={SelfScreeningStyles.questionTitle}>Question 1</Text>
        <Text style={SelfScreeningStyles.questionCTA}>Are you experiencing any of the following symptoms?</Text>
        <View style={SelfScreeningStyles.question1questions}>
          <Text style={{fontSize: 18}}>o New loss of smell or taste</Text>
          <Text style={{fontSize: 18}}>o New/worsened muscle aches</Text>
          <Text style={{fontSize: 18}}>o New/worsened cough</Text>
          <Text style={{fontSize: 18}}>o New/worsened shortness of breath</Text>
          <Text style={{fontSize: 18}}>o New/worsened sore throat</Text>
          <Text style={{fontSize: 18}}>o Diarrhea/vomitting</Text>
          <Text style={{fontSize: 18}}>o Fever, feeling feverish or shaking chills</Text>
        </View>
      </View>
    )
  }

  const question2 = () => {
    return (
      <View style={SelfScreeningStyles.question}>
        <Text style={SelfScreeningStyles.questionTitle}>Question 2</Text>
        <Text style={SelfScreeningStyles.questionCTA}>In the past fourteen (14) days, have you had close contact with someone who is confirmed as having COVID-19?</Text>
        <Text style={SelfScreeningStyles.question2desc}>A close contact is defined as a person who:</Text>
        <View style={SelfScreeningStyles.question1questions}>
          <Text style={{fontSize: 18}}>o Provided care for the individual, including healthcare workers, family members or other caregivers, or who had similar close physical contact without consistent and appropriate use of personal protective equipments OR</Text>
          <Text style={{fontSize: 18}}>o Who lived with or otherwise had close prolonged contact (within 6 feet/2 meters) with the person while they were infectious ORs</Text>
          <Text style={{fontSize: 18}}>o Had direct contact with infectious bodily fluids of the person (e.g., was coughed or sneezed on) while not wearing recommended personal protective equipment</Text>
        </View>
      </View>
    )
  }

  const answer = () => {
    return (
      <View style={SelfScreeningStyles.answer}>
        <View style={SelfScreeningStyles.answerCheckBox}>
          <CheckBox/>
          <Text style={{fontSize: 18}}>Yes</Text>
        </View>
        <View style={SelfScreeningStyles.answerCheckBox}>
          <CheckBox/>
          <Text style={{fontSize: 18}}>No</Text>
        </View>
      </View>
    )
  }

  return (  
    <View>
      <ScrollView>
        <Header label='Self-Screening Form' labelStyle={{}} back={true} navigation={navigation}/>
        {question1()}
        {answer()}
        <View style={SelfScreeningStyles.break}/>
        {question2()}
        {answer()}
      </ScrollView>
      <View style={SelfScreeningStyles.confirm}>
        <Button label={'Complete Form'} onPress={()=>{}} labelStyle={{}} buttonStyle={{}}/>
      </View>
    </View>
    )

  
}


export default SelfScreening