import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Dimensions from 'Dimensions';
import Comments from './comments'

const Notification = React.createClass({
  render(){
    return(
      <View style={{
          backgroundColor:'black',
          flexDirection:'column',
          height:Dimensions.get('window').height-64
        }}>
        <View style={{
            flexDirection:'row',
            backgroundColor:'black',
            height:30
          }}>
          <View style={styles.title}>
            <Text style={styles.text}>Messages</Text>
          </View>
          <View style={[styles.title,styles.titleActive]}>
            <Text style={[styles.text,styles.textActive]}>Comments</Text>
          </View>
          <View style={styles.title}>
            <Text style={styles.text}>Notifications</Text>
          </View>
        </View>
        <View style={{
              justifyContent:'center',
              alignItems:'center',
              backgroundColor:'black',
              flex:1
            }}>
            <Comments height={Dimensions.get('window').height-94}/>
          </View>
      </View>
    )
  }
})

const styles = StyleSheet.create({
  title:{
    flex:1,
    borderColor:'white',
    borderBottomWidth:1
  },
  titleActive:{
    borderColor:'#C23235',
  },
  text:{
    flex:1,
    fontFamily:'DINCond-Regular',
    fontSize:25,
    color:'white',
    textAlign:'center'
  },
  textActive:{
    color:'#C23235'
  }
})

export default Notification;