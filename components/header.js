import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {

    return (
        <View style={styles.header}>
            <Text style={styles.title}>Todo App</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
      backgroundColor: '#0298A9',
      paddingVertical: '10px',
    },
    title: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: '1.1rem',
    }
})   