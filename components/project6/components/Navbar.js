import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Navbar extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Image 
            style={styles.logo}
            source={require('../../images/youtube.png')}
          />
          <View style={styles.moveright}> 
            <TouchableOpacity>
              <Icon name="search" size={30} style={styles.icons}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="account-circle" size={27} style={styles.icons} />  
            </TouchableOpacity>
            
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    
  },
  navbar: {
    height: 60,
    backgroundColor: "#fff",
    elevation: 3,
    paddingHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
  },
  logo: {
    width: 160,
    height: 80,
  },
  moveright:{
    flexDirection:"row",   
  },
  icons:{
    padding: 5,
    marginLeft: 10,
  },

});

export default Navbar;
