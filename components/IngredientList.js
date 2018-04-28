import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Icon, Header } from 'react-native-elements';
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
    const { ingredients, navigation } = this.props;
    const categories = ['Liquor', 'Mixer', 'Fruit/Vegetable', 'Sweetener', 'Bitters']
    return (
      <View>
      <Header
        backgroundColor="white"
        leftComponent={
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name='arrow-back' color='teal' />
        </TouchableOpacity>}
        centerComponent={{ text: 'Mr. Mixologist', style: { color: 'teal', fontSize: 17} }}
        rightComponent={{ icon: 'home', color: 'teal' }}
      />
      <ScrollView stickyHeaderIndices={[0]}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}> Please select your ingredients</Text>
        </View>
        <View>
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
          </View>
          <TouchableOpacity style={styles.button}
          onPress={this.handleSubmit} >
            <Text style={styles.buttonText}>Search Cocktails</Text>
          </TouchableOpacity>
      </ScrollView>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 125,
    height: 50,
    width: 200,
    borderRadius: 25,
    top: 30,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  category: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'teal',
    alignSelf: 'center',
    textDecorationLine: 'underline',
    borderColor: 'teal',
    fontFamily: 'SavoyeLetPlain',
  },
  categoryContainer: {
    paddingTop: 20,
    borderWidth: 10,
    borderColor: 'teal',
    borderLeftWidth: 20,
    borderRightWidth: 20,
    top: 50
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    top: 0,
    left: 0,
    right: 0,
    position: 'absolute',
  },
  header: {
    flex: 1,
    color: 'white',
    padding: 10,
    height: 50,
    fontSize: 25,
    textAlign: 'center',
  },
  ingredient: {
    fontSize: 15,
    padding: 10,
    textShadowColor: 'black'
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
