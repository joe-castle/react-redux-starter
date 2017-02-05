import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  input: {
    border: '1px solid #ccc',
    fontSize: '25px',
    padding: '15px',
    width: '100%',
    ':hover': {
      borderColor: 'rgba(0,0,0,.7)',
    },
  },
});

export default class TodoForm extends React.Component {
  static propTypes = {
    ADD_TODO: PropTypes.func.isRequired,
  }

  render() {
    return (
      <form
        className="TodoForm"
        onSubmit={(ev) => {
          ev.preventDefault();
          this.props.ADD_TODO(this.todoText.value);
          this.todoText.value = '';
        }}
      >
        <input
          className={css(styles.input)}
          placeholder="Enter new todo..."
          ref={(c) => { this.todoText = c; }}
        />
      </form>
    );
  }
}
