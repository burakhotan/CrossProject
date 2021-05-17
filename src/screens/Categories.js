/* eslint-disable */
import React, { Component, useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, Text } from 'react-native';
//components
import Category from '../components/Category.js';

const Categories = ({ navigation }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(`https://northwind.vercel.app/api/categories`)
      .then(res => {
        setCategories(res.data);
      })
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => navigation.navigate('AddCategory')}
      >
        <Text style={styles.whiteTxt}>ADD</Text>
      </TouchableOpacity>
      <FlatList
        data={categories}
        renderItem={({ item }) =>
          <Category
            id={item.id}
            description={item.description}
            name={item.name}
            navigation={navigation}
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
  addBtn: {
    backgroundColor: '#1b692f',
    alignSelf: 'center',
    marginVertical: 10,
    paddingVertical: 13,
    paddingHorizontal: 45,
    borderRadius: 10
  },
  whiteTxt: {
    color: '#ffffff',

  },
});