import React from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableOpacity, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { Header, Icon } from 'react-native-elements';

const HeaderComponent = ({ navigation }) => {
  return (
    <Header
        backgroundColor="white"
        fontFamily="SavoyeLetPlain"
        leftComponent={
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name='arrow-back' color='teal' />
        </TouchableOpacity>}
        centerComponent={{ text: 'Mr. Mixologist', style: { color: 'teal', fontSize: 17 } }}
        rightComponent={{ icon: 'home', color: 'teal' }}
      />
  )
}

export default HeaderComponent;
