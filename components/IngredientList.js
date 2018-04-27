import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux'

// import thunks
import { fetchIngredients } from '../store';

// import Ingredient component
import Ingredient from './Ingredient';

export class IngredientList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIngredients: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.loadIngredients();
  }

  handleClick(id) {
    this.setState({
      selectedIngredients: [...this.state.selectedIngredients, id]
    })
  }

  render() {
    const { ingredients } = this.props;
    console.log("state", this.state.selectedIngredients)
    return (
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
      onPress={() => this.handleSubmit} >
      <Text style={styles.buttonText}>Search Cocktails</Text>
      </TouchableOpacity>
      </View>
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

const mapDispatch = dispatch => ({
  loadIngredients: () => {
    const action = fetchIngredients();
    return dispatch(action);
  }
})


export default connect(mapState, mapDispatch)(IngredientList)
