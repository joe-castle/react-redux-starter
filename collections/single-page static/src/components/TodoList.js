import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';

import { Actions } from '../actions';

function visibleTodos(todos, filter) {
  switch (filter) {
    default:
    case 'All':
      return todos;

    case 'Active':
      return todos.filter(todo => !todo.complete);

    case 'Completed':
      return todos.filter(todo => todo.complete);
  }
}

function TodoList({
  todos,
  COMPLETE_TODO,
  DELETE_TODO,
}) {
  /* eslint-disable jsx-a11y/no-static-element-interactions */
  return (
    <ul className="TodoList">
      {todos.map(todo => (
        <li
          key={todo.id}
          className={classNames({ complete: todo.complete })}
          onClick={() => COMPLETE_TODO(todo.id)}
        >
          <span className="text">{todo.todoText}</span>
          <span className="delete" onClick={() => DELETE_TODO(todo.id)}>x</span>
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
  })),
  COMPLETE_TODO: PropTypes.func,
  DELETE_TODO: PropTypes.func,
};

export default connect(
  ({ todos, filter }) => ({ todos: visibleTodos(todos, filter) }),
  Actions,
)(TodoList);
