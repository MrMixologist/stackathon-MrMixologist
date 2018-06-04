import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Button,
  TouchableOpacity
} from 'react-native';
import { Header } from 'react-native-elements';

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Header
      fontFamily="SavoyeLetPlain"
      backgroundColor="white"
      centerComponent={{
        text: 'Mr. Mixologist',
        style: { color: 'teal', fontSize: 17 }
      }}
    />
    <ImageBackground
      source={require('../images/drink3.jpg')}
      style={{
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
      }}
    >
      <Text style={styles.text}>Mr. Mixologist here to serve!</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('IngredientList')}
        >
          <Text style={styles.buttonText}>Select Ingredients</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 60,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 65,
    textAlign: 'center',
    fontFamily: 'SavoyeLetPlain'
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlignVertical: 'center'
  },
  buttonsContainer: {
    flex: 1,
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 200,
    borderRadius: 20,
    marginTop: 120,
    marginBottom: 20,
    alignSelf: 'center'
  }
});

export default Home;
