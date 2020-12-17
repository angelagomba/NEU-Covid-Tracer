import React from 'react'
import { Text, View } from 'react-native'
import Header from '../Header/index'
import PositiveStyles from './positive-styles'

function PositiveTestProtocol({ navigation, route }) {

  const goToResources = () => {
    navigation.navigate('Resources')
  }

  return(
    <View>
      <Header label={'Positive Test Protocol'} back={true} labelStyle={{}} backNavigation={goToResources} navigation={navigation}/>
      <View style={PositiveStyles.explanationContainer}>
        <Text style={PositiveStyles.explanationText}>Official protocol to follow in the case that you have received a positive COVID-19 test result.</Text>
      </View> 
    </View>
  )
}

export default PositiveTestProtocol