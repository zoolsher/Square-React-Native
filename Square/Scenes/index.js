import React,{Component} from 'react';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {bindActionCreators} from 'redux';
import * as reducers from './../reducers';
import {connect} from 'react-redux';
import {Router, routerReducer, Route, Container, Animations, Schema} from 'react-native-redux-router';
import {Navigator} from 'react-native';
import {View} from 'react-native';
var {NavBarModal,NavBar,NavBarPure} = require('./NavBar');
import Login from './Login';
import Home from './Home';
import Notification from './Notification';
import Works from './Home/segments/details/works';
import Collections from './Home/segments/details/collections';
import Squares from './Home/segments/details/squares';

import * as actions from './../actions/';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers({...reducers,routerReducer:routerReducer});
const store = createStoreWithMiddleware(reducer);

function mapStateToProps(state){
  return{
    user:state.user
  }
}

function dispatchActions(dispatch){
  return{
    actions:bindActionCreators(actions,dispatch)
  }
}
//Animations.FlatFloatFromRight
var ConnectRouter = React.createClass({
  render(){
    return(
      <View style={{flex:1}}>
        <View style={{position:'absolute',left:0,right:0,top:0,bottom:0,backgroundColor:'black'}}/>
        <Router>
          <Schema name="default" sceneConfig={Navigator.SceneConfigs.PushFromRight} navBar={NavBar}/>
          <Schema name="modal" sceneConfig={Animations.FlatFloatFromBottom} navBar={NavBarModal}/>
          <Schema name="withoutAnimation" navBar={NavBar}/>
          <Schema name="navPure" navBar={NavBarPure}/>
          <Schema name="tab" navBar={NavBar}/>

          <Route name="launch" component={Login} {...this.props}  hideNavBar={true} title="Launch"/>
          <Route name="home" component={Home} {...this.props} title="Home"  type="replace" schema="navPure"/>
          <Route name="worksDetail" component={Works} {...this.props} title="Works" schema="default"/>
          <Route name="collectionsDetail" component={Collections} {...this.props}  title="Collections" schema="default"/>
          <Route name="squaresDetail" component={Squares} {...this.props} title="Squares" schema="default"></Route>
          <Route name="notification" component={Notification} initial={true}  {...this.props} title="Notification"  schema="default"/>
        </Router>
      </View>
    );
  }
})

var App = connect(mapStateToProps,dispatchActions)(ConnectRouter);


const Main = () => {
  return (
    <Provider store = {store}>
      <App />
    </Provider>
  )
}
//           <Route name="register" component={Register} title="Register"/>
//           <Route name="home" component={Home} title="Home" type="replace"/>
//           <Route name="login" component={Login} schema="modal"/>
//           <Route name="register2" component={Register} schema="withoutAnimation"/>
//           <Route name="error" component={Error} schema="popup"/>

export default Main;