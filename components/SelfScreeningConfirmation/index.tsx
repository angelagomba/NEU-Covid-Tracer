import React from 'react'
import { Text, View } from 'react-native'
import Header from '../Header/index'
import SelfConfirmationStyles from './selfscreeningconfirmation-styles'
import Button from '../Button/index'
import { navigate } from '@react-navigation/routers/lib/typescript/src/CommonActions';

function SelfScreeningConfirmation({ navigation, route }) {


  return(
    <View>
      <Header label={'Self-Screening Form'} labelStyle={{fontFamily: 'roboto-light', fontSize: 24}} back={false} navigation={navigation}/>
      <View style={SelfConfirmationStyles.container}>
        <View style={SelfConfirmationStyles.contentContainer}>
          <Text style={SelfConfirmationStyles.doneText}>Done!</Text>
          <Text style={SelfConfirmationStyles.text}>Thank you for filling out the self-screening form.</Text>
          <Button label={'Return to Home'} buttonStyle={{borderWidth: 2, borderColor: '#F7F3F3'}} labelStyle={{}} onPress={() => {navigation.navigate('Home')}}/>
        </View> 
      </View>
    </View>
  )
}

export default SelfScreeningConfirmation