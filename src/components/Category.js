/* eslint-disable */
import React, { Component, } from 'react';
import { StyleSheet, Text, View } from 'react-native';

//components
export default class Category extends Component {

    render() {
        const { description, name } = this.props;
        return (
            <View style={styles.container}>
                <Text>Description:{description}</Text>
                <Text>Category: {name}</Text>
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