import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';

import { Actions } from '../store/actions';

import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import TodoFilters from '../components/TodoFilters';

const styles = StyleSheet.create({
  app: {
    margin: '100px auto',
    maxWidth: '600px',
  },
  main: {
    boxShadow: '2px 2px 5px 2px rgba(0,0,0,.1), ' +
      '-2px -2px 5px 2px rgba(0,0,0,.1), ' +
      '2px -2px 5px 2px rgba(0,0,0,.1), ' +
      '-2px 2px 5px 2px rgba(0,0,0,.1)',
  },
  container: {
    margin: '0 auto',
    padding: '10px',
    width: '80%',
  },
  heading: {
    color: 'rgba(85.1%, 0%, 0%, 0.859)',
    fontSize: '75px',
    fontWeight: '300',
    margin: '0',
    padding: '15px',
    textAlign: 'center',
  },
});

// Class is required at entry for hot-reloading
/* eslint-disable react/prefer-stateless-function */
export class App extends React.Component {
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      todoText: PropTypes.string,
      complete: PropTypes.bool,
      id: PropTypes.string,
    })).isRequired,
    filter: PropTypes.string.isRequired,
    COMPLETE_TODO: PropTypes.func.isRequired,
    DELETE_TODO: PropTypes.func.isRequired,
    ADD_TODO: PropTypes.func.isRequired,
    SET_FILTER: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div className={css(styles.app)}>
        <main className={css(styles.main)}>
          <div className={css(styles.container)}>
            <h2 className={css(styles.heading)}>todos</h2>
            <TodoForm ADD_TODO={this.props.ADD_TODO} />
            <TodoList
              todos={this.props.todos}
              COMPLETE_TODO={this.props.COMPLETE_TODO}
              DELETE_TODO={this.props.DELETE_TODO}
            />
            <TodoFilters
              filter={this.props.filter}
              SET_FILTER={this.props.SET_FILTER}
            />
          </div>
        </main>
      </div>
    );
  }
}

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

export default connect(
  ({ todos, filter }) => ({
    todos: visibleTodos(todos, filter),
    filter,
  }),
  Actions,
)(App);
