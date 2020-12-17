import React, { useState } from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Splash from './components/Splash/index'
import Home from './components/Home/index'
import Login from './components/Login/index'
import Resources from './components/Resources/index'
import EnableLocation from './components/Location/index'
import SelfScreening from './components/SelfScreening/index'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'

const fetchFonts = () => {
  return Font.loadAsync({
    'roboto-light': require('./assets/fonts/Roboto-Light.ttf'),
    'roboto-medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf')
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
        <Stack.Screen name='Login'
                      component={Login}/>
        <Stack.Screen name='Location'
                      component={EnableLocation}/>
        <Stack.Screen name='Home'
                      component={Home}/>
        <Stack.Screen name='Resources'
                      component={Resources}/>
        <Stack.Screen name='SelfScreening'
                      component={SelfScreening}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
