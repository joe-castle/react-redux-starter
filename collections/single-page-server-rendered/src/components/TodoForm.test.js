import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { Actions } from '../actions'

class TodoForm extends React.Component {
  static propTypes = {
    ADD_TODO: PropTypes.func
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
        <input placeholder='Enter new todo...' ref={(c) => { this.todoText = c }} />
      </form>
    )
  }
}

export default connect(null, Actions)(TodoForm)
