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


const demoResources = [{
  title: 'yum yum',
  desc: 'i like chocolate'

}]

function Resources({navigation, route}) {

const resource = (title: string, desc: string) => {
  return (
    <View style={ResourcesStyles.resourceContainer}>
      <View style={ResourcesStyles.text}>
        <Text style={ResourcesStyles.title}>{title}</Text>
        <Text style={ResourcesStyles.desc}>{desc}</Text>
      </View>
      <Arrow width={'10'} height={'17'}/>
    </View>
  )
}

const resourceEntries = () => ( demoResources.map((r) => resource(r.title, r.desc)))

  return (
    <View>
      <Header label={'Resources'} labelStyle={{}}/>
      <SearchBar navigation={navigation} route={route} />
      <ScrollView style={ResourcesStyles.resources}>
      {resourceEntries()}
      </ScrollView>
      <Tabs navigation={navigation} route={route} />
    </View>
  )
}




export default Resources