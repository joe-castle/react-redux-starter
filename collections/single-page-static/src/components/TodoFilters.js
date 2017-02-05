import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  todoFilters: {
    display: 'flex',
    justifyContent: 'center',
    margin: '10px 0',
    width: '100%',
  },
  filterButton: {
    background: 'none',
    color: '#ccc',
    cursor: 'pointer',
    border: '1px solid #ccc',
    fontSize: '18px',
    fontWeight: '300',
    padding: '10px',
    ':not(:last-child)': {
      marginRight: '10px',
    },
    ':hover': {
      background: '#ccc',
      color: 'white',
      outline: 'none',
    },
  },
  filterActive: {
    background: '#ccc',
    color: 'white',
  },
});

function TodoFilters({ filter, SET_FILTER }) {
  return (
    <div className={css(styles.todoFilters)}>
      <button
        className={css(
          styles.filterButton,
          filter === 'All' && styles.filterActive,
        )}
        onClick={() => SET_FILTER('All')}
      >
        All
      </button>
      <button
        className={css(
          styles.filterButton,
          filter === 'Active' && styles.filterActive,
        )}
        onClick={() => SET_FILTER('Active')}
      >
        Active
      </button>
      <button
        className={css(
          styles.filterButton,
          filter === 'Completed' && styles.filterActive,
        )}
        onClick={() => SET_FILTER('Completed')}
      >
        Completed
      </button>
    </div>
  );
}

TodoFilters.propTypes = {
  filter: PropTypes.string.isRequired,
  SET_FILTER: PropTypes.func.isRequired,
};

export default TodoFilters;

