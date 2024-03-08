function sum(a, b) {
    return a + b;
  }

function floatingPoint(firstNum, secondNum) {
    return firstNum + secondNum;
  }

// Calculates the sum of an array

function sumGetter(arrayy){
    let i = 0;
    for(let num of arrayy){
       i = i + num;
    }    
    return i;
}


// Odin Project Testing Practice Assignment
function capitalize(string){
  let firstChar = string[0]; 
  firstChar = firstChar.toUpperCase();
  let remainingString = string.slice(1);
  let capString = firstChar + remainingString;
   return capString;
}

function reverseString(reversedString){
  return reversedString.split('').reverse().join('');
}

let calculator = {
  
  add: function(a, b){
    return a + b;
  },

  multiply: function(a, b){
    return a * b;
  },

  divide: function(a, b){
    return a / b;
  },

  subtract: function(a, b){
    return a - b;
  }

};


function caesarCipher(word, shiftFactor) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let newWord = '';
  for (let letter of word) {
    if (alphabet.includes(letter.toLowerCase())) {
      let isUpperCase = letter === letter.toUpperCase();
      let index = alphabet.indexOf(letter.toLowerCase());
      let shiftedIndex = (index + shiftFactor) % 26;

      if (shiftedIndex < 0) {
        shiftedIndex += 26;
      }

      let shiftedLetter = alphabet[shiftedIndex];

      if (isUpperCase) {
        shiftedLetter = shiftedLetter.toUpperCase();
      }

      newWord += shiftedLetter;
    } else {
      newWord += letter;
    }
  }

  return newWord;
}


function analyzeArray(arr) {
  // Check if input is an array
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array');
  }

  // Check if the array is empty
  if (arr.length === 0) {
    return {
      average: NaN,
      min: NaN,
      max: NaN,
      length: 0
    };
  }

  let sum = 0;
  let min = arr[0];
  let max = arr[0];

  // Calculate sum, min, and max
  for (let num of arr) {
    sum += num;
    if (num < min) {
      min = num;
    }
    if (num > max) {
      max = num;
    }
  }

  // Calculate average
  const average = sum / arr.length;

  // Return analysis results
  return {
    average,
    min,
    max,
    length: arr.length
  };
}





module.exports = {
  sum: sum,
  floatingPoint: floatingPoint,
  capitalize: capitalize,
  reverseString: reverseString,
  calculator: calculator,
  caesarCipher: caesarCipher,
  analyzeArray: analyzeArray,
  sumGetter: sumGetter,
};
