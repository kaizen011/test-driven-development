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

function caesarCipher(word, shiftFactor){
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let i = 0;
  let newWord = '';
  let tempLet = '';
  let punctuation = ['.', ',', '!', '?', ';', ':', '-', "'", '"', '(', ')', '[', ']', '{', '}', ' '];
  let upperCaseLet = '';
  let lowerCaseLet = '';

  for(letter of word){

    for(punki of punctuation){
      if(letter == punki){
      newWord += punki;
      }
    }
    
    
    for(alfa of alphabet){
      if(letter == letter.toUpperCase()) {

        var index = alphabet.indexOf(alfa);

        tempLet = alfa[index+shiftFactor];
        upperCaseLet = tempLet.toUpperCase();
        newWord = newWord + upperCaseLet;

      } else {
        tempLet = alfa[index+shiftFactor];
        lowerCaseLet = tempLet.toUpperCase();
        newWord = newWord + lowerCaseLet;
      }
    }



    
    }
  
  }

    // if(letter == alphabet[i]){

    //   for(i; i < alphabet.length(); i++){
    //      if(letter == letter.toUpperCase()) {
         
    //       tempLet = alphabet[i+shiftFactor];
    //       newWord = newWord + tempLet.toUpperCase();
    //       tempLet = '';

    //     } else {
    //       tempLet = alphabet[i+shiftFactor];
    //       newWord = newWord + tempLet.toLocaleLowerCase();
    //       tempLet = '';
    //     }
         
    //   }
      
    //  }
  

module.exports = {
  sum: sum,
  floatingPoint: floatingPoint,
  capitalize: capitalize,
  reverseString: reverseString,
  calculator: calculator
};