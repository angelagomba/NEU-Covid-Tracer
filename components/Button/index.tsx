import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import ButtonStyles from './button-styles'

function Button({label, onPress, buttonStyle, labelStyle}) {

  return(
    <TouchableOpacity onPress={onPress} style={[ButtonStyles.container, buttonStyle]}>
      <Text style={[ButtonStyles.label, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  )
}

export default Button