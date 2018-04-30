import React from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableOpacity, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { Icon, Header } from 'react-native-elements';

// import Header component
import HeaderComponent from './Header';

const CocktailMatches = ({ cocktailMatches, navigation }) => {
  return (
    <View>
      <Header
      backgroundColor="white"
      fontFamily="SavoyeLetPlain"
      leftComponent={
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" color="teal" />
      </TouchableOpacity>}
      centerComponent={{ text: 'Mr. Mixologist', style: { color: 'teal', fontSize: 17 } }}
      rightComponent={
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Icon name="home" color="teal" />
        </TouchableOpacity>}
      />
      <View style={styles.bottomMargin}>
      <ScrollView stickyHeaderIndices={[0]}>
        <View style={styles.textContainer}>
          <Text style={styles.text}> Cocktail List </Text>
        </View>
          {Array.isArray(cocktailMatches) && cocktailMatches.length ?
            cocktailMatches.map(cocktail =>
            (
              <View key={cocktail.id} style={styles.container}>
                <Text style={styles.name} onPress={() => navigation.navigate('SingleCocktail', {singleCocktail: cocktail})}>{cocktail.name}</Text>
                <Image source={{uri: cocktail.imageUrl}} style={{width: 200, height: 225}} />
              </View>
            )
            ) :
            <View style={styles.noMatchContainer} >
              <Text style={styles.noMatchText} > Oops! Your ingredients don't match any cocktails. Time to create a new drink - good luck! I'll be here waiting if it goes awry...</Text>
              <Image style={styles.noMatchImg} source={require('../images/spilledDrink.jpg')} />
            </View>
          }
      </ScrollView>
      </View>
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
    alignItems: 'center'
  },
  noMatchContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    borderColor: 'teal',
    borderWidth: 2,
    margin: 20,
    marginTop: 75
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
  },
  noMatchText: {
    fontSize: 25,
    textAlign: 'center',
    padding: 10,
    color: 'teal',
    fontWeight: 'bold',
    margin: 10
  },
  noMatchImg: {
    width: 250,
    height: 200,
    alignSelf: 'center'
  },
  bottomMargin: {
    marginBottom: 140
  }
})

export default connect(mapState)(CocktailMatches)
