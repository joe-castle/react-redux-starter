import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border: 1px solid #ccc;
  font-size: 25px;
  padding: 15px;
  width: 100%;

  &:hover {
    border-color: rgba(0,0,0,.7);
  },
`;

export default class TodoForm extends React.Component {
  static propTypes = {
    ADD_TODO: PropTypes.func.isRequired,
  }

  constructor() {
    super();

    this.state = {
      todoText: '',
    };
  }

  handleTextChange = (ev) => {
    this.setState({ todoText: ev.target.value });
  }

  handleSubmitTodo = (ev) => {
    ev.preventDefault();
    this.props.ADD_TODO(this.state.todoText);
    this.setState({ todoText: '' });
  }

  render() {
    return (
      <form
        className="TodoForm"
        onSubmit={this.handleSubmitTodo}
      >
        <Input
          placeholder="Enter new todo..."
          onChange={this.handleTextChange}
          value={this.state.todoText}
        />
      </form>
    );
  }
}
