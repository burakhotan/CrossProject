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
          <Text style={styles.whiteTxt}>{prodName}</Text>
          <Text style={styles.whiteTxt}>{quantity}</Text>
          <Text style={styles.whiteTxt}>{price}$</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteBtn}
          onPress={() => this.delete({ id })}
        >
          <Text style={styles.whiteTxt}>Delete</Text>
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
    backgroundColor: "#2c8543",
  },
  deleteBtn:{
    backgroundColor:'#1b692f',
    alignItems:'center',
    marginHorizontal:60,
    borderRadius:5,
    marginTop:5
  },
  whiteTxt:{
    color:'#ffffff',
    
  }
});