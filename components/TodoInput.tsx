import React, { useState } from 'react';
import { View, Text, SafeAreaView, Button, TextInput, StyleSheet } from 'react-native';
import { TodoEntity } from '../entities/TodoEntity';

interface Props {
    setTodos: (todos: any) => void;
}

const TodoInput: React.FC<Props> = (props) => {
    const [text, setText] = useState('')
 
    const addTodo = () => {
        const todo = new TodoEntity(Math.random(), text);
        props.setTodos((todos: any) => [...todos, todo])
    }
    return (
    <SafeAreaView>
    <TextInput
      style={styles.input}
      onChangeText={setText}
      value={text}
    />
    <Button title="Add" onPress={addTodo} />
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
  
export default TodoInput;