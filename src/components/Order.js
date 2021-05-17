/* eslint-disable */
import React, { Component, } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
//components
export default class Order extends Component {

    render() {
        const { customerId, unitPrice, id, date, quantity } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.whiteTxt}>Date {date}</Text>
                <Text style={styles.whiteTxt}>Order: {id}</Text>
                <Text style={styles.whiteTxt}>Customer: {customerId}</Text>
                <Text style={styles.whiteTxt}>Quantity: {quantity}</Text>
                <Text style={styles.whiteTxt}>Price: {unitPrice}$</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({ //STYLES
    container: {
        flex: 1,
        flexDirection: 'column',
        borderWidth: 0.5,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginVertical: 3,
        marginHorizontal: 10,
        backgroundColor: "#2c8543",
    },
    whiteTxt: {
        color: '#ffffff',

    }
});