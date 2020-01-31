import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import HeroText from './HeroText';

class HeroImage extends Component {
  render() {
    return (
      
        <ImageBackground 
          source={require('./images/table.jpeg')}
          style={styles.hero}>
            <HeroText />
          </ImageBackground>
      
    );
  }
}

const styles = StyleSheet.create({
  hero:{
    height: 300,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default HeroImage;
