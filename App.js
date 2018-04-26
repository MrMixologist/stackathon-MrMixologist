import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './components/Home'

const RootNavigator = StackNavigator({
  Main: {
    screen: Home,
    navigationOptions: {
      header: 'Home',
    },
  }
})

export default RootNavigator;
