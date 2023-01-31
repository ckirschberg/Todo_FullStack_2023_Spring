import React from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import { TodoEntity } from '../entities/TodoEntity';
import Todo from './Todo';

interface Props {
  todos: TodoEntity[]
}

const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <SafeAreaView >
      <FlatList
        data={todos}
        renderItem={({item}) => <Todo todoEntity={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default TodoList;