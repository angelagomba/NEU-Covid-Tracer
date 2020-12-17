import React from 'react'
import SearchBarStyles from './searchBar-styles'
import Search from '../Icons/search'
import { Text, View } from 'react-native'

function SearchBar() {

  return(
    <View style={SearchBarStyles.container}>
      <View style={SearchBarStyles.searchContainer}>
        <View style={SearchBarStyles.textAndIcon}>
          <Text style={SearchBarStyles.text}>Search by title, keyword...</Text>
          <Search style={SearchBarStyles.icon} />
        </View>
      </View>
    </View>
  )
}

export default SearchBar