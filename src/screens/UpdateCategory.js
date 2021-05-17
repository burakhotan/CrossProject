/* eslint-disable */
import React, { Component, useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import axios from 'axios';
//components
const UpdateCategory = ({ navigation, route }) => {

    const update = () => {
        axios.put(`https://northwind.vercel.app/api/categories/${id}`, { description: catDescription, name: catName })
            .then(res => {
                console.log(res);
                console.log(res.data);
                navigation.navigate('Categories')
            })
    }

    const { id, name, description } = route.params;
    const [catDescription, setCatDescription] = useState(description);
    const [catName, setCatName] = useState(name);
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                defaultValue={name}
                value={catName}
                onChangeText={setCatName}
            />
            <TextInput
                style={styles.input}
                defaultValue={description}
                value={catDescription}
                onChangeText={setCatDescription}
            />
            <TouchableOpacity
                style={styles.updateBtn}
                onPress={() => update()}
            >
                <Text>Update</Text>
            </TouchableOpacity>
        </View>
    );
}

export default UpdateCategory;
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
    updateBtn: {
        backgroundColor: '#1b692f',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.1,
        borderRadius: 5
    }
});