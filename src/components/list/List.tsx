import React, { ReactNode, useEffect } from 'react';
import Todo from '../todo/Todo';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { todosState, TodoType } from '../../recoil/todo';

type ListProps = {};

const List = ({}: ListProps) => {
  const [todos, setTodos] = useRecoilState<TodoType[]>(todosState);

  const handleDelete = (id: number) => {
    const yes = todos.filter((value) => value.id !== id);
    setTodos([...yes]);
  };

  const handleToggle = (id: number) => {
    const yes = todos.filter((value) => value.id === id);
    const yes2 = todos.filter((value) => value.id !== id);
    const yes3 = { ...yes[0], isDone: !yes[0].isDone };

    setTodos([...yes2, yes3]);
  };

  return (
    <ListDiv>
      <ListH1>Working.. 🔥</ListH1>

      {todos
        .filter((todo) => todo.isDone === false)
        .map((val, index) => {
          return (
            <Todo
              key={index}
              todo={val}
              handleDelete={handleDelete}
              handleToggle={handleToggle}
            />
          );
        })}

      <ListH1>Done..! 🎉</ListH1>

      {todos
        .filter((todo) => todo.isDone === true)
        .map((val, index) => {
          return (
            <Todo
              key={index}
              todo={val}
              handleDelete={handleDelete}
              handleToggle={handleToggle}
            />
          );
        })}
    </ListDiv>
  );
};
export default List;

const ListDiv = styled.section``;

const ListH1 = styled.h1`
  font-size: 1.8rem;
`;
