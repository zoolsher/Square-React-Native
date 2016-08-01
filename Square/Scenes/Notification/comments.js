import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';
import Dimensions from 'Dimensions';

function _renderComment($,key){
  return (
    <View style={{
        flexDirection:'row',
      }}
      key={key}>
      <Image style={{
          width:100,
          height:100,
          margin:10,
          marginTop:0,
        }}
        source={{uri:'https://lh4.googleusercontent.com/-v0soe-ievYE/AAAAAAAAAAI/AAAAAAADhJ0/RzC8EKdrIk8/s0-c-k-no-ns/photo.jpg'}}>
      </Image>
      <View style={{
          flex:1,
          flexDirection:'column'
        }}>
        <Text style={styles.text}>
          {$.from}
        </Text>
        <Text style={styles.text}>
          {$.comment}
        </Text>
        <Text style={styles.text}>
          {$.content}
        </Text>
      </View>
    </View>
  );
}

const Comments = React.createClass({
  render(){
    return(
      <View>
        <ScrollView 
          style={{
            width:Dimensions.get('window').width,
            height:this.props.height,
            backgroundColor:'transparent'
          }}
          contentContainerStyle={styles.contentContainer}
          horizontal={false} 
          directionalLockEnabled={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={true}
          automaticallyAdjustContentInsets={false}
          >
          {
            comments.map(_renderComment)
          }
        </ScrollView>
      </View>
    );
  }
});

var comments = [{from:'test',comment:'commentsfromshit',content:'my content: shit comentsthis shit way'},
               {from:'test',comment:'commentsfromshit',content:'my content: shit comentsthis shit way'},
                {from:'test',comment:'commentsfromshit',content:'my content: shit comentsthis shit way'},
                {from:'test',comment:'commentsfromshit',content:'my content: shit comentsthis shit way'}
               ];

var styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20
  },
  text:{
    flex:1,
    color:'white'
  }
})

export default Comments;