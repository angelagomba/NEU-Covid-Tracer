import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import LocationStyles from './location-styles'
import * as Permissions from 'expo-permissions'
import Location from 'expo-location'

const message = `Location tracking is required\n so that we may best trace\n your contact in the case of a\n positive test result.\n\nPlease tap to confirm that\n you’ve read this message.`

function EnableLocation({ navigation, router}) {

  const getLocationAsync = async () => {
    // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
    const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
    navigation.navigate('Home')
  }

  return(
    <TouchableOpacity style={LocationStyles.container} onPress={getLocationAsync}>
      <Text style={LocationStyles.text}>{message}</Text>
    </TouchableOpacity>
  )
}

export default EnableLocation