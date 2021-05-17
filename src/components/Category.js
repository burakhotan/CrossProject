/* eslint-disable */
import React, { Component, } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default class Category extends Component {
    delete = ({ id }) => {
        axios.delete(`https://northwind.vercel.app/api/categories/${id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }
    render() {
        const { description, name, id, navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.whiteTxt}>{name}</Text>
                <Text style={styles.whiteTxt}>{description}</Text>
                <View style={styles.btnContainer}>
                    <TouchableOpacity
                        style={styles.styleBtn}
                        onPress={() => this.delete({ id })}
                    >
                        <Text style={styles.whiteTxt}>Delete</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.styleBtn}
                        onPress={() => navigation.navigate('UpdateCategory', { id: id, name: name, description: description })}
                    >
                        <Text style={styles.whiteTxt}>Update</Text>
                    </TouchableOpacity>
                </View>
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

    },
    styleBtn: {
        backgroundColor: '#1b692f',
        alignItems: 'center',
        marginHorizontal: 60,
        borderRadius: 5,
        marginTop: 5,
        padding: 5
    },
    btnContainer: {
        flexDirection: 'row'
    }
});