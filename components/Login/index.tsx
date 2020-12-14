import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import LoginStyles from './login-styles'
import Button from '../Button/index'

function Login({ navigation }) {
  const [isError, setIsError] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const textField = (hint: string, isUsername: boolean) => { 
  
    return(
      <TextInput style={LoginStyles.textField}
                 placeholder={hint}
                 placeholderTextColor={'#B8B2B2'}
                 onChangeText={text => isUsername ? setUsername(text) : setPassword(text)}
                 onFocus={() => setIsError(false)}
                 value={isUsername ? username : password}
                 secureTextEntry={!isUsername}/>
    )
  }

  const handleLogin = () => { 
    username !== '' && password !== '' ? navigation.navigate('Location') : setIsError(true)
  }

  const errorStyle = {opacity: isError ? 1: 0}

  return(
    <View style={LoginStyles.container}>
      <View style={LoginStyles.loginContainer}>
        <Text style={LoginStyles.title}>Northeastern University</Text>
        <Text style={[LoginStyles.error, errorStyle]}>Incorrect username or password.</Text>
        {textField('myNortheastern Username', true)}
        {textField('myNortheastern Password', false)}
        <View style={LoginStyles.buttonContainer}>
          <Button label={'Log In'} onPress={handleLogin} buttonStyle={{}} labelStyle={{}}/>
        </View>
        <View style={LoginStyles.linksContainer}>
          <Text style={LoginStyles.links}>Forgot Password?</Text>
          <Text style={LoginStyles.links}>Need Help?</Text>
        </View>
      </View>
    </View>
  )
}

export default Login