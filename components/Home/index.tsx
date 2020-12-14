import React from 'react'
import Header from '../Header/index'
import HomeStyles from './home-styles'
import Button from '../Button/index'
import Tabs from '../Tabs/index'
import * as WebBrowser from 'expo-web-browser'

import { 
  ScrollView,
  Text,
  View 
} from 'react-native'


function Home({ navigation, route }) {

  const openTestScheduler = () => { 
    WebBrowser.openBrowserAsync('https://covid19-testing.northeastern.edu')
  }

  const buttons = ( 
    <View style={HomeStyles.buttonsContainer}>
      <View style={HomeStyles.buttonContainer}>
        <Button label={'Complete Self Screening'} onPress={navigation.navigate('SelfScreening')} buttonStyle={{}} labelStyle={{}}/> 
      </View>
      <View style={[HomeStyles.buttonContainer, {marginTop:10}]}>
        <Button label={'Report Positive Test Result'} onPress={navigation.navigate('PositiveTest')} buttonStyle={{}} labelStyle={{}}/>
      </View>
    </View>
  )

  const section = (title: string, info: React.ReactElement, showDivider: boolean, linkTitle?: string, linkOnPress?: () => void) => {
    return(
      <View style={{backgroundColor: 'white'}}>
        <View style={HomeStyles.sectionContainer}>
          <Text style={HomeStyles.sectionTitle}>{title}</Text>
          {info}
          {linkTitle && 
            <Text style={HomeStyles.sectionLink} onPress={linkOnPress}>{linkTitle}</Text>
          }
          {showDivider &&
            <View style={HomeStyles.divider} />
          }
        </View>
      </View>
    )
  }

  const schedule = (
    <View style={HomeStyles.scheduleContainer}>
      <View style={HomeStyles.scheduleInfo}>
        <Text style={HomeStyles.infoTitle}>Next scheduled COVID-19 test</Text>
        <Text style={HomeStyles.infoText}>Oct. 18, 2020</Text>
      </View>
    </View>
  )

  const dashboard = (
    <View style={HomeStyles.dashboardContainer}>
      <View style={HomeStyles.dashboardInfo}>
        <View style={HomeStyles.dashboardTextContainer}>
          <Text style={HomeStyles.infoTitle}>Positive Cases</Text>
          <Text style={HomeStyles.infoText}>34</Text>
        </View>
        <View style={HomeStyles.dashboardTextContainer}>
          <Text style={HomeStyles.infoTitle}>Total Tested</Text>
          <Text style={HomeStyles.infoText}>104929</Text>
        </View>
      </View>
    </View>
  )

  return(
    <View>
      <ScrollView style={{marginBottom: 94,}}>
        <Header label={'Home'} labelStyle={{}}/>
        {buttons}
        {section('NEU Test Scheduler', schedule, true, 'Go to NEU Test Scheduler', openTestScheduler)}
        {section('NEU COVID-19 Dashboard', dashboard, true, 'View More', () => {})}
        {section('Latest News', dashboard, false, 'View More', navigation.navigate('News'))}
      </ScrollView>
      <Tabs navigation={navigation} route={route} />
    </View>
  )
}

export default Home