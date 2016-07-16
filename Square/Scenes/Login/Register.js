import React from 'react';
import {View,Text,StyleSheet,Image,TextInput,TouchableHighlight} from 'react-native';
import {BlurView} from 'react-native-blur';
import Dimensions from 'Dimensions';
const Register = React.createClass({
  render(){
    return(
      <BlurView blurType="light" style={style.container}>
        <Text style={[style.title,{marginBottom:30,fontSize:20}]}>注册</Text>
        <View style={[style.line]}>
          <TouchableHighlight style={{flex:1}} activeOpacity={1} underlayColor={'transparent'} onPress={this.props.goToDefault}>
            <Text style={{textAlign:'left',color:'white'}}>&lang; 返回</Text>
          </TouchableHighlight>
          <TouchableHighlight style={{flex:1}} activeOpacity={1} underlayColor={'transparent'} >
            <Text style={{textAlign:'right',color:'white'}}>下一步 &rang;</Text>
          </TouchableHighlight>
        </View>
        <View style={style.line}>
          <Text style={[style.normalText,{textAlign:'left'}]}>
            用户名
          </Text>
          <TextInput
            style={[style.normalText,{height: 40,flex:2}]}
            onChangeText={(text) => this.setState({text})}
            />  
        </View>
        <View style={style.hr}></View>
        <View style={style.line}>
          <Text style={[style.normalText,{textAlign:'left'}]}>
            邮箱
          </Text>
          <TextInput
            style={[style.normalText,{height: 40,flex:2}]}
            onChangeText={(text) => this.setState({text})}
            />  
        </View>
        <View style={style.hr}></View>
        <View style={style.line}>
          <Text style={[style.normalText,{textAlign:'left'}]}>
            密码
          </Text>
          <TextInput
            style={[style.normalText,{height: 40,flex:2}]}
            onChangeText={(text) => this.setState({text})}
            password={true}
            />  
        </View>
        <View style={style.hr}></View>
      </BlurView>
    )
  }
});

var imageWidth = 100;

var style = StyleSheet.create({
  normalText:{
    flex:1,textAlign:'center',color:'white'
  },
  line:{
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    width:Dimensions.get('window').width*0.75,
    marginTop:10
  },
  hr:{
    width:Dimensions.get('window').width*0.75,
    borderColor:'white',
    borderWidth:0.5
  },
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

export default Register;