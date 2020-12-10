import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import LocationStyles from './location-styles';

const message = `Location tracking is required\n so that we may best trace\n your contact in the case of a\n positive test result.\n\nPlease tap to confirm that\n you’ve read this message.`

function Location({ navigation, router}) {

  return(
    <TouchableOpacity style={LocationStyles.container} onPress={() => {navigation.navigate('')}}>
      <Text style={LocationStyles.text}>{message}</Text>
    </TouchableOpacity>
  )
}

export default Location