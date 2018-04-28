import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

const Ingredient = ({ ingredient }) => {
  return (
    <View style={styles.container}>
        <Text>{ ingredient.name }</Text>
        <Text>{ ingredient.category }</Text>
    </View>
  )
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

export default Ingredient;
