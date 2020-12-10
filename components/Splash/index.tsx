import React from 'react'
import { View, Text } from 'react-native'
import SplashStyles from './splash-style'
import Button from '../Button/index'

function Splash({ navigation }) {
  return (
    <View style={SplashStyles.container}>
      <Text style={SplashStyles.title}>
        {`Northeastern University\n COVID-19 Tracer`}
      </Text>
      <View style={SplashStyles.buttonContainer}>
        <Button label={'Log In'} onPress={ () => { navigation.navigate('Login')}} buttonStyle={{borderColor: '#F7F3F3', borderWidth: 2,}} labelStyle={{}} />
      </View>
    </View>
  );
}

export default Splash