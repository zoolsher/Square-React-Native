import React from 'react';
import {
	View,
	Text,
	StyleSheet,
  TouchableHighlight,
  LayoutAnimation,
}from 'react-native';

import Works from './works';
import Collections from './collections';
import Square from './square';


const Seg = React.createClass({
  getInitialState(){
    return{
      selected:1,
    }
  },
  _changeSeg(index){
    return ()=>{
      this.setState({
        selected:index
      })
    }
  },
  componentWillUpdate(){
    LayoutAnimation.easeInEaseOut();
  },
	render(){
		return(
			<View>
				<View style={styles.titleContainer}>
                  {
                    ['Collections','Works','Square'].map(($,index)=>{
                      if(index !== this.state.selected){
                        return(
                          <View key={index} style={styles.box}>
                            <TouchableHighlight onPress={this._changeSeg(index)}>
                              <View>
                                <Text style={styles.title}>
                                    {$}
                                </Text>
                                <View style={styles.titleBorder}></View>
                              </View>
                            </TouchableHighlight>
                          </View>
                        );
                      }else{
                        return(
                          <View key={index} style={styles.box}>
                              <Text style={styles.titleSelected}>
                                  {$}
                              </Text>
                              <View style={styles.titleBorderSelected}></View>
                          </View>
                        )
                      }
                    })
                  }
    			</View>
                <View style={{marginTop:1}}>
                  {
                    [Collections,Works,Square].filter(($,index)=>index==this.state.selected).map(
                      ($,index)=><$ nav={this.props.nav} key={index} height={this.props.height-22}/>
                    )
                  }
                </View>
            
			</View>
		);
	}
})

const styles = StyleSheet.create({
	titleContainer:{
		paddingTop:4,
		flexDirection:'row',
		backgroundColor:'black',
	},
	box:{
      flex:1,
      margin:-1,
//       height:25,
	},
	title:{
		color:'#838383',
		fontFamily:'DINCond-Regular',
		fontSize:20,
		textAlign:'center',
		marginBottom:2
	},
    titleSelected:{
        flex:1,
		color:'#B93336',
		fontFamily:'DINCond-Regular',
		fontSize:20,
		textAlign:'center',
		marginBottom:2
    },
	titleBorder:{
		borderWidth:1,
		borderColor:'#838383'
	},
    titleBorderSelected:{
		borderWidth:1,
		borderColor:'#B93336'
	}
});


export default Seg;
