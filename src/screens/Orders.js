/* eslint-disable */
import React, { Component, useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
//components
import Order from '../components/Order.js'

const Orders = ({ navigation }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get(`https://northwind.vercel.app/api/orders`)
      .then(res => {
        res.data.sort(sortByProperty("orderDate"));
        setOrders(res.data);

      })
  });

  function sortByProperty(property) {
    return function (a, b) {
      if (a[property] > b[property])
        return 1;
      else if (a[property] < b[property])
        return -1;

      return 0;
    }
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        renderItem={({ item }) =>
          <Order
            id={item.id}
            unitPrice={item.details[0].unitPrice}
            customerId={item.customerId}
            date={item.orderDate}
            quantity={item.details[0].quantity}
          />
        }
      />
    </View>
  );
}
export default Orders;

const styles = StyleSheet.create({ //STYLES
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});