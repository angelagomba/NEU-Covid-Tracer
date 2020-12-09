import React from 'react'
import { View, Text, Button } from 'react-native'
// TODO: Fix imports
import SplashStyles from './splash-style'

function Splash({ navigation }) {
  return (
    <View style={SplashStyles.container}>
      <Text style={SplashStyles.title}>
        {`Northeastern University\n COVID-19 Tracer`}
      </Text>
      <View style={SplashStyles.button}>
        <Button title={'Log In'} onPress={() => { navigation.navigate('Home') }} color={'#9C2C2C'}/>
      </View>
    </View>
  );
}

export default Splash