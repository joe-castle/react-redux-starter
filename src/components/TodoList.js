import React, { PropTypes } from 'react';
import classNames from 'classnames';

function TodoList({
  todos,
  completeTodo,
}) {
  /* eslint-disable jsx-a11y/no-static-element-interactions */
  return (
    <ul className="TodoList">
      {todos.map(todo => (
        <li
          key={todo.id}
          className={classNames({
            TodoList__item: true,
            'TodoList__item--complete': todo.complete,
          })}
          onClick={() => completeTodo(todo.id)}
        >
          {todo.todoText}
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
  completeTodo: PropTypes.func,
};

export default TodoList;
