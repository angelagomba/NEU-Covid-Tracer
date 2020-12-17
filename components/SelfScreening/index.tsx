import React from 'react'
import Header from '../Header/index'
import SelfScreeningStyles from './selfscreening-styles'
import Button from '../Button/index'
import * as WebBrowser from 'expo-web-browser'

import { 
  Text, 
  View,
  ScrollView 
} from 'react-native'

function SelfScreening({navigation, route}) {
  return (  
    <View>
      <ScrollView>
      <Header label='Self-Screening Form' labelStyle={{}} back={true} navigation={navigation}/>
      </ScrollView>
    </View>
    )

  
}


export default SelfScreening