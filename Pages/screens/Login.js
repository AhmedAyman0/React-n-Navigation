import React, {useState} from 'react';
import {Button, TextInput, StyleSheet, Text, View} from 'react-native';
import NavigationService from '../../services/NavigationService';

const Login = () => {

  const [loginState, setloginState] = useState({
    email: '',
    password: '',
  });
  const LoginHandler = ()=>{
    console.log(loginState)
    const {email,password} = loginState;
    if(email.length>0 && password.length>0){
      NavigationService.navigate('App');

    }
  }
  const emailHandler = email => {
    setloginState({
      ...loginState,
      email,
    });
  };
  const passwordHandler = password => {
    setloginState({
      ...loginState,
      password,
    });
  };
  const navigateHandler = () => {
    NavigationService.navigate('Signup');
  };
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <View style={{margin: 10}}>
        <TextInput
          placeholder="Email"
          name="email"
          value={loginState.email}
          autoCapitalize="none"
          onChangeText={emailHandler}></TextInput>
        <TextInput
          placeholder="Password"
          name="password"
          secureTextEntry
          value={loginState.password}
          autoCapitalize="none"
          onChangeText={passwordHandler}></TextInput>
        <Button title="Signup" onPress={navigateHandler}></Button>
        <Button title="Login" onPress={LoginHandler}></Button>
      </View>
    </View>
  );
};
export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
