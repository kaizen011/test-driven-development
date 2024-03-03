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




module.exports = {
  sum: sum,
  floatingPoint: floatingPoint,
  capitalize: capitalize,
  reverseString: reverseString,
  calculator: calculator
};