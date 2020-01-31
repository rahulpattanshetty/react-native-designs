import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';

class Horizontial extends Component {
  render() {
    return (
      <ScrollView horizontal={true} pagingEnabled={true} style={styles.container}>
        <View style={styles.outer}>
          <Text style={styles.innerText}>Welcome to my app</Text>
        </View>
        <View style={[styles.outer,styles.red]}>
          <Text style={styles.innerText}>Best quality videos</Text>
        </View>
        <View style={[styles.outer,styles.green]}>
        <Text style={styles.innerText}>Available online</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
  },
  outer:{
    backgroundColor: '#2980b9',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  innerText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold'
  },
  red: {
    backgroundColor: '#d35400'
  },
  green: {
    backgroundColor: '#2ecc71'
  }
});

export default Horizontial;
