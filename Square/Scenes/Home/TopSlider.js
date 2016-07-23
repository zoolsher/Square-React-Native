import React from 'react';
import{
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  TouchableHighlight,
  Easing
} from 'react-native';
import Dimensions from 'Dimensions';
var baseHeight = 40;
var focusHeight = 120;
const totalSlideNumber = 3;

const TopSlider = React.createClass({
  getInitialState(){
    var heightArr = [];
    for(var i =0;i<totalSlideNumber;i++){
      heightArr.push(i!==parseInt(totalSlideNumber/2)?(new Animated.Value(baseHeight)):(new Animated.Value(focusHeight)));
    }
    return{
      imgHeight:heightArr
    }
  },
  _clickToSlide(indexOfImage){
    var imgHeight = (new Array(totalSlideNumber)).fill(baseHeight);
    imgHeight[indexOfImage] = focusHeight;
    var that = this;
    return ()=>{
      var animatedArr = [];
      for(var i = 0;i<totalSlideNumber;i++){
        animatedArr[i]=
          Animated.timing(
            this.state.imgHeight[i],
            {
              toValue:imgHeight[i],
              easing: Easing.inOut(Easing.ease)
            }
          )
      }
      Animated.parallel(animatedArr).start();
    }
  },
  render(){
    return(
      <View>
        {
          (new Array(totalSlideNumber)).fill(1).map((value,index)=>{
            return (
              <TouchableHighlight key={index} onPress={this._clickToSlide(index)}>
                <Animated.Image  style={[styles.img,{height:this.state.imgHeight[index]}]} source={{uri:'http://www.sideshowtoy.com/wp-content/uploads/2015/12/marvel-iron-man-mark-xlvi-sixth-scale-captain-america-civil-war-hot-toys-thumb-902622.jpg'}}>
                </Animated.Image>
              </TouchableHighlight>
            );
          })
        }
      </View>
     
    );
  }
});



const styles = StyleSheet.create({
  img:{
    width:Dimensions.get('window').width
  }
});

export default TopSlider;