import React, { Component } from 'react';
import { View, Text,StyleSheet, ScrollView,Image, Dimensions } from 'react-native';

class Body extends Component {
  render() {
    return (
      <ScrollView pagingEnabled={true} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.bigview}>
          <View style={styles.smallview}>
            <Image 
              style={styles.myimg}
              source={require('.././../images/board.jpeg')}
            />
          </View>
          <View style={styles.smallview}>
            <Image 
              style={styles.myimg}
              source={require('.././../images/book.jpeg')}
            />
          </View>
          <View style={styles.smallview}>
            <Image 
              style={styles.myimg}
              source={require('.././../images/drive.jpeg')}
            />
          </View>
          <View style={styles.smallview}>
            <Image 
              style={styles.myimg}
              source={require('.././../images/lap.jpeg')}
            />
          </View>
          <View style={styles.smallview}>
            <Image 
              style={styles.myimg}
              source={require('.././../images/board.jpeg')}
            />
          </View>
          <View style={styles.smallview}>
            <Image 
              style={styles.myimg}
              source={require('.././../images/book.jpeg')}
            />
          </View>
          <View style={styles.smallview}>
            <Image 
              style={styles.myimg}
              source={require('.././../images/drive.jpeg')}
            />
          </View>
          <View style={styles.smallview}>
            <Image 
              style={styles.myimg}
              source={require('.././../images/lap.jpeg')}
            />
          </View>
          
        </View>

      </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  bigview:{
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  smallview: {
    margin: 2,
    height: 100,
    width: (Dimensions.get('window').width / 2) - 4
  },
  myimg: {
    flex: 1,
    width: null,
    alignSelf: 'stretch'
  }
});

export default Body;
