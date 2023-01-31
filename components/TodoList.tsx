import React from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import { TodoEntity } from '../entities/TodoEntity';
import Todo from './Todo';

interface Props {
  todos: TodoEntity[],
  setTodos: (todos: any) => void
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <SafeAreaView >
      <FlatList
        data={todos}
        renderItem={({item}) => <Todo todoEntity={item} setTodos={setTodos}/>}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default TodoList;