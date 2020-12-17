import React from 'react'
import Header from '../Header/index'
import ResourcesStyles from './resources-styles'
import Button from '../Button/index'
import Arrow from '../Icons/arrow'
import Tabs from '../Tabs/index'
import * as WebBrowser from 'expo-web-browser'
import HomeStyles from 'components/Home/home-styles';
import SearchBar from '../SearchBar/index'

import { 
  ScrollView,
  Text,
  View 
} from 'react-native'


const demoResources = [
  {
    title: 'Positive Test Protocol',
    desc: 'Official protocol to follow in the case that you have recieved a positive COVID-19 test result.'
  },
  {
    title: 'Potential Contact Protocol',
    desc: 'Official protocol to follow in the case that you have recently been in contact with someone who has recieved a positive COVID-19 test result.'
  },
  {
    title: 'Traveling During the Pandemic',
    desc: 'CDC recommended best practices for safely traveling during the COVID-19 pandemic.',
  },
  {
    title: 'Masks 101',
    desc: 'Information about the different types of masks recommended by the CDC and theri effectiveness.'
  },
  {
    title: 'How to Form a Quarantine Pod',
    desc: 'Expert advice for how to safety have social connections during the pandemic.',
  },
  {
    title: 'How to Avoid Isolation During the Pandemic',
    desc: 'Expert advice for how to safely social distance and gather in your day-to-day.',
  }
]

function Resources({navigation, route}) {

const resource = (title: string, desc: string) => {
  return (
    <View style={ResourcesStyles.container}>
      <View style={ResourcesStyles.resourceContainer}>
        <View style={ResourcesStyles.text}>
          <Text style={ResourcesStyles.title}>{title}</Text>
          <Text style={ResourcesStyles.desc}>{desc}</Text>
        </View>
        <Arrow width={10} height={17}/>
      </View>
      <View style={ResourcesStyles.break}/>
    </View>
  )
}

const resourceEntries = () => ( demoResources.map((r) => resource(r.title, r.desc)))

  return (
    <View>
      <ScrollView style={[ResourcesStyles.resources]}>
      <Header label={'Resources'} labelStyle={{}}/>
      <SearchBar />
      {resourceEntries()}
      </ScrollView>
      <Tabs navigation={navigation} route={route}/>
    </View>
  )
}




export default Resources