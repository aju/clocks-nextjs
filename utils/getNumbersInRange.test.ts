import { getNumbersInRange } from './getNumbersInRange';

describe('getNumbersInRange function', () => {
  test('should return an array with all the numbers between the start and end values', () => {
    expect(getNumbersInRange(1, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(getNumbersInRange(-3, 3)).toEqual([-3, -2, -1, 0, 1, 2, 3]);
    expect(getNumbersInRange(10, 10)).toEqual([10]);
  });

  test('should return an empty array when the start value is greater than the end value', () => {
    expect(getNumbersInRange(5, 1)).toEqual([]);
  });
});
