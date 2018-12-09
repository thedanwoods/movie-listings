import arrayContainsArray from './arrayContainsArray';

describe('arrayContainsArray', () => {
  const superset = [1, 3, 5, 7, 9];
  it('returns true if superset contains subset', () => {
    expect(arrayContainsArray(superset, [1])).toBe(true);
    expect(arrayContainsArray(superset, [2])).toBe(false);
    expect(arrayContainsArray(superset, [3, 5])).toBe(true);
    expect(arrayContainsArray(superset, [3, 6])).toBe(false);
    expect(arrayContainsArray(superset, [...superset])).toBe(true);
    expect(arrayContainsArray(superset, superset)).toBe(true);
    expect(arrayContainsArray([1], superset)).toBe(false);
    expect(arrayContainsArray(superset, [])).toBe(false);
    expect(arrayContainsArray([], [])).toBe(false);
    expect(arrayContainsArray(['a', 'b'], ['a'])).toBe(true);
  });
});
