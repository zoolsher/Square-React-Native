'use strict';

var NavigationBar = require('react-native-navbar');
var React = require('react');
var {StyleSheet,View,NavigatorIOS} = require('react-native');
var {Router, Route, Animations, Schema} = require('react-native-redux-router');

class NavBarBase extends React.Component {
   onPrev(){
       var Actions = this.props.routes;
       if (this.props.onPrev){
           this.props.onPrev();
           return;
       }
       if (this.props.navigator && this.props.navigator.getCurrentRoutes().length > 1){
           Actions.pop();
       }
   }
   render() {
       var Actions = this.props.routes;
       return <NavigationBar style={styles.navBar}
                             titleColor='white'
                             buttonsColor='white'
                             statusBar= {{tintColor:'black',style:'light-content', hidden: false}}
                             title= {{title:this.props.title,tintColor:'white'}}
                             prevTitle={this.props.initial ? " " : null}
                             leftButton = {this.props.leftButton ? this.props.leftButton : {title:''}}
                             rightButton = {this.props.rightButton ? this.props.rightButton : {title:''}}
           />
   }
}
class NavBar extends React.Component {
   render() {
     var Actions = this.props.routes;
       return <NavBarBase customNext={<View/>} {...this.props} leftButton={{title:'< Back',tintColor:'white', handler:this.props.onPrev || Actions.pop}}/>
   }
}


class NavBarModal extends React.Component {
   render() {
     var Actions = this.props.routes;
       return <NavBarBase customPrev={<View/>} nextTitle="Close" {...this.props} rightButton={{title:'Close', handler:this.props.onNext || Actions.pop}}/>
   }
}

class NavBarPure extends React.Component{
  render(){
    var Actions = this.props.routes;
    return <NavBarBase customPrev={<View/>} {...this.props}/>
  }
}

class NavBarIOSD extends React.Component{
  render(){
    var Actions = this.props.routes;
    return (
      <NavigatorIOS
        barTintColor='black'
        tintColor='white'
        titleTextColor='white'
        initialRoute = {{
          title:this.props.title,
          component:View
        }}
        style={{
          flex:1
        }}
        />
    );
  }
}
// class NavBarIOS extends React.Componect{
//   render(){
//     return(
//       var Actions = this.props.routes;
//       <NavigatorIOS
//         barTintColor='black'
//         tintColor='white'
//         titleTextColor='white'
//         initialRoute = {{
//           title:'Home',
//           component:PaddingMidWare,
//         }}
//         style={{
//           flex:1
//         }}
//       />
//     )
//   }
// }

var styles = StyleSheet.create({
   navBar: {
       backgroundColor: 'black'
   },
});


module.exports = {NavBar, NavBarModal,NavBarPure,NavBarIOSD};
