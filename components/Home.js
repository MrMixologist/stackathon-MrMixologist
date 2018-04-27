import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import { StackNavigator } from 'react-navigation';


const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.text}>Mr. Mixologist here to serve!</Text>
    <Image
    source={require('../images/bartender2.png')}
    />
    <Button
    onPress={() => navigation.navigate('Ingredient List')}
    title="Select Ingredients"
    />
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
    color: 'black',
    fontSize: 25
  },
});

export default Home;
