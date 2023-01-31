import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TodoEntity } from '../entities/TodoEntity';

interface Props {
  todoEntity: TodoEntity
  setTodos: (todos: any) => void
}


const Todo: React.FC<Props> = (p) => {

    const deleteTodo = (id: number) => {
        p.setTodos((todos: any) => todos.filter((todo: TodoEntity) => todo.id !== id) )
    }


    return (
    <TouchableOpacity onPress={() => deleteTodo(p.todoEntity.id)}>
        <View>
            <Text style={styles.todo}>{p.todoEntity.title}!</Text>
        </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
    todo: {
      fontSize: 24
    },
  });
export default Todo;