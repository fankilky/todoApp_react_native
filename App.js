import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert } from 'react-native';
import Header from './components/header';
import TodoItems from './components/todoItems';
import AddTodo from './components/addTodo';
import { Dimensions } from 'react-native';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' , status: 1},
    { text: 'create an app', key: '2', status: 1 },
    { text: '123', key: '3', status: 1 },
    { text: '2342', key: '4', status: 1 },
    { text: 'play on the switch', key: '5', status: 0 }
  ]);

  const deleteItem = (key) => {
    console.log(`pressed`);
    setTodos( prevTodos => prevTodos.map(todo => {
      if (todo.key === key) {
        return { ...todo, status: 0 };
      }
      return todo;
    }));
  }

  const submitTodo = (text) => {
    if(text.length > 3){
      const newIndex = todos.length + 1;
      setTodos(prevTodos => {
        return [
          { text, key: newIndex.toString(), status: 1 },
          ...prevTodos
        ];
      });
      console.log(todos)
    } else {
      Alert.alert('OOPS', 'Todo must be over 3 characters long', [
        {text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }

  }

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <AddTodo submitTodo={submitTodo} />
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodoItems item={item} deleteItem={deleteItem}/>
          )}
        />
      </View>
    </View>
  );
}

const { width, height } = Dimensions.get('window');
console.log(width, height);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingVertical: '1rem',
    paddingHorizontal: '3rem',
  },
});
