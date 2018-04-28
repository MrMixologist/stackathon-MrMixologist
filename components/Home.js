import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation';


const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.text}>Mr. Mixologist here to serve!</Text>
    <Image
    source={require('../images/bartender2.png')}
    />
    <TouchableOpacity
    style={styles.button}
    onPress={() => navigation.navigate('IngredientList')} >
    <Text style={styles.buttonText}>Select Ingredients</Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 25,
    padding: 20
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    height: 50,
    width: 200,
    borderRadius: 25,
  }
});

export default Home;
