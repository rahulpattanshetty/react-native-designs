import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { Button } from 'native-base';

class Sidebar extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}> Sidebar </Text>
        <Image 
          style={styles.topImage}
          source={require('../../images/seat.jpeg')}
        />
        <Button block light style={styles.button}><Text> Light </Text></Button>
        <Button block primary style={styles.button}><Text> Primary </Text></Button>
        <Button block success style={styles.button}><Text> Success </Text></Button>
        <Button block info style={styles.button}><Text> Info </Text></Button>
        <Button block warning style={styles.button}><Text> Warning </Text></Button>
        <Button block danger style={styles.button}><Text> Danger </Text></Button>
        <Button block dark style={styles.button}><Text> Dark </Text></Button>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    marginRight: 5
  },
  text:{
    color: '#fff',
    marginTop: 50,
    marginLeft: 15
  },
  topImage:{
    width: '100%',
    height: 100,
    margin: 10,
    opacity: 0.7,
  },
  button: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20
  }
});

export default Sidebar;
