/* eslint-disable */
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity, Image, ScrollView } from 'react-native';



export default class ProductDetailsScreen extends Component {
    render() {
        const { selectedItem } = this.props.route.params;
        return (
            <View style={styles.container}>
                <Text>{selectedItem.name}</Text>
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
});