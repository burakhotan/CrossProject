/* eslint-disable */

import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class NavigatorButton extends Component {
  render() {
    const { screen, navigation, btnText } = this.props;
    return (
      <TouchableOpacity onPress={() => navigation.navigate(screen)}>
        <View style={styles.buttonContainer}>
          <Text style={styles.whiteTxt}>{btnText}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 5,
    backgroundColor: '#2c8543',
    alignItems: 'center',
    marginBottom:15,
    marginHorizontal:25,
    borderRadius:8

  },
  whiteTxt:{
    color:'#ffffff',
    
  }
});