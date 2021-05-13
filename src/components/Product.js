/* eslint-disable */
import React, { Component, } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

//components
export default class Product extends Component {

  render() {
    const { prodName, quantity, price, item, navigation } = this.props;
    return (
      <TouchableOpacity style={styles.container}
        onPress={() => navigation.navigate('ProductDetails', { selectedItem: item })}
      >
        <Text>{prodName}</Text>
        <Text>{quantity}</Text>
        <Text>{price}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({ //STYLES
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    flexDirection: 'column',
    borderWidth: 0.5,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 3,
    marginHorizontal: 10,
    backgroundColor: "#eb4034",
  },
});