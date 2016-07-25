import React from 'react';
import {
  Text,
  View,
  StyleSheet
}from 'react-native';

const MidBar = React.createClass({
  render(){
    return(
      <View style={styles.container}>
          <Text style={styles.text}>          </Text>
          <Text style={[styles.text,{color:'#808080'}]}>squarance.com</Text>
          <Text style={[styles.text,{textAlign:'right',color:'#C02C2D'}]}>View All ></Text>
        </View>
    )
  }
});

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    padding:3,
    height:25
  },
  text:{
    flex:1,
    fontSize:20,
    fontFamily:'DINCond-Regular',
    textAlign:'center'
  }
})

export default MidBar;