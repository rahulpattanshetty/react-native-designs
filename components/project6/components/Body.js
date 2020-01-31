import React, { Component } from 'react';
import { View, Text,StyleSheet,Image } from 'react-native';

class Body extends Component {
  render() {
    let video = this.props.video
    let thumbnails = this.props.thumbnails
    let title = this.props.title
    return (
      <View style={styles.container}>
        <Image 
          source={{uri: thumbnails.medium}}
          style={{height: 200,borderRadius: 5}}
        />
        <View style={styles.textcontainer}>
        <Image 
          source={{uri: thumbnails.default}}
          style={styles.profilepic}
        />
          <View style={styles.innercontainer}>
            <Text style={styles.videotitle}>{title}</Text>
            <Text style={styles.videostats}>What is the next plan?</Text>
          </View>
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 15,
    backgroundColor: '#000'
  },
  textcontainer:{
    marginLeft: 10,
    marginRight: 5,
    flexDirection: "row",
    paddingTop: 15,
  },
  videotitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 4,
  },
  profilepic:{
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff'
  },
  innercontainer:{
    marginLeft: 10,
    padding: 5
  },
  videostats:{
    fontSize: 12,
    color: '#fff',
    marginTop: 5
  }
});

export default Body;
