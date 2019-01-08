import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Input = styled.input`
  border: 1px solid #ccc;
  font-size: 25px;
  padding: 15px;
  width: 100%;

  &:hover {
    border-color: rgba(0, 0, 0, .7);
  }
`

export default class TodoForm extends React.Component {
  static propTypes = {
    ADD_TODO: PropTypes.func.isRequired
  }

  render () {
    return (
      <form
        className='TodoForm'
        onSubmit={(ev) => {
          ev.preventDefault()
          this.props.ADD_TODO(this.todoText.value)
          this.todoText.value = ''
        }}
      >
        <Input
          placeholder='Enter new todo...'
          ref={(c) => { this.todoText = c }}
        />
      </form>
    )
  }
}
