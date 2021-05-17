/* eslint-disable */
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity, Image, ScrollView } from 'react-native';



export default class ProductDetailsScreen extends Component {
    render() {
        const { selectedItem } = this.props.route.params;
        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text>ID: {selectedItem.id}</Text>
                    <Text>Product Name: {selectedItem.name}</Text>
                    <Text>Quantity Per Unit: {selectedItem.quantityPerUnit}</Text>
                    <Text>Price: {selectedItem.unitPrice}</Text>
                    <Text>Stock: {selectedItem.unitsInStock}</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({ //STYLES
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        flex: 0.2,
        backgroundColor: '#1b692f',
        padding: 15,
        borderRadius: 5
    }
});