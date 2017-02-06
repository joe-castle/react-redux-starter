import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

/**
 * TODO: Fix stles, currently, not last-child is not selecting correctly
 * so borders look off.
 */

const styles = StyleSheet.create({
  todoList: {
    padding: '0',
  },
  todoItem: {
    cursor: 'pointer',
    fontSize: '18px',
    listStyle: 'none',
    position: 'relative',
  },
  todoText: {
    border: '1px solid #ccc',
    display: 'inline-block',
    padding: '10px',
    width: '90%',
    ':hover': {
      background: 'rgba(80%, 80%, 80%, .2)',
    },
    ':not(:last-child)': {
      borderBottom: '0',
    },
  },
  todoTextComplete: {
    background: '#eee',
    fontStyle: 'italic',
    textDecoration: 'line-through',
  },
  deleteTodo: {
    border: '1px solid #ccc',
    color: '#ccc',
    display: 'inline-block',
    fontWeight: '700',
    height: '100%',
    position: 'absolute',
    right: 0,
    textAlign: 'center',
    width: '9%',
    ':hover': {
      color: 'white',
      background: 'rgba(85.1%, 0%, 0%, 0.6)',
    },
    ':not(:last-child)': {
      borderBottom: '0',
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
          className={css(styles.todoItem)}
          key={todo.id}
        >
          <span
            className={css(
              styles.todoText,
              todo.complete && styles.todoTextComplete,
            )}
            onClick={() => COMPLETE_TODO(todo.id)}
          >
            {todo.todoText}
          </span>
          <span
            className={css(styles.deleteTodo)}
            onClick={() => DELETE_TODO(todo.id)}
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
