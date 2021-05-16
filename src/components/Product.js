/* eslint-disable */
import React, { Component, } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import axios from 'axios';
//components
export default class Product extends Component {
  delete = ({ id }) => {
    axios.delete(`https://northwind.vercel.app/api/products/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  render() {
    const { id, prodName, quantity, price, item, navigation } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProductDetails', { selectedItem: item })}
        >
          <Text>{prodName}</Text>
          <Text>{quantity}</Text>
          <Text>{price}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.delete({ id })}
        >
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
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