import React from 'react';

import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import TodoFilters from '../components/TodoFilters';

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <main>
          <div>
            <h2>todos</h2>
            <TodoForm />
            <TodoList />
            <TodoFilters />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
