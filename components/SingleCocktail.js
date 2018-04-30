import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Header, Icon } from 'react-native-elements';

// import header
import HeaderComponent from './Header'

const SingleCocktail = ({ navigation }) => {
  const singleCocktail = navigation.state.params.singleCocktail;
  return (
    <View style={styles.bigContainer}>
    <HeaderComponent headerNavigation={navigation} />
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
    alignItems: 'center',
    borderTopColor: 'teal',
    borderTopWidth: 2
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
    margin: 30,
    alignSelf: 'center'
  },
  ingredients: {
    margin: 20
  },
  recipe: {
    margin: 20,
    fontSize: 15
  }
})

export default SingleCocktail;
