import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

const CocktailMatches = ({ cocktailMatches }) => {
  return (
    Array.isArray(cocktailMatches) && cocktailMatches.map(cocktail =>
      (
        <View key={cocktail.id} style={styles.container}>
          <Text style={styles.name}>{cocktail.name}</Text>
          <Image source={cocktail.imageUrl} width={'20px'} height={'20px'} />
        </View>
      )
    )
  )
}

const mapState = (state) => {
  return {
    cocktailMatches: state.cocktailMatches
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 20,
    borderWidth: 3,
    borderColor: '#111',
    justifyContent: 'center',
  },
})

export default connect(mapState)(CocktailMatches)
