import React from 'react';
import {View,Text,StyleSheet,Image,TouchableHighlight} from 'react-native';
import Dimensions from 'Dimensions';
const Default = React.createClass({
  render(){
    return(
    <View style={[styles.container,this.props.style]}>
      <Image style={styles.logo} source={require('./../../Assets/logo.png')}></Image>
      <Text style={[styles.title,{marginBottom:30,fontSize:25}]}>Square</Text>
      <Text style={[styles.title,{fontSize:20}]}>Slogon: Square others posts,{'\n'}improve your performance in architecture</Text>
      <View style={{marginTop:10,flexDirection:'row'}}>
        <TouchableHighlight activeOpacity={1} underlayColor={'transparent'} style={{flex:1,padding:20}} onPress={this.props.goToLogin}>
          <Text style={{textAlign:'center',color:'white',fontSize:20}}>登录</Text>
        </TouchableHighlight>
        <TouchableHighlight activeOpacity={1} underlayColor={'transparent'} style={{flex:1,padding:20}} onPress={this.props.goToRegister}>
          <Text style={{textAlign:'center',color:'white',fontSize:20}}>注册</Text>
        </TouchableHighlight>
      </View>
    </View>
      );
  }
});

var imageWidth = 100;
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  logo:{
    resizeMode:Image.resizeMode.contain,
    width:imageWidth,
    height:imageWidth
  },
  title:{
    color:'white',
    fontFamily:'DINCond-Regular',
    textAlign:'center'
  },
})

export default Default;


