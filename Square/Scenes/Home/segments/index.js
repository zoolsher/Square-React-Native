import React from 'react';
import {
	View,
	Text,
	StyleSheet,
}from 'react-native';

import Works from './works';

const Seg = React.createClass({
	render(){
		return(
			<View>
				<View style={styles.titleContainer}>
					<View style={styles.box}>
	    				<Text style={styles.title}>
							Collections
						</Text>
						<View style={styles.titleBorder}></View>
					</View>
					<View style={styles.box}>
						<Text style={styles.title}>
	     					Works
	     				</Text>
						<View style={styles.titleBorder}></View>
					</View>
					<View style={styles.box}>
						<Text style={styles.title}>
							Square
						</Text>
						<View style={styles.titleBorder}></View>
					</View>
    			</View>
				<Works>
				</Works>
			</View>
		);
	}
})

const styles = StyleSheet.create({
	titleContainer:{
		paddingTop:4,
		flexDirection:'row',
		backgroundColor:'black'
	},
	box:{
		flex:1,
		margin:-1
	},
	title:{
		flex:1,
		color:'#838383',
		fontFamily:'DINCond-Regular',
		fontSize:20,
		textAlign:'center',
		marginBottom:2
	},
	titleBorder:{
		borderWidth:1,
		borderColor:'#838383'
	}
});


export default Seg;
