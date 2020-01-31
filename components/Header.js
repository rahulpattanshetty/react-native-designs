import React, { Component } from 'react';
import { View, Text,StyleSheet,Image } from 'react-native';



class Header extends Component {

  render() {
    return (
      <View style={styles.header}>
        <Image
          style = {styles.logo} 
          source={require('./images/chart.png')}
        />
        <Text style={styles.title}>LCG Shopping Cart</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    height: 80,
    backgroundColor: "#fff",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 4,
  },
  logo:{
    width: 70,
    height: 70,
  },
  title: {
    marginLeft: 2,
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold'

  }
});

export default Header;
