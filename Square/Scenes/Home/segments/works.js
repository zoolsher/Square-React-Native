import React from 'react';
import {
	View,
	Text,
	StyleSheet,
}from 'react-native';

import Swiper from 'react-native-swiper';


var styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
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
    return (
		<View>

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
			height={200}
			autoplay={true}
			showsButtons={false}>
			<View style={styles.slide1}>
			  <Text style={styles.text}>Hello Swiper</Text>
			</View>
			<View style={styles.slide2}>
			  <Text style={styles.text}>Beautiful</Text>
			</View>
			<View style={styles.slide3}>
			  <Text style={styles.text}>And simple</Text>
			</View>
			</Swiper>
	  	</View>
    )
  }
})

export default swiper;
