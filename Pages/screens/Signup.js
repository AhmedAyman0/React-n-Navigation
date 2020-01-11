import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'
import NavigationService from '../../services/NavigationService'
export default function Signup() {
  const goToLogin = ()=>{
    NavigationService.navigate('Login');
  }
  return (
    <View style={styles.container}>
      <Text>Signup</Text>
      <Button title="Login" onPress={goToLogin}></Button>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})