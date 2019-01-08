import React, { PropTypes } from 'react';
import styled from 'styled-components';

/**
 * TODO: Fix stles, currently, not last-child is not selecting correctly
 * so borders look off.
 */

const List = styled.ul`
  padding: 0;
`;

const TodoItem = styled.li`
  cursor: pointer;
  font-size: 18px;
  list-style: none;
  position: relative;
`;

const TodoText = styled.span`
  background: ${({ complete }) => complete ? '#eee' : 'none'}
  border: 1px solid #ccc;
  display: inline-block;
  font-style: ${({ complete }) => complete ? 'italic' : 'normal'}
  padding: 10px;
  text-decoration: ${({ complete }) => complete ? 'line-through' : 'none'}
  width: 90%;

  &:hover {
    background: rgba(80%, 80%, 80%, .2);
  }

  &:not(:last-child) {
    border-bottom: 0;
  },
`;

const TodoDelete = styled.span`
  border: 1px solid #ccc;
  color: #ccc;
  display: inline-block;
  font-weight: 700;
  height: 100%;
  position: absolute;
  right: 0;
  text-align: center;
  width: 9%;
  
  &:hover {
    color: white,
    background: rgba(85.1%, 0%, 0%, 0.6);
  }

  &:not(:last-child) {
    border-bottom: 0;
  }
`;

function TodoList({
  todos,
  COMPLETE_TODO,
  DELETE_TODO,
}) {
  /* eslint-disable jsx-a11y/no-static-element-interactions */
  return (
    <List>
      {todos.map(todo => (
        <TodoItem key={todo.id}>
          <TodoText
            complete={todo.complete}
            onClick={() => COMPLETE_TODO(todo.id)}
          >
            {todo.todoText}
          </TodoText>
          <TodoDelete onClick={() => DELETE_TODO(todo.id)}>x</TodoDelete>
        </TodoItem>
      ))}
    </List>
  );
  /* eslint-disable jsx-a11y/no-static-element-interactions */
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    todoText: PropTypes.string,
    complete: PropTypes.bool,
    id: PropTypes.string,
  })).isRequired,
  COMPLETE_TODO: PropTypes.func.isRequired,
  DELETE_TODO: PropTypes.func.isRequired,
};

export default TodoList;
