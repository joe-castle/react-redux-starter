import React, { PropTypes } from 'react';
import classNames from 'classnames';

function TodoList({
  todos,
  completeTodo,
}) {
  return (
    <ul className="TodoList">
      {todos.map(todo => (
        <li
          key={todo.id}
          className={classNames(
            'TodoList__item',
            { 'TodoList__item--complete': todo.complete }
          )}
          onClick={() => completeTodo(todo.id)}
        >
          {todo.todoText}
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todoText: PropTypes.string,
  completeTodo: PropTypes.func,
};

export default TodoList;
