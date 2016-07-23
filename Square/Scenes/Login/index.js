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
      left:0,
      showCom:'default'
    }
  },
  goToDefault(){
    LayoutAnimation.configureNext(anim);
    this.setState({showCom:'default'})
  },
  goToLogin(){
    LayoutAnimation.configureNext(anim);
    this.setState({showCom:'login'})
  },
  goToRegister(){
    LayoutAnimation.configureNext(anim);
    this.setState({showCom:'register'})
  },
  render(){
    var cur;
    switch(this.state.showCom){
      case "default":
        cur = <Default style={style.default} {...this.props} goToLogin={this.goToLogin} goToRegister={this.goToRegister}/>;
        break;
      case "login":
        cur = <Login style={style.default} {...this.props} goToDefault={this.goToDefault} goToRegister={this.goToRegister}/>;
        break;
      case "register":
        cur = <Register style={style.default} {...this.props} goToLogin={this.goToLogin} goToDefault={this.goToDefault}/>;
        break;
    }
    return(
      <View style={style.container}>
        <Image style={style.img} source={require('image!LoginBackground')}>
          <View style={[style.aniamtedContainer,{
                left:this.state.left
            }]}
            >
            {cur}
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
    width:Dimensions.get('window').width,
    flexDirection:'row',
  }
});

export default HomeScene;