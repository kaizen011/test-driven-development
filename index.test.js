const sum = require('./index');
const val = require('./index');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adding floating point numbers', () => {
    //expect(value).toBe(0.3);           This won't work because of rounding error
    expect(val(0.1, 0.2)).toBeCloseTo(0.3);
});
