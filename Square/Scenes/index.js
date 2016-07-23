import React,{Component} from 'react';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {bindActionCreators} from 'redux';
import * as reducers from './../reducers';
import {connect} from 'react-redux';


import Login from './Home';

import * as actions from './../actions/';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
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

var App = connect(mapStateToProps,dispatchActions)(Login);


const Main = () => {
  return (
    <Provider store = {store}>
      <App />
    </Provider>
  )
}

export default Main;