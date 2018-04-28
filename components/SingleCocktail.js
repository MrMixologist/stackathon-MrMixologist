import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { fetchCocktailById, fetchIngredients } from '../store';
import {Header, Icon} from 'react-native-elements';

const SingleCocktail = ({ navigation }) => {
  const singleCocktail = navigation.state.params.singleCocktail;
  return (
    <View style={styles.bigContainer}>
    <Header
    backgroundColor="white"
    leftComponent={
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
      <Icon name='arrow-back' color='teal' />
      </TouchableOpacity>}
      centerComponent={{ text: 'Mr. Mixologist', style: { color: 'teal', fontSize: 17} }}
      rightComponent={{ icon: 'home', color: 'teal' }}
      />
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{singleCocktail.name}</Text>
      </View>
      <View style={styles.recipeContainer}>
      <Image source={{uri: singleCocktail.imageUrl}} style={styles.image} />
      <View style={styles.ingredients}>
        {singleCocktail.ingredients.map(ingredient =>
          <Text key={ingredient.id}>{`${ingredient['Cocktail-Ingredient'].measurement} ${ingredient.name}`}</Text>
        )}
      </View>
      <Text style={styles.recipe}> {singleCocktail.recipe} </Text>
      </View>
    </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center'
  },
  bigContainer: {
    flex: 1
  },
  recipeContainer: {
    borderColor: 'teal',
    borderWidth: 2
  },
  name: {
    fontSize: 45,
    fontFamily: 'SavoyeLetPlain',
    color: 'teal'
  },
  image: {
    width: 250,
    height: 250,
    margin: 30
  },
  ingredients: {
    padding: 10,
    margin: 20
  },
  recipe: {
    margin: 20,
    fontSize: 15
  }
})

export default SingleCocktail;
