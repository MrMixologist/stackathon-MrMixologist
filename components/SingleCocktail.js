import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { fetchCocktailById, fetchIngredients } from '../store';

const SingleCocktail = ({ cocktail }) => (
  <View style={styles.container}>
  <Text style={styles.name}>{cocktail.name}</Text>
  <Image source={cocktail.imageUrl} width={'20px'} height={'20px'} />
  </View>

)


// componentDidMount() {
//   this.props.loadIngredients();
//   this.props.loadCocktail();
// }

//Container
// export const mapStateToProps = (storeState, ownProps) => ({
//   cocktail: storeState.cocktails.find(cocktail => cocktail.id === +ownProps.match.params.id),
//   ingredients: storeState.ingredients,
// });

// export const mapDispatchToProps = (dispatch, ownProps) => ({
//   loadCocktail: () => {
//     const action = fetchCocktailById(+ownProps.match.params.id);
//     return dispatch(action);
//   },
//   loadIngredients: () => {
//     const action = fetchIngredients();
//     return dispatch(action);
//   }
// });

// export const SingleCocktailContainer = connect(mapStateToProps, mapDispatchToProps)(SingleCocktail);

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  name: {
    fontSize: 35,
    fontWeight: 'bold'
  }
})
