import React from 'react'
import TabStyles from './tabs-styles'
import Home from '../Icons/home'
import Resources from '../Icons/resources'
import News from '../Icons/news'
import Profile from '../Icons/profile'
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native'

function Tabs({navigation, route}) {

  const navigateToHome = () => {
    navigation.navigate('Home')
  }

  const homeIcon = (
    <Home fill={'#F7F3F3'} width={29} height={29}/>
  )

  const resourcesIcon = (
    <Resources fill={'#F7F3F3'} width={29} height={29}/>
  )

  const newsIcon = (
    <News fill={'#F7F3F3'} width={29} height={29}/>
  )

  const profileIcon = (
    <Profile fill={'#F7F3F3'} width={29} height={29}/>
  )

  const tabIcon = (icon: React.ReactElement, title: string, isViewing: boolean) => {
    return(
      <TouchableOpacity style={[TabStyles.indicator, {backgroundColor: isViewing ? '#9C2C2C' : '#C94040'}]} onPress={navigateToHome}>
        {icon}
        <Text style={TabStyles.text}>{title}</Text>
      </TouchableOpacity>
    )
  }

  return(
    <View style={TabStyles.container}>
      {tabIcon(homeIcon, 'Home', true)}
      {tabIcon(resourcesIcon, 'Resources', false)}
      {tabIcon(newsIcon, 'News', false)}
      {tabIcon(profileIcon, 'Profile', false)}
    </View>
  )
}

export default Tabs