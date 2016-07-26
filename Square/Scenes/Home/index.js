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
// !!!!important!!!! there is a height that has different action on sim and iphone 
// that detla 10 should work in different way..
const PaddingMidWare = React.createClass({
  render(){
    return (
      <View style={{height:ScreenHeight,paddingTop:64,backgroundColor:'#222222'}}>
        <TopSlider></TopSlider>
        <MidBar></MidBar>
        <Seg nav={_navRefObj} height={ScreenHeight-333-10}></Seg>
        <TabBar></TabBar>
      </View>
    );
  }
});
var _navRefObj = {nav:null};
const HomePage = React.createClass({
  render(){
    return(
      <NavigatorIOS
        ref={($)=>{_navRefObj.nav=$;console.log('running ref')}}
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
