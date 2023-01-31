import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TodoEntity } from '../entities/TodoEntity';

interface Props {
  todoEntity: TodoEntity
}

const Todo: React.FC<Props> = (p) => {
  return (
    <View>
      <Text style={styles.todo}>{p.todoEntity.title}!</Text>
    </View>
  );
};


const styles = StyleSheet.create({
    todo: {
      fontSize: 24
    },
  });
export default Todo;