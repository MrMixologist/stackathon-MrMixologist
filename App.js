import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import Home from './components/Home';
import IngredientList from './components/IngredientList';
import CocktailMatches from './components/CocktailMatches';
import { Provider } from 'react-redux';
import store from './store';


const RootNavigator = StackNavigator(
  {
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
  },
  CocktailMatches: {
    screen: CocktailMatches,
    navigationOptions: {
      header: 'Cocktail Matches'
    }
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 25,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const app = () => (
  <Provider store={store}>
    <RootNavigator />
  </Provider>
)

export default app;
