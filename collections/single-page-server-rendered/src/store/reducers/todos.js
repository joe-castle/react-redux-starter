import { generate } from 'shortid'

import { Constants } from '../actions'

export default function todos (state = [], {
  id,
  type,
  todoText
}) {
  switch (type) {
    case Constants.ADD_TODO:
      return [
        ...state.slice(),
        {
          id: generate(),
          todoText,
          complete: false
        }
      ]

    case Constants.DELETE_TODO:
      return state.filter(todo => todo.id !== id)

    case Constants.COMPLETE_TODO: {
      const index = state.findIndex(todo => todo.id === id)

      return [
        ...state.slice(0, index),
        {
          ...state[index],
          complete: !state[index].complete
        },
        ...state.slice(index + 1)
      ]
    }

    default:
      return state
  }
}
