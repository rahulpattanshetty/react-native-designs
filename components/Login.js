import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions,TouchableWithoutFeedback, Keyboard } from 'react-native';
import Myform from './Myform';

class Login extends Component {

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image 
            style={styles.logo}
            source={require('./images/logo.png')}
          />
        </View>
        <View style={styles.myform}>
          <Myform />
        </View>
      </View>

      </TouchableWithoutFeedback>
      
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: Dimensions.get('window').width
  },
  logoContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dd9'
  },
  logo: {
    width: 100,
    height: 100
  },
  myform:{
    flex: 1,
    backgroundColor: '#dd9'
  },
  
});

export default Login;
