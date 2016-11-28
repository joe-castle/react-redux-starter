
/**
 * KARMA!
 * DATABASE!
 * ENZYME!
 * REACT-SCRIPTS!
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { addTodo, completeTodo } from '../actions/todos';
import TodoList from '../components/TodoList';

// Class used as hot-reloader does not work with pure function components
// as the entry point.
export class App extends React.Component {
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      todoText: PropTypes.string,
      complete: PropTypes.bool,
      id: PropTypes.string,
    })),
    dispatch: PropTypes.func,
  };

  render() {
    const { todos, dispatch } = this.props;

    return (
      <div className="App">
        <main>
          <h1>React & Redux Starter Project</h1>
          <h4>Todo Example</h4>
          <form
            onSubmit={(ev) => {
              ev.preventDefault();
              dispatch(addTodo(this.addTodo.value));
              this.addTodo.value = '';
            }}
          >
            <input ref={(c) => { this.addTodo = c; }} />
          </form>
          <TodoList
            todos={todos}
            completeTodo={id => dispatch(completeTodo(id))}
          />
        </main>
      </div>
    );
  }
}

export default connect(
  ({ todos }) => ({ todos }),
)(App);
