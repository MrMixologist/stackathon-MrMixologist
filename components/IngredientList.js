import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux'

// import thunks
import { fetchIngredients, fetchCocktails, setCocktailMatches } from '../store';

// import Ingredient component
import Ingredient from './Ingredient';

export class IngredientList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIngredients: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.loadIngredients();
    this.props.loadCocktails();
  }

  handleClick(id) {
    this.setState({
      selectedIngredients: [...this.state.selectedIngredients, id]
    })
  }

  handleSubmit() {
    const cocktailMatches = this.props.cocktails.filter(cocktail => {
      const ingredientArray = cocktail.ingredients.map(ingredient => {
        return ingredient['Cocktail-Ingredient'].ingredientId
      });
      console.log("INGREDIENTTTTT ARRAY", ingredientArray);
      console.log('current selected = ', this.state.selectedIngredients)
      return ingredientArray.every(ingredient => {
        return this.state.selectedIngredients.includes(ingredient);
      });
    });
    this.props.setCocktails(cocktailMatches);
    return this.props.navigation.navigate('CocktailMatches')
  }

  render() {
    const { ingredients } = this.props;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
        {
          Array.isArray(ingredients) && ingredients.map(ingredient => {
            return (
              <TouchableOpacity key={ingredient.id} onPress={() => this.handleClick(ingredient.id)} >
                <Text>{ ingredient.name }</Text>
                <Text>{ ingredient.category }</Text>
              </TouchableOpacity>
            )
          })
        }
        <TouchableOpacity style={styles.button}
        onPress={this.handleSubmit} >
        <Text style={styles.buttonText}>Search Cocktails</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    height: 50,
    width: 200,
    borderRadius: 25,
  },
  contentContainer: {
    paddingVertical: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
})

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    ingredients: state.ingredients,
    cocktails: state.cocktails
  }
}

const mapDispatch = dispatch => ({
  loadIngredients: () => {
    const action = fetchIngredients();
    return dispatch(action);
  },
  loadCocktails: () => {
    const action = fetchCocktails();
    return dispatch(action);
  },
  setCocktails: (cocktails) => {
    const action = setCocktailMatches(cocktails);
    return dispatch(action);
  }
})


export default connect(mapState, mapDispatch)(IngredientList)
