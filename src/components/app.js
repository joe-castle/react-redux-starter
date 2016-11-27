import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { addTodo, completeTodo } from '../actions/todoActions';
import TodoList from '../components/TodoList';

// Class used as hot-reloader does not work with pure function components
// as the entry point.
class App extends React.Component {
  static propTypes = {
    todos: PropTypes.array,
    dispatch: PropTypes.func,
  };

  render() {
    const { todos, dispatch } = this.props;

    return (
      <div className="container">
        <header></header>
        <main>
          <h1>React & Redux Starter Project</h1>
          <h4>Todo Example</h4>
          <form
            onSubmit={e => {
              e.preventDefault();
              dispatch(addTodo(this.refs.addTodo.value));
              this.refs.addTodo.value = '';
            }}
          >
            <input ref="addTodo" />
          </form>
          <TodoList
            todos={todos}
            completeTodo={id => dispatch(completeTodo(id))}
          />
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default connect(
  ({ todos }) => ({ todos })
)(App);
