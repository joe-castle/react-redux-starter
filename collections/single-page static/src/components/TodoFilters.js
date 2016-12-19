import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';

import { Actions } from '../actions';

function TodoFilters({ filter, SET_FILTER }) {
  return (
    <div className="TodoFilters">
      <button
        className={classNames({ active: filter === 'All' })}
        onClick={() => SET_FILTER('All')}
      >
        All
      </button>
      <button
        className={classNames({ active: filter === 'Active' })}
        onClick={() => SET_FILTER('Active')}
      >
        Active
      </button>
      <button
        className={classNames({ active: filter === 'Completed' })}
        onClick={() => SET_FILTER('Completed')}
      >
        Completed
      </button>
    </div>
  );
}

TodoFilters.propTypes = {
  filter: PropTypes.string,
  SET_FILTER: PropTypes.func,
};

export default connect(
  ({ filter }) => ({ filter }),
  Actions,
)(TodoFilters);
