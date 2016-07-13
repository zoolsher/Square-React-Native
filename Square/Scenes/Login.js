import React from 'react';

import {Image,StyleSheet,Text,View} from 'react-native';

import Dimensions from 'Dimensions';

import {BlurView} from 'react-native-blur';

const HomeScene = React.createClass({
  render(){
    return(
      <View style={style.container}>
        <Image style={style.img} source={require('./../Assets/LoginBackground.png')}>
        </Image>
        <BlurView blurType="dark" style={style.container}>
          <Text>Hi, I am a tiny menu item</Text>
        </BlurView>
      </View>
    );
  }
})

const style = StyleSheet.create({
  blur:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  text:{
    color:'white',
    backgroundColor:"transparent"
  },
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'transparent',
  },
  img:{
    position:'absolute',
    bottom:0,
    top:0,
    left:0,
    right:0,
    resizeMode:Image.resizeMode.cover,
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height
  }
});

export default HomeScene;