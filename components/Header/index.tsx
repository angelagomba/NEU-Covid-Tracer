import React from 'react'
import HeaderStyles from './header-styles'
import Arrow from '../Icons/arrow'

import { 
  Text, 
  View,
  TouchableOpacity
} from 'react-native'

interface HeaderProps {
  label: string,
  labelStyle: object,
  backNavigation?: () => void,
  navigation?: any,
  back?: boolean
}

function Header({label, labelStyle, back, backNavigation, navigation}: HeaderProps) {

  return (
    <View style={HeaderStyles.container}>
      {back && <TouchableOpacity onPress={backNavigation ? backNavigation : navigation.goBack}>
        <Arrow width={'10'} height={'17'} fill={'white'} style={HeaderStyles.back} />
        </TouchableOpacity>}
      <Text style={[back ? HeaderStyles.backLabel : HeaderStyles.label, labelStyle]}>{label}</Text>
    </View>
  )
}

export default Header