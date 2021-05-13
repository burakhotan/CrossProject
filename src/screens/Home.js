/* eslint-disable */
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

//components

import NavigatorButton from '../components/NavigatorButton.js'

export default class Home extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <NavigatorButton
          btnText='Products'
          screen={'Products'}
          navigation={navigation}
        />
        <NavigatorButton
          btnText='Categories'
          screen={'Categories'}
          navigation={navigation}
        />
        <NavigatorButton
          btnText='Orders'
          screen={'Orders'}
          navigation={navigation}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({ //STYLES
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center'
  },



});