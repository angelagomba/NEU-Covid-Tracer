import React from 'react'
import Header from '../Header/index'
import ProfileStyles from './profile-styles'
import RedProfile from '../Icons/redProfile'
import Tabs from '../Tabs'
import { Text, View } from 'react-native'

const demoCards = [
  {
    title: 'Husky Card Balance',
    desc: '$12.55'
  },
  {
    title: 'Fall Dining Dollars',
    desc: '$22.70'
  },
  {
    title: 'Fall 20 Balance',
    desc: '13 Meals'
  },
  {
    title: 'Laundry Bucks',
    desc: '$3.00'
  },
]

function Profile({navigation, route}) {

  const personalInfo = (
    <View style={ProfileStyles.infoContainer}>
      <RedProfile />
      <View style={ProfileStyles.studentInfoContainer}>
        <Text style={ProfileStyles.name}>Johnny Appleseed</Text>
        <View style={ProfileStyles.idContainer}>
          <Text style={ProfileStyles.boldText}>NUID</Text>
          <Text style={ProfileStyles.id}>01234567</Text>
        </View>
        <Text style={ProfileStyles.boldText}>Willis Hall</Text>
      </View>
    </View>
  )

  // const card = (title: string, desc: string, hasMargin: boolean) => {
  //   return(
  //     <View style={[ProfileStyles.cardContainer, {marginRight: hasMargin ? 15 : 0}]}>
  //       <Text style={ProfileStyles.boldText}>{title}</Text>
  //       <Text style={ProfileStyles.id}>{desc}</Text>
  //     </View>
  //   )
  // }


  // const cards = (
  //   <View style={ProfileStyles.cardsContainer}>
  //     <View style={ProfileStyles.cardRow}>
  //       {card(demoCards[0].title, demoCards[0].desc, true)}
  //       {card(demoCards[1].title, demoCards[1].desc, false)}
  //     </View>
  //     <View style={ProfileStyles.cardRow}>
  //       {card(demoCards[2].title, demoCards[2].desc, true)}
  //       {card(demoCards[3].title, demoCards[3].desc, false)}
  //     </View>
  //   </View>
  // )

  return(
    <View style={ProfileStyles.container}>
      <Header label={'Profile'} back={false} labelStyle={{}} />
      <View style={ProfileStyles.contentContainer}>
        {personalInfo}
        {/* {cards} */}
      </View>
      <Tabs navigation={navigation} route={route}/>
    </View>
  )
}

export default Profile