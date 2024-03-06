const { sum, floatingPoint, capitalize, reverseString, calculator, caesarCipher } = require('./index');


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




// CaesarCipher



describe('Caesar Cipher', () => {
  test('Encrypts a string with shift factor 0', () => {
    expect(caesarCipher('Hello', 0)).toBe('Hello');
  });

  test('Encrypts a string with positive shift factor', () => {
    expect(caesarCipher('Hello', 1)).toBe('Ifmmp');
  });

  test('Encrypts a string with negative shift factor', () => {
    expect(caesarCipher('Hello', -1)).toBe('Gdkkn');
  });

  test('Handles uppercase letters correctly', () => {
    expect(caesarCipher('Hello World', 5)).toBe('Mjqqt Btwqi');
  });

  test('Handles non-alphabetic characters correctly', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
  });

  test('Encrypts a string with large shift factor', () => {
    expect(caesarCipher('Hello', 26)).toBe('Hello');
  });

  test('Encrypts a string with shift factor greater than alphabet length', () => {
    expect(caesarCipher('Hello', 30)).toBe('Lipps');
  });
});