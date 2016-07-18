/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Login from './Scenes/Login';
import Tabbar from './Scenes/Tabbar';
import Main from './Scenes/';

AppRegistry.registerComponent('Square', () => Main);
