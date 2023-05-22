import React from 'react'
import {StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';
import deleteIcon from '../assets/delete.png';

export default function TodoItems({item, deleteItem}) {

    return (
        <View>
            { item.status == 1 ? 
                <View style={styles.todoItems}>
                    <Text style={styles.item}>{item.text}</Text>
                    <TouchableOpacity onPress={()=> deleteItem(item.key)} style={styles.deleteIconContainer}>
                        <Image source={deleteIcon} style={styles.deleteIcon}/>
                    </TouchableOpacity>
                </View> :
            <></>}
        </View>

    );
}

const styles = StyleSheet.create({
    todoItems: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    item: {
        flex: 1,
        marginVertical: '0.5rem',
        marginHorizontal: '1rem',
        paddingVertical: '0.7rem',
        paddingHorizontal: '1rem',
        borderWidth: 1,
        borderColor: '#0298A9',
        borderRadius: '15px',
        shadowColor: "#000000",
        shadowOffset: {
        width: 1,
        height: 4,
        },
        shadowOpacity:  0.17,
        shadowRadius: 3.05,
        elevation: 5
    },
    deleteIconContainer: {
        padding: 4,
        backgroundColor: '#2caab8',
        borderRadius: '25px',
        borderWidth: 0.1,
        borderColor: '#a3a3a3',
        shadowColor: "#000000",
        shadowOffset: {
        width: 1,
        height: 4,
        },
        shadowOpacity:  0.17,
        shadowRadius: 3.05,
        elevation: 5

    },
    deleteIcon: {
        height: 20,
        width: 20,
    }
})