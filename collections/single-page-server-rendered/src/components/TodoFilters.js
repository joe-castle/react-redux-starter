import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TopStyle = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
  width: 100%;
`

const FilterButton = styled.button`
  background: ${props => props.active ? '#ccc' : 'none'};
  color: ${props => props.active ? 'white' : '#ccc'};
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
`

function TodoFilters ({ filter, SET_FILTER }) {
  return (
    <TopStyle>
      <FilterButton
        active={filter === 'All'}
        onClick={() => SET_FILTER('All')}
      >
        All
      </FilterButton>
      <FilterButton
        active={filter === 'Active'}
        onClick={() => SET_FILTER('Active')}
      >
        Active
      </FilterButton>
      <FilterButton
        active={filter === 'Completed'}
        onClick={() => SET_FILTER('Completed')}
      >
        Completed
      </FilterButton>
    </TopStyle>
  )
}

TodoFilters.propTypes = {
  filter: PropTypes.string.isRequired,
  SET_FILTER: PropTypes.func.isRequired
}

export default TodoFilters
