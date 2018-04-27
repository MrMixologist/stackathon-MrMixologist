import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux'

// import thunks
import fetchIngredients from '../store';

// import Ingredient component
import Ingredient from './Ingredient';

const IngredientList = ({ ingredients }) => (
  <View style={styles.container}>
    {
      ingredients.map(ingredient => {
        return <Ingredient key= {ingredient.id} ingredient={ ingredient } />
      })
    }
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    ingredients: state.ingredients
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadIngredients: () => {
      const action = fetchIngredients();
      dispatch(action);
    }
  }
}

export default connect(mapState, mapDispatch)(IngredientList)
