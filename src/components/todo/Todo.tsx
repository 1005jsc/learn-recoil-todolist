import React from 'react';
import styled from 'styled-components';
import { todosState, TodoType } from '../../recoil/todo';

import { useRecoilState } from 'recoil';

type TodoProps = {
  todo: TodoType;
  handleDelete: (id: number) => void;
  handleToggle: (id: number) => void;
};

const Todo = ({ todo, handleDelete, handleToggle }: TodoProps) => {
  const { id, title, content, isDone } = todo;

  const handleDeleteYo = () => {
    handleDelete(id);
  };

  const handleToggleYo = () => {
    handleToggle(id);
  };

  return (
    <TodoDiv>
      <TodoH1>{title}</TodoH1>

      <TodoH2>{content}</TodoH2>

      <TodoButtonContainer>
        <TodoButton borderColor='red' onClick={handleDeleteYo}>
          삭제하기
        </TodoButton>
        <TodoButton borderColor='green' onClick={handleToggleYo}>
          {isDone ? '취소' : '완료'}
        </TodoButton>
      </TodoButtonContainer>
    </TodoDiv>
  );
};
export default Todo;

const TodoDiv = styled.div`
  width: 25rem;
  display: inline-block;

  border: 6px solid #008080;
  border-radius: 1rem;
  padding: 2rem 1.5rem;
  margin: 1rem;
`;

const TodoH1 = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

const TodoH2 = styled.p`
  font-size: 1.2rem;
  margin: 1.6rem 0;
`;

const TodoButtonContainer = styled.div`
  height: 4.6rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TodoButton = styled.button<{ borderColor: string }>`
  border: 3px solid
    ${({ borderColor = 'green' }: { borderColor: string }) => {
      return borderColor;
    }};
  width: 50%;
  margin: 0.6rem;
  height: 2.7rem;
  font-size: 0.9rem;
  border-radius: 0.6rem;
  background-color: transparent;
`;
