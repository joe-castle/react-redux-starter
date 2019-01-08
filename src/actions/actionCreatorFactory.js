/**
 * @description Action Creator Factory
 * Makes action creator functions with provided type and keys.
 *
 * @param {String} type - The action type.
 * @param {Array} keys - All the keys for an action as an array.
 *
 * @return {Function} The action creator function.
 */
export default (type, ...keys) => (...values) => (
  keys.reduce((action, key, index) => ({
    ...action,
    [key]: values[index],
  }), { type })
);