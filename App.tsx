import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { TodoEntity } from './entities/TodoEntity';

export default function App() {
  const [todos, setTodos] = useState([new TodoEntity(1, 'Take over the world'), 
    new TodoEntity(2, 'Feed the cat'),new TodoEntity(3, 'Learn ChatGPT')])

  

  return (
    <View style={styles.container}>
      <TodoList todos={todos} setTodos={setTodos}/>
       
      <TodoInput setTodos={setTodos}/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
