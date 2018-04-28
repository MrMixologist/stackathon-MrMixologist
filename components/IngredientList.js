import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList, ScrollView, Header } from 'react-native';
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
      return ingredientArray.every(ingredient => {
        return this.state.selectedIngredients.includes(ingredient);
      });
    });
    this.props.setCocktails(cocktailMatches);
    return this.props.navigation.navigate('CocktailMatches')
  }

  render() {
    const { ingredients } = this.props;
    const categories = ['Liquor', 'Mixer', 'Fruit/Vegetable', 'Sweetener', 'Bitters']
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
      <View >
        <View style={styles.headerContainer}>
          <Text style={styles.header}> Please select your ingredients</Text>
        </View>
      {
        categories.map(category => {
          return (
            <View style={styles.categoryContainer} key={category}>
              <Text style={styles.category}> {category} </Text>
              <View style={styles.ingredientContainer}>
                {
                  Array.isArray(ingredients) && ingredients.filter(ingredient => ingredient.category === category).map(ingredient => {
                return (
                  <TouchableOpacity key={ingredient.id} onPress={() => this.handleClick(ingredient.id)} >
                    <Text style={styles.ingredient}>{ ingredient.name }</Text>
                  </TouchableOpacity>
                )
              })
            }
            </View>
          </View>
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
    flex: 1,
    paddingTop: 75,
    alignItems: 'center',
    justifyContent: 'center',
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
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  category: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'teal',
    alignSelf: 'center',
    textDecorationLine: 'underline',
    borderColor: 'teal',
  },
  categoryContainer: {
    paddingTop: 20,
    borderWidth: 10,
    borderColor: 'teal',
    borderLeftWidth: 20,
    borderRightWidth: 20
  },
  headerContainer: {
    justifyContent: 'center'
  },
  header: {
    alignContent: 'center',
    flex: 1,
    color: 'black',
    height: 50,
    fontSize: 25,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  ingredient: {
    fontSize: 15,
    padding: 15,
    includeFontPadding: true,
    textShadowColor: 'black'
  },
  ingredientContainer: {
    // borderColor: 'teal',
    // borderWidth: 3
  }
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
