/* eslint-disable */
import React, { Component, useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
//components
import Product from '../components/Product.js'

const Products = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`https://northwind.vercel.app/api/products`)
      .then(res => {
        setProducts(res.data);
      })
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) =>
          <Product
            prodName={item.name}
            quantity={item.quantityPerUnit}
            price={item.unitPrice}
            navigation={navigation}
            item={item}
          />
        }
      />
    </View>
  );
}
export default Products;

const styles = StyleSheet.create({ //STYLES
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});