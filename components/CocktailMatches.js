import React from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableOpacity, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { Header, Icon } from 'react-native-elements';

const CocktailMatches = ({ cocktailMatches, navigation }) => {
  return (
    <View>
      <Header
          backgroundColor="white"
          fontFamily="SavoyeLetPlain"
          leftComponent={
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Icon name='arrow-back' color='teal' />
          </TouchableOpacity>}
          centerComponent={{ text: 'Mr. Mixologist', style: { color: 'teal', fontSize: 17 } }}
          rightComponent={{ icon: 'home', color: 'teal' }}
      />
      <ScrollView stickyHeaderIndices={[0]}>
        <View style={styles.textContainer}>
          <Text style={styles.text}> Cocktail List </Text>
        </View>
          {Array.isArray(cocktailMatches) && cocktailMatches.map(cocktail =>
            (
              <View key={cocktail.id} style={styles.container}>
                <Text style={styles.name}>{cocktail.name}</Text>
                <Image source={{uri: cocktail.imageUrl}} style={{width: 200, height: 150}} />
              </View>
            )
          )
          }
      </ScrollView>
    </View>
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
    paddingTop: 15,
    paddingBottom: 15,
    borderWidth: 2,
    borderColor: 'teal',
    alignItems: 'center',
  },
  name: {
    fontSize: 30,
    textDecorationLine: 'underline',
    fontFamily: 'SavoyeLetPlain',
    color: 'teal'
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    padding: 10,
    width: '100%',
    color: 'white',
    height: 50
  },
  textContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  }
})

export default connect(mapState)(CocktailMatches)
