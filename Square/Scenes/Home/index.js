import React from 'react';
import {
  StyleSheet,
  NavigatorIOS,
  View,
  Text
}from 'react-native';
import TopSlider from './TopSlider';
import MidBar from './MidBar';
import Seg from './segments';
import TabBar from './tabbar';

import Dimensions from 'Dimensions';
var ScreenHeight = Dimensions.get('window').height;
var ScreenWidth = Dimensions.get('window').width;

const PaddingMidWare = React.createClass({
  render(){
    return (
      <View style={{height:ScreenHeight,paddingTop:64,backgroundColor:'#222222'}}>
        <TopSlider></TopSlider>
        <MidBar></MidBar>
        <Seg height={ScreenHeight-333}></Seg>
        <TabBar></TabBar>
      </View>
    );
  }
});

const HomePage = React.createClass({
  render(){
    return(
      <NavigatorIOS
        ref="nav"
        barTintColor='black'
        tintColor='white'
        titleTextColor='white'
        initialRoute = {{
          title:'Home',
          component:PaddingMidWare,
        }}
        style={{
          flex:1
        }}
      />
    );
  }
});

export default HomePage;
