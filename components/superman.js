import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class superman extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text> I'm superman </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
})
