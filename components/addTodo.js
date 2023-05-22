import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

export default function AddTodo({ submitTodo }) {
    const [text, setText] = useState('');

    const changeHandler = (item) => {
        setText(item);
    };

    return (
        <View style={styles.addTodo}>
            <TextInput 
                style={styles.input} 
                placeholder='Add New todo...'
                placeholderTextColor="#6a6a6a"
                onChangeText={changeHandler} 
                value={text} 
            />
            <Pressable style={styles.addButton} onPress={() => submitTodo(text)}>
                <Text style={styles.addButtonText}>+</Text>
            </Pressable>

        </View>
    );
}

const styles = StyleSheet.create({
    addTodo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        marginHorizontal: '1rem',
        marginVertical: 5,
        paddingVertical: '0.5rem',
        paddingHorizontal: '1rem',
        borderWidth: 1,
        borderColor: '#ddd',
        flex: 1,
    },
    addButton: {
        paddingHorizontal: '1.3rem',
        backgroundColor:'#0298A9',
        borderRadius: '10px',
    },
    addButtonText: {
        fontSize: '1.5rem',
        color: 'white',
        paddingBottom: 3
    }
})