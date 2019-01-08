import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { hot } from 'react-hot-loader/root'
import styled from 'styled-components'

import { Actions } from '../store/actions'

import TodoList from '../components/TodoList'
import TodoForm from '../components/TodoForm'
import TodoFilters from '../components/TodoFilters'

const TopStyle = styled.div`
  margin: 100px auto;
  max-width: 600px;
`

const Main = styled.main`
  box-shadow: 2px 2px 5px 2px rgba(0,0,0,.1),
      -2px -2px 5px 2px rgba(0,0,0,.1),
      2px -2px 5px 2px rgba(0,0,0,.1),
      -2px 2px 5px 2px rgba(0,0,0,.1);
`

const Container = styled.div`
  margin: 0 auto;
  padding: 10px;
  width: 80%;
`

const Heading = styled.h2`
  color: rgba(85.1%, 0%, 0%, 0.859);
  font-size: 75px;
  font-weight: 300;
  margin: 0;
  padding: 15px;
  text-align: center;
`

function App (props) {
  return (
    <TopStyle>
      <Main>
        <Container>
          <Heading>todos</Heading>
          <TodoForm ADD_TODO={props.ADD_TODO} />
          <TodoList
            todos={props.todos}
            COMPLETE_TODO={props.COMPLETE_TODO}
            DELETE_TODO={props.DELETE_TODO}
          />
          <TodoFilters
            filter={props.filter}
            SET_FILTER={props.SET_FILTER}
          />
        </Container>
      </Main>
    </TopStyle>
  )
}

App.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    todoText: PropTypes.string,
    complete: PropTypes.bool,
    id: PropTypes.string
  })).isRequired,
  filter: PropTypes.string.isRequired,
  COMPLETE_TODO: PropTypes.func.isRequired,
  DELETE_TODO: PropTypes.func.isRequired,
  ADD_TODO: PropTypes.func.isRequired,
  SET_FILTER: PropTypes.func.isRequired
}

function visibleTodos (todos, filter) {
  switch (filter) {
    default:
    case 'All':
      return todos

    case 'Active':
      return todos.filter(todo => !todo.complete)

    case 'Completed':
      return todos.filter(todo => todo.complete)
  }
}

function mapStateToProps ({ todos, filter }) {
  return {
    todos: visibleTodos(todos, filter),
    filter
  }
}

export default hot(connect(mapStateToProps, Actions)(App))
