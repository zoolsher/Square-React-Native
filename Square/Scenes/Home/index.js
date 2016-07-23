import React from 'react';
import {
  StyleSheet,
  NavigatorIOS,
  View,
  Text
}from 'react-native';
import TopSlider from './TopSlider';


const PaddingMidWare = React.createClass({
  render(){
    return (
      <View style={{paddingTop:64}}>
        <TopSlider>
        </TopSlider>
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