export const INCREMENT_COUNTER = 'INCEREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

/**
 * @description Action Creator Factory
 * Makes action creator functions with provided type and keys.
 *
 * @param {String} type - The action type.
 * @param {Array} ...keys - All the keys for an action as an array.
 *
 * @return {Function} The action creator function.
 */
export default (type, ...keys) => (...values) =>
  keys.reduce((prev, key, index) => {
    prev[key] = values[index];
    return prev;
  }, {type})
