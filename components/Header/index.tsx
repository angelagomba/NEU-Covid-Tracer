import React from 'react'
import HeaderStyles from './header-styles'

import { 
  Text, 
  View 
} from 'react-native'

function Header({label, labelStyle}) {

  return (
    <View style={HeaderStyles.container}>
      <Text style={[HeaderStyles.label, labelStyle]}>{label}</Text>
    </View>
  )
}

export default Header