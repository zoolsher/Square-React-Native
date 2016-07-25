import React from 'react';
import {
	View,
	Text,
	StyleSheet,
    Image
}from 'react-native';

import Swiper from 'react-native-swiper';


var styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  text: {
    color: 'green',
    fontSize: 30,
    fontWeight: 'bold',
  }
})



var swiper = React.createClass({

  render: function() {
    var imgHeight = this.props.height-20;
    return (
		<View>
			<View>
              <Text style={{color:'white'}}>asdf</Text>
			</View>
			<Swiper style={styles.wrapper}
				dot={<View style={{
				backgroundColor:'rgba(255,255,255,.3)',
				width: 13,
				height: 3,
				marginLeft: 3,
				marginRight: 3,
			}} />}
			activeDot={<View style={{
				backgroundColor:'#C5251C',
				width: 13,
				height: 3,
				marginLeft: 3,
				marginRight: 3,
			}} />}
			paginationStyle={{
			    bottom:6,
				left:10,
				right:null,
			}}
			height={imgHeight}
			autoplay={true}
			showsButtons={false}
              >
			<View style={styles.slide1}>
              <Image style={{width:320,height:imgHeight}} source={{uri:"http://blogs-images.forbes.com/erikkain/files/2016/05/Captain-America-Civil-War-concept-art-1-1200x641.jpg"}}></Image>
			</View>
			<View style={styles.slide2}>
			  <Image style={{height:imgHeight,width:320}} source={{uri:"http://blogs-images.forbes.com/erikkain/files/2016/05/Captain-America-Civil-War-concept-art-1-1200x641.jpg"}}></Image>
			</View>
			<View style={styles.slide3}>
			  <Image style={{height:imgHeight,width:320}} source={{uri:"http://blogs-images.forbes.com/erikkain/files/2016/05/Captain-America-Civil-War-concept-art-1-1200x641.jpg"}}></Image>
			</View>
			</Swiper>
	  	</View>
    )
  }
})

export default swiper;
