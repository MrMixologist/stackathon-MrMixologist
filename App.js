import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import {
  IngredientList,
  CocktailMatches,
  SingleCocktail,
  Login,
  Home
} from './components/index';
import { Provider } from 'react-redux';
import store from './store';

const RootNavigator = StackNavigator({
  Main: {
    screen: Home
  },
  Login: {
    screen: Login
  },
  IngredientList: {
    screen: IngredientList
  },
  CocktailMatches: {
    screen: CocktailMatches
  },
  SingleCocktail: {
    screen: SingleCocktail
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 25,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const app = () => (
  <Provider store={store}>
    <RootNavigator />
  </Provider>
);

export default app;
