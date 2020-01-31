import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';

class HeroText extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}> HeroText </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{},
  headerText:{
    elevation: 1,
    alignSelf: 'center',
    fontSize: 25,
    color: '#292929',
    textAlign: 'center',
    backgroundColor: 'rgba(255,255,255,0.7)',
    padding: 10,
    fontWeight: 'bold',
  },
  
});

export default HeroText;
