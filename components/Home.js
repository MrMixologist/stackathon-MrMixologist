import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
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
      <Text style={styles.text}>Mr. Mixologist</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Login/Signup</Text>
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
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 70,
    textShadowColor: 'white',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 100,
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
    justifyContent: 'flex-end',
    paddingBottom: 75
  },
  button: {
    backgroundColor: 'rgba(0,128,128,0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 200,
    borderRadius: 20,
    marginBottom: 20,
    alignSelf: 'center'
  }
});

export default Home;
