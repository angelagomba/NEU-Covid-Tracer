import React from 'react'
import Header from '../Header/index'
import HomeStyles from './home-styles'
import Button from '../Button/index'
import Tabs from '../Tabs/index'
import * as WebBrowser from 'expo-web-browser'
import NewsStyles from '../News/news-styles'
import Star from '../Icons/star'

import { 
  ScrollView,
  Text,
  View 
} from 'react-native'

const demoNews = {
  date: 'November 8, 2020',
  title: 'Cases in Massachusetts Rise, 20 new deaths reported',
  desc: 'The Massachusetts Department of Public Health reported 1,809 new confirmed coronavirus cases and...',
}

function Home({ navigation, route }) {

  const openTestScheduler = () => { 
    WebBrowser.openBrowserAsync('https://covid19-testing.northeastern.edu')
  }

  const buttons = ( 
    <View style={HomeStyles.buttonsContainer}>
      <View style={HomeStyles.buttonContainer}>
        <Button label={'Complete Self Screening'} onPress={() => navigation.navigate('SelfScreening')} buttonStyle={{}} labelStyle={{}}/> 
      </View>
      <View style={[HomeStyles.buttonContainer, {marginTop:10}]}>
        <Button label={'Report Positive Test Result'} onPress={() => navigation.navigate('PositiveTest')} buttonStyle={{}} labelStyle={{}}/>
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

  const news = (date: string, title: string, desc: string) => {
    return (
      <View style={HomeStyles.newsContainer}>
        <View style={HomeStyles.contentContainer}>
          <Text style={NewsStyles.dateText}>{date}</Text>
          <Text style={NewsStyles.titleText}>{title}</Text>
          <Text style={NewsStyles.descText}>{desc}</Text>
          <View style={NewsStyles.star}>
            <Star />
          </View>
        </View>
        <View style={NewsStyles.break}/>
      </View>
    )
  }

  return(
    <View style={HomeStyles.container}>
      <Header label={'Home'} labelStyle={{}}/>
      <ScrollView style={[HomeStyles.container, {marginBottom: 94,}]}>
        {buttons}
        {section('NEU Test Scheduler', schedule, true, 'Go to NEU Test Scheduler', openTestScheduler)}
        {section('NEU COVID-19 Dashboard', dashboard, true, 'View More', () => {})}
        {section('Latest News', news(demoNews.date, demoNews.title, demoNews.desc), false, 'View More', navigation.navigate('News'))}
      </ScrollView>
      <Tabs navigation={navigation} route={route} />
    </View>
  )
}

export default Home