import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

const Works = React.createClass({
  render(){
    return(
      <View style={{paddingTop:64,backgroundColor:'black'}}>
        <ScrollView 
            style={{
              height:568-64
            }}
            horizontal={false} 
            directionalLockEnabled={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={true}
            automaticallyAdjustContentInsets={false}
//             alwaysBounceVertical={true}
          >
            {
              THUMBS.map(createThumbRow)
            }
          </ScrollView>
      </View>
    );
  }
});

var Thumb = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return false;
  },
  render: function() {
    return (
      <View style={{}}>
        <Text style={{
            color:'#8B8B8B',
            fontFamily:'DINCond-Regular'
          }}>
          just now
        </Text>
        <Text style={{
            color:'white',
            fontFamily:'DINCond-Regular',
            alignSelf:'center',
            fontSize:23
          }}>
          Walking City
        </Text>
        <Text style={{
            color:'#8B8B8B',
            fontFamily:'DINCond-Regular',
            alignSelf:'flex-end'
          }}>
          post by marvel
        </Text>
        <Image style={styles.img} source={{uri:this.props.uri}} >
        </Image>
        <View style={{
            flexDirection:'row',
            
          }}>
          <View style={{flex:1,borderColor:'white',borderWidth:1,height:1,marginTop:10}}></View>
          <View><Text style={{color:'white',margin:3}}>view</Text></View>
          <View><Text style={{color:'white',margin:3}}>watch</Text></View>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'transparent',
  },
  img: {
    width: 320,
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
export default Works;