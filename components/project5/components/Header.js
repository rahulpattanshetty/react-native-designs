import React, { Component } from 'react';
import { View, Text,StyleSheet, ImageBackground, Image } from 'react-native';

class Header extends Component {
  render() {
    return (
      <ImageBackground 
        style={styles.headerbg}
        source= {require('../../images/background.jpeg')}>
        
        <View style={styles.headercontainer}>
          <View style={styles.profilecontainer}>
            <Image 
              style={styles.mypic}
              source={require('../../images/camera.jpeg')}
            />
          </View>
          <View style={{}}>
            <Text style={styles.name}>Rahul Pattanshetty</Text>
            <Text style={styles.liner}>Photographer</Text>
          </View>
        </View>
        
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  headerbg:{
    flexDirection: 'row',
    width: null,
    alignSelf: 'stretch',
  },
  headercontainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  profilecontainer:{
    width: 180,
    height: 180,


  },
  mypic:{
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 90,
    borderWidth: 3,
    borderColor: "#fff"
  },
  name: {
    marginTop: 16,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  liner:{
    color: '#fff',
    fontSize: 15,
    fontStyle: 'italic',
    marginTop: 6,
    textAlign: 'center'
  },

});

export default Header;
