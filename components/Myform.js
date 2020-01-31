import React, { Component } from 'react';
import { View, Text,TextInput,TouchableOpacity, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';

class Myform extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <TextInput 
            placeholder="Username"
            style={styles.input}
          />
          <TextInput 
            secureTextEntry={true}
            placeholder="Password"
            style={styles.input}
          />
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 20
  },
  input:{
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.8)',
    paddingLeft: 10,
    marginBottom: 15,
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
});

export default Myform;
