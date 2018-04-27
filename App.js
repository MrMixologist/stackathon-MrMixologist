import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './components/Home';
import IngredientList from './components/IngredientList';

const RootNavigator = StackNavigator({
  Main: {
    screen: Home,
    navigationOptions: {
      header: 'Home',
    },
  },
  IngredientList: {
    screen: IngredientList,
    navigationOptions: {
      header: 'Ingredients'
    }
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RootNavigator;
