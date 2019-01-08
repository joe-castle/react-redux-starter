import { Constants } from '../actions'

export default function filter (state = 'All', {
  type,
  value
}) {
  switch (type) {
    case Constants.SET_FILTER:
      return value

    default:
      return state
  }
}
