/* eslint-disable */
import React, {Component,} from 'react';
import {Platform, StyleSheet, Text, View,Button, TouchableOpacity,Image, ScrollView} from 'react-native';

//components



export default class Product extends Component {

  render() {
      const {prodName,quantity,price} = this.props;
    return (
      <View style={styles.container}>
        <Text>{prodName}</Text>
        <Text>{quantity}</Text>
        <Text>{price}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({ //STYLES
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    flexDirection:'row',
  },
   
  
  
});