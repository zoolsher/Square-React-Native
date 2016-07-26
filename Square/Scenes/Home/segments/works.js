import React from 'react';
import {
	View,
	Text,
	StyleSheet,
    Image,
    TouchableHighlight,
}from 'react-native';

import Swiper from 'react-native-swiper';
import Square from './square';
import WorksDetail from './details/works';
import Dimensions from 'Dimensions';

var ScreenWidth = Dimensions.get('window').width;

var styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
  },
  slide2: {
    flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
  },
  slide3: {
    flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'blue',
  },
  text: {
    color: 'green',
    fontSize: 30,
    fontWeight: 'bold',
  },
  imgTitle:{
    color:'white',
    fontFamily:'DINCond-Regular',
    fontSize:20,
  }
})



var swiper = React.createClass({

  render: function() {
    var imgHeight = this.props.height-3;
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
			height={this.props.height}
			autoplay={true}
			showsButtons={false}
              >
			<View style={styles.slide1}>
              <TouchableHighlight onPress={()=>{this.props.nav.nav.push({
                  component:()=>{return <WorksDetail></WorksDetail>},
                  title:'Works'
                })}}>
                <Text style={[styles.imgTitle,{alignSelf:'flex-end',color:'#C52C2D'}]}>View All > </Text>
              </TouchableHighlight>
              <Text style={[styles.imgTitle,{alignSelf:'center',fontSize:23}]}>Walking City</Text>
              <Text style={styles.imgTitle}>posted by facebook</Text>
              <Image style={{width:ScreenWidth,height:imgHeight}} source={{uri:"http://blogs-images.forbes.com/erikkain/files/2016/05/Captain-America-Civil-War-concept-art-1-1200x641.jpg"}}></Image>
			</View>
			<View style={styles.slide2}>
              <Text style={[styles.imgTitle,{alignSelf:'flex-end',color:'#C52C2D'}]}>View All ></Text>
              <Text style={[styles.imgTitle,{alignSelf:'center',fontSize:23}]}>Walking City</Text>
              <Text style={styles.imgTitle}>posted by facebook</Text>
			  <Image style={{height:imgHeight,width:ScreenWidth}} source={{uri:"http://blogs-images.forbes.com/erikkain/files/2016/05/Captain-America-Civil-War-concept-art-1-1200x641.jpg"}}></Image>
			</View>
			<View style={styles.slide3}>
              <Text style={[styles.imgTitle,{alignSelf:'flex-end',color:'#C52C2D'}]}>View All ></Text>
              <Text style={[styles.imgTitle,{alignSelf:'center',fontSize:23}]}>Walking City</Text>
              <Text style={styles.imgTitle}>posted by facebook</Text>
			  <Image style={{height:imgHeight,width:ScreenWidth}} source={{uri:"http://blogs-images.forbes.com/erikkain/files/2016/05/Captain-America-Civil-War-concept-art-1-1200x641.jpg"}}></Image>
			</View>
			</Swiper>
	  	</View>
    )
  }
})

export default swiper;
