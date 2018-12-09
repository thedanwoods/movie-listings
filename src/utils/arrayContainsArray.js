// Returns true if all values in subset are in superset
const arrayContainsArray = (superset, subset) =>
  !subset.length ? false : subset.every(value => superset.includes(value));

export default arrayContainsArray;