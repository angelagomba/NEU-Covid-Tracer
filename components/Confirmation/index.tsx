import React from 'react'
import Header from '../Header/index'
import ConfirmationStyles from './confirmation-styles'
import Button from '../Button/index'
import { Text, View } from 'react-native'

function Confirmation({ navigation, route }) {

  const goToPositiveTestProtocol = () => {
    navigation.navigate('PositiveTestProtocol')
  }

  return(
    <View>
      <Header label={'Positive Test Result Form'} labelStyle={{fontFamily: 'roboto-light', fontSize: 24}} back={false} navigation={navigation}/>
      <View style={ConfirmationStyles.container}>
        <View style={ConfirmationStyles.contentContainer}>
          <Text style={ConfirmationStyles.doneText}>Done!</Text>
          <Text style={ConfirmationStyles.text}>Thank you for filling out a positive test form. Please use the resource below for what to do next.</Text>
          <Button label={'Go to Positive Test Protocol'} buttonStyle={{borderWidth: 2, borderColor: '#F7F3F3'}} labelStyle={{}} onPress={goToPositiveTestProtocol}/>
        </View> 
      </View>
    </View>
  )
} 

export default Confirmation