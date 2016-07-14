import React from 'react';

import {Image,StyleSheet,Text,View,Animated,LayoutAnimation,TouchableHighlight} from 'react-native';

import Dimensions from 'Dimensions';

import Default from './Default';
import Login from './Login';
import Register from './Register';

var BlurView = require('react-native-blur').BlurView;

const HomeScene = React.createClass({
  getInitialState(){
    return{
      left:0
    }
  },
  goToDefault(){
    LayoutAnimation.configureNext(anim);
    this.setState({left:0})
  },
  goToLogin(){
    LayoutAnimation.configureNext(anim);
    this.setState({left:-Dimensions.get('window').width})
  },
  goToRegister(){
    LayoutAnimation.configureNext(anim);
    this.setState({left:-Dimensions.get('window').width*2})
  },
  render(){
    return(
      <View style={style.container}>
        <Image style={style.img} source={require('image!LoginBackground')}>
          <View style={[style.aniamtedContainer,{
                left:this.state.left
            }]}
            >
            <Default style={style.default} goToLogin={this.goToLogin} goToRegister={this.goToRegister}/>
            <Login style={style.default} goToDefault={this.goToDefault} goToRegister={this.goToRegister}/>
            <Register style={style.default} goToLogin={this.goToLogin} goToDefault={this.goToDefault}/>
          </View>
        </Image>
      </View>
    );
  },
  componentDidMount(){

  }
})

var anim = {
  duration:500,
  create:{
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
  update:{
    type:LayoutAnimation.Types.easeInEaseOut
  }
}


const style = StyleSheet.create({
  blur:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'transparent',
  },
  img:{
    flex:1,
    resizeMode:Image.resizeMode.contain,
    width:Dimensions.get('window').width
  },
  default:{
    flex:1
  },
  aniamtedContainer:{
    position:'absolute',
    top:0,
    bottom:0,
    width:Dimensions.get('window').width*3,
    flexDirection:'row',
  }
});

export default HomeScene;