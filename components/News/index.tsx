import React, { useState } from 'react'
import NewsStyles from './news-styles'
import Header from '../Header/index'
import SearchBar from '../SearchBar'
import Star from '../Icons/star'
import Tabs from '../Tabs'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'

const demoNews = [
  // { 
  //   date: 'November 8, 2020',
  //   title: 'Early tests of Pfizer COVID-19 vaccine show 90% effectiveness',
  //   desc: `Emotions are high as interim analysis of drugmaker Pfizer's COVID-19 vaccine shows positive outlook.`
  // },
  {
    date: 'November 8, 2020',
    title: 'Cases in Massachusetts Rise, 20 new deaths reported',
    desc: 'The Massachusetts Department of Public Health reported 1,809 new confirmed coronavirus cases and...',
  },
  // {
  //   date: 'November 6, 2020',
  //   title: 'Church in Fitchburg now tied to more than 200 COVID-19',
  //   desc: 'More than 200 confirmed coronavirus infections have been traced to Crossroads Community Church in...',
  // },
  // {
  //   date: 'November 5, 2020',
  //   title: 'Rhode Island issues stay-at-home advisory as COVID-19',
  //   desc: 'The state reported 566 new COVID-19 cases, making the third time in a week that more than 500 cases have...',
  // },
  // {
  //   date: 'November 5, 2020',
  //   title: 'Baker instructs schools to reopen classrooms',
  //   desc: 'The state was upgrading its metrics for determining COVID-19 transmission risks, with an eye toward...',
  // },
  // {
  //   date: 'November 4, 2020',
  //   title: 'With attention on the election, COVID-19 numbers continue to surge',
  //   desc: 'A man was given a COVID-19 test this week at a mobile testing site on Blue Hill Avenue.Suzanne Kreiter/Globe...',
  // },
  // {
  //   date: 'November 4, 2020',
  //   title: 'President Elect Biden unveils Coronavirus task force',
  //   desc: `Joe Biden's transition team has announced the names of the public health experts to make up the new...`
  // }
]

const demoFavorites = [
  {
    date: 'November 8, 2020',
    title: 'Cases in Massachusetts Rise, 20 new deaths reported',
    desc: 'The Massachusetts Department of Public Health reported 1,809 new confirmed coronavirus cases and...',
  },
]

function News({ navigation, route }) {

  const [currentTab, setCurrentTab] = useState('All')
  const [favorites, setFavorites] = useState([])

  const sections = (
    <View style={NewsStyles.sectionContainer}>
      <TouchableOpacity style={NewsStyles.tabContainer} onPress={() => setCurrentTab('All')}>
        <Text style={[NewsStyles.sectionText, {fontFamily: currentTab === 'All' ? 'roboto-bold' : 'roboto-regular'}]}>All</Text>
        {currentTab === 'All' && 
          <View style={NewsStyles.indicator} />}
      </TouchableOpacity>
      <TouchableOpacity style={NewsStyles.tabContainer} onPress={() => setCurrentTab('Favorites')}>
        <Text style={[NewsStyles.sectionText, {fontFamily: currentTab === 'Favorites' ? 'roboto-bold' : 'roboto-regular'}]}>Favorites</Text>
        {currentTab === 'Favorites' && 
          <View style={NewsStyles.indicator} />}
      </TouchableOpacity>
    </View>
  )

  const news = (date: string, title: string, desc: string) => {
    return (
      <View style={NewsStyles.newsContainer}>
        <View style={NewsStyles.contentContainer}>
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

  const all = () => ( demoNews.map((n) => news(n.date, n.title, n.desc)))

  const favorited = () => ( demoFavorites.map((n) => news(n.date, n.title, n.desc)))

  const getArticles = () => {
    if (currentTab === 'All') {
      return all()
    } else {
      return favorited()
    }
  }

  const loadMore = (
    <View style={NewsStyles.loadMore}>
      <Text style={NewsStyles.loadMoreText}>Load More</Text>
    </View>
  )

  return(
    <View style={NewsStyles.container}>
      <Header label={'News'} labelStyle={{}}/>
      <SearchBar />
      {sections}
      <ScrollView style={NewsStyles.scrollContainer}>
        {getArticles()}
        {currentTab === 'All' && 
          loadMore}
      </ScrollView>
      <Tabs navigation={navigation} route={route}/>
    </View>
  )
}

export default News