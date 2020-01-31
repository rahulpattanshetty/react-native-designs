/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

import Superman from './components/superman';
import Red from './components/Red';
import Blue from './components/Blue';
import Green from './components/Green';
import Horizontial from './components/Horizontial';
import Login from './components/Login';
// import Header from './components/Header';
import HeroImage from './components/HeroImage';
// import Body from './components/Body';
// import Header from './components/project5/components/Header'
import Mid from './components/project5/components/Mid';
// import Body from './components/project6/components/Body';
import Navbar from './components/project6/components/Navbar';
import Tabbar from './components/project6/components/Tabbar';

//import data from './components/project6/components/search.json';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Drawer } from 'native-base';
import CardImage from './components/project7/components/CardImage';
import FooterBadge from './components/project7/components/FooterBadge';
import SideBar from './components/project7/components/Sidebar';
// import { Header } from 'native-base';

closeDrawer = () => 
  {
    this.drawer._root.close()
  };
  openDrawer = () => { this.drawer._root.open() };

const App = () => {
  
  return (
    <Drawer 
      ref={(ref) => { this.drawer = ref; }} 
      content={<SideBar navigator={this.navigator} />} onClose={() => this.closeDrawer()} >
        <Container>
          <Header>
            <Left>
              <Button transparent onPress={() => this.openDrawer()}>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title>SideBar</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon name='camera' />
              </Button>
            </Right>
          </Header>

          <FlatList 
            data={[{key: 'a'},{key: 'b'},{key: 'c'}]}
            renderItem={({item}) => <CardImage />}
          />

          <FooterBadge />
        </Container>
    </Drawer>
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center'
  },
});

export default App;
