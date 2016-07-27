import React from'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableHighlight
} from 'react-native';
var {Actions} = require('react-native-redux-router');
const Collections = React.createClass({
  render(){
    return(
      <View style={{height:this.props.height}}>
        <TouchableHighlight onPress={Actions.collectionsDetail} >
          <Text style={{color:'#B93336',fontFamily:'DINCond-Regular',fontSize:20,position:'absolute',right:5}}>
            View All>
          </Text>
        </TouchableHighlight>
        <ScrollView 
          style={{
            marginTop:15
          }}
          horizontal={true} 
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={false}
          automaticallyAdjustContentInsets={false}
          alwaysBounceHorizontal={true}>
          {
            THUMBS.map(createThumbRow)
          }
        </ScrollView>
      </View>
    )
  }
})

var Thumb = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return false;
  },
  render: function() {
    return (
      <View style={{
          padding:5
        }}>
        <Text style={{
            color:'#8B8B8B',
            fontFamily:'DINCond-Regular',
          }}>
          post by marvel
        </Text>
        <Image style={styles.img} source={{uri:this.props.uri}} >
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              Captain Of Amercian
            </Text>
          </View>
        </Image>
      </View>
    );
  }
});


var styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'transparent',
  },
  img: {
    width: 200-55,
    height: 200-55,
    flex:1,
    flexDirection:'row',
    alignItems:'flex-end'
  },
  titleContainer:{
    flex:1,
    padding:4,
    backgroundColor:'rgba(0,0,0,.3)'
  },
  title:{
    textAlign:'center',
    color:"white",
    backgroundColor:'transparent',
    fontFamily:'DINCond-Regular',
    fontSize:20
  }
});


var THUMBS = [
  'http://www.sideshowtoy.com/photo.php?sku=902530',
  'http://www.sideshowtoy.com/photo.php?sku=902530',
  'http://www.sideshowtoy.com/photo.php?sku=902530',
  'http://www.sideshowtoy.com/photo.php?sku=902530',
];
THUMBS = THUMBS.concat(THUMBS); // double length of THUMBS
var createThumbRow = (uri, i) => <Thumb key={i} uri={uri} />;

export default Collections;