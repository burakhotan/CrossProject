/* eslint-disable */
import React, { Component, useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
//components
import Category from '../components/Category.js';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(`https://northwind.vercel.app/api/categories`)
      .then(res => {
        setCategories(res.data);
      })
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) =>
          <Category
            description={item.description}
            name={item.name}
          />
        }
      />
    </View>
  );
}
export default Categories;

const styles = StyleSheet.create({ //STYLES
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});