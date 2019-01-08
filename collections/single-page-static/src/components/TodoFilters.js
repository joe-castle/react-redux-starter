import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Filters = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
  width: 100%;
`;

const FilterButton = styled.button`
  background: ${({ active }) => active ? '#ccc' : 'none'};
  color: ${({ active }) => active ? 'white' : '#ccc'};
  cursor: pointer;
  border: 1px solid #ccc;
  font-size: 18px;
  font-weight: 300;
  padding: 10px;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    background: #ccc;
    color: white;
    outline: none;
  }
`;

function TodoFilters({ filter, SET_FILTER }) {
  return (
    <Filters>
      {['All', 'Active', 'Completed'].map(item => (
        <FilterButton
          active={filter === item}
          onClick={() => SET_FILTER(item)}
        >
          {item}
        </FilterButton>
      ))}
    </Filters>
  );
}

TodoFilters.propTypes = {
  filter: PropTypes.string.isRequired,
  SET_FILTER: PropTypes.func.isRequired,
};

export default TodoFilters;

