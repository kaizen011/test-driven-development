function sum(a, b) {
    return a + b;
  }

function floatingPoint(firstNum, secondNum) {
    return firstNum + secondNum;
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





module.exports = {
  sum: sum,
  floatingPoint: floatingPoint,
  capitalize: capitalize,
  reverseString: reverseString,
  calculator: calculator,
  caesarCipher: caesarCipher
};