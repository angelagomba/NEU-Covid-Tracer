import React, { useState } from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Splash from './components/Splash/index'
import Home from './components/Home/index'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'

const fetchFonts = () => {
  return Font.loadAsync({
    'roboto-light': require('./assets/fonts/Roboto-Light.ttf')
  });
};

const Stack = createStackNavigator();

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false)

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={console.warn}
      />
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Splash'
                      component={Splash}/>
        <Stack.Screen name='Home'
                      component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
