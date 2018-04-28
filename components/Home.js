import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, TouchableOpacity } from 'react-native';
import { Header, Icon, Container } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';


const Home = ({ navigation }) => (
  <View style={styles.container}>
  <ImageBackground
  source={require('../images/drink3.jpg')} style={{width: '100%', height: '100%'}}
  >
    <Header
      fontFamily="SavoyeLetPlain"
      fontSize={25}
      backgroundColor="white"
      centerComponent={{ text: 'Mr. Mixologist', style: { color: 'teal' } }}
    />
      <Text style={styles.text}>Mr. Mixologist here to serve!</Text>
      <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('IngredientList')} >
      <Text style={styles.buttonText}>Select Ingredients</Text>
      </TouchableOpacity>
    </ImageBackground>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 45,
    padding: 20,
    textAlign: 'center',
    fontFamily: 'SavoyeLetPlain',
    marginTop: 75
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
  button: {
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    height: 50,
    width: 200,
    borderRadius: 20,
    alignSelf: 'center',
    top: 400
  },
});

export default Home;
