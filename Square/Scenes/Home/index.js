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

const PaddingMidWare = React.createClass({
  render(){
    return (
      <View style={{paddingTop:64,backgroundColor:'#222222'}}>
        <TopSlider>
        </TopSlider>
        <MidBar></MidBar>
        <Seg></Seg>
      </View>
    );
  }
});

const HomePage = React.createClass({
  render(){
    return(
      <NavigatorIOS
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
