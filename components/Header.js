import React from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableOpacity, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { Header, Icon } from 'react-native-elements';

const HeaderComponent = ({ headerNavigation }) => {
  return (
    <Header
      backgroundColor="white"
      fontFamily="SavoyeLetPlain"
      leftComponent={
      <TouchableOpacity onPress={() => headerNavigation.goBack()}>
        <Icon name="chevron-left" color="teal" />
      </TouchableOpacity>}
      centerComponent={{ text: 'Mr. Mixologist', style: { color: 'teal', fontSize: 17 } }}
      rightComponent={
        <TouchableOpacity onPress={() => headerNavigation.navigate('Main')}>
          <Icon name="local-bar" color="teal" />
        </TouchableOpacity>}
      />
  )
}

export default HeaderComponent;
