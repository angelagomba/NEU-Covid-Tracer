import React from 'react'
import Header from '../Header/index'
import HomeStyles from './home-styles'
import Button from '../Button/index'
import * as Linking from 'expo-linking'

import { 
  Text,
  View 
} from 'react-native'


function Home({ navigation, route }) {

  const openTestScheduler = () => { 
    Linking.openURL('https://covid19-testing.northeastern.edu')
  }

  const buttons = ( 
    <View style={HomeStyles.buttonsContainer}>
      <View style={HomeStyles.buttonContainer}>
        <Button label={'Complete Self Screening'} onPress={navigation.navigate('SelfScreening')} buttonStyle={{}} labelStyle={{}}/> 
      </View>
      <View style={[HomeStyles.buttonContainer, {marginTop:10}]}>
        <Button label={'Report Positive Test Result'} onPress={navigation.navigate('PositiveTest')} buttonStyle={{}} labelStyle={{}}/>
      </View>
    </View>
  )

  const section = (title: string, info: React.ReactElement, linkTitle?: string, linkOnPress?: () => {}) => {
    return(
      <View style={{backgroundColor: 'white'}}>
        <View style={HomeStyles.sectionContainer}>
          <Text style={HomeStyles.sectionTitle}>{title}</Text>
        </View>
      </View>
    )
  }

  const schedule = (
    <View>

    </View>
  )

  return(
    <View>
      <Header label={'Home'} labelStyle={{}}/>
      {buttons}
      {section('NEU Test Scheduler', schedule, 'Go to NEU Test Scheduler', openTestScheduler)}
    </View>
  )
}

export default Home