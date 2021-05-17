/* eslint-disable */
import React, { Component, useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import axios from 'axios';
//components
const AddCategory = ({ navigation }) => {
    const [catDescription, setCatDescription] = useState('');
    const [catName, setCatName] = useState('');

    const add = () => {
        axios.post(`https://northwind.vercel.app/api/categories`, { description: catDescription, name: catName })
            .then(res => {
                console.log(res);
                console.log(res.data);
                navigation.navigate('Categories')
            })
    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Category Name'
                value={catName}
                onChangeText={setCatName}
            />
            <TextInput
                style={styles.input}
                placeholder='Description'
                value={catDescription}
                onChangeText={setCatDescription}
            />
            <TouchableOpacity
                style={styles.addBtn}
                onPress={() => add()}
            >
                <Text style={styles.whiteTxt}>Add</Text>
            </TouchableOpacity>
        </View>
    );
}

export default AddCategory;
const styles = StyleSheet.create({ //STYLES
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginVertical: 3,
        marginHorizontal: 10,
        justifyContent: 'center'

    },
    input: {
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#1b692f'
    },
    addBtn: {
        backgroundColor: '#1b692f',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.1,
        borderRadius: 5
    },
    whiteTxt: {
        color: '#ffffff',

    },
});