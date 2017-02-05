import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  todoList: {
    padding: '0',
  },
  todoItem: {
    border: '1px solid #ccc',
    borderBottom: '0',
    cursor: 'pointer',
    fontSize: '18px',
    listStyle: 'none',
    padding: '10px',
    position: 'relative',
    ':hover': {
      background: 'rgba(80%, 80%, 80%, .2)',
    },
    ':last-child': {
      borderBottom: '1px solid #ccc',
    },
  },
  todoItemComplete: {
    background: '#eee',
  },
  todoTextComplete: {
    fontStyle: 'italic',
    textDecoration: 'line-through',
  },
  deleteTodo: {
    color: '#ccc',
    fontWeight: '700',
    position: 'absolute',
    right: '10px',
    ':hover': {
      color: 'rgba(85.1%, 0%, 0%, 0.859)',
    },
  },
});

function TodoList({
  todos,
  COMPLETE_TODO,
  DELETE_TODO,
}) {
  /* eslint-disable jsx-a11y/no-static-element-interactions */
  return (
    <ul className={css(styles.todoList)}>
      {todos.map(todo => (
        <li
          key={todo.id}
          className={css(
            styles.todoItem,
            todo.complete && styles.todoItemComplete,
          )}
          onClick={() => COMPLETE_TODO(todo.id)}
        >
          <span className={css(todo.complete && styles.todoTextComplete)}>{todo.todoText}</span>
          <span
            className={css(styles.deleteTodo)}
            onClick={(ev) => {
              // Stop complete from firing and throwing an error
              ev.stopPropagation();
              DELETE_TODO(todo.id);
            }}
          >
            x
          </span>
        </li>
      ))}
    </ul>
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
