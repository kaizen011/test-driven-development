const { sum, floatingPoint, capitalize, reverseString, calculator } = require('./index');


test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adding floating point numbers', () => {
    //expect(value).toBe(0.3);           This won't work because of rounding error
    expect(floatingPoint(0.1, 0.2)).toBeCloseTo(0.3);
});


// Odin Poject Testing Practice Assignment


test('capitalized string', () => {
  expect(capitalize('hackerstuff')).toMatch('Hackerstuff');
});

test('reversed string', () => {
  expect(reverseString('counter')).toMatch('retnuoc');
})

describe('calculator', () => {
  
  test('added values', () => {
    expect(calculator.add(5, 4)).toBe(9);
  });

  test('multipled values', () => {
    expect(calculator.multiply(6, 6)).toBe(36);
  });

  test('divided values', () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });

  test('subtract values', () => {
    expect(calculator.subtract(535, 35)).toBe(500);
  })

});