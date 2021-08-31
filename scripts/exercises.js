(function() {
  'use strict';

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------

function max (a, b){
  if (a>b) { 
    return a
  } else {
    return b}
};

  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------
function maxOfThree( a, b, c){   
  if ((a >= b) && (a >= c)) {
    return a;
  } else if ((b >= a ) && (b >= c)) {
    return b;
  } else { return c}
};


  // ---------------------
  // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------
function isVowel(letter){
  let testLetter = letter.toLowerCase();
  if ((testLetter === 'a') || 
      (testLetter === 'e') || 
      (testLetter === 'i') || 
      (testLetter === 'o') || 
      (testLetter === 'u')) {
 return true;
  } else {
    return false;
  }
};


  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------
//Okay.  So we slice of the first letter.  Then we check to see if it's a vowel.  THEN if it IS a vowel, we move on.  If it IS NOT a vowel, then 
//we write it to the new string + "O" + the consonant again.
// insert "Boy that escalated quickly meme here"

function rovarspraket(original){
   let outputString = '';
   for (let i = 0; i < original.length; i++) {
     if ((isVowel(original[i]) === true) || (original[i] === ' ')) {
       outputString = outputString + original[i];
     } else {
       outputString = outputString + original[i] + "o" + original[i];
     }   
   }
   return outputString;
}



  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------
function sum(arg) {
  let total = 0;
  for (let i = 0; i < arg.length; i++) {
    total += arg[i];
  };
  return total;
}

function multiply(arg){
  let total = 1;
  for (let i = 0; i < arg.length; i++) {
    total *= arg[i];
  };
  return total;
}



  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------
  function reverse(inputString) {
    let outputString = '';
    for (let i = inputString.length; i > 0; i--) {
      outputString = outputString + inputString[i-1];
    }
    return outputString;
 }



  // ---------------------
  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------

  function findLongestWord(arg) {
    let result = 0;
    for (let i = 0; i < arg.length; i++){  //Do once for each element in array
      let contender = arg[i].length;
      if (contender >= result) {
        result = contender;
      }        
    }
    return result;
  }



  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------
  function filterLongWords(arg, l) {
    let output = [];
    for (let i = 0; i < arg.length; i++){  //Do once for each element in array
      if (arg[i].length > l) {
        output.push(arg[i])
      }
    }
    return output;
  }


  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------
  
  
  function charFreq(inputString) {
    let result = {};    
    for (let i = 0; i < inputString.length; i++) {   
      let testCase = inputString[i];
      if (result.hasOwnProperty(testCase)) {   
        result[testCase]++; 
      } else {                                       
        result[testCase] = 1;                  
      }              
    }
    return result;                    
  }


  ////////////////////////////////////////////////////////////////////////
  /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
  ////////////////////////////////////////////////////////////////////////

  console.assert(max(2, 4) === 4, 'function max error');

  console.assert(maxOfThree(1, 2, 3) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(2, 3, 1) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(3, 2, 1) === 3, 'ERROR maxOfThree');

  console.assert(isVowel('a') === true, 'ERROR function isVowel');

  console.assert(isVowel('b') == false, 'ERROR function isVowel');

  console.assert(rovarspraket("this is fun") === "tothohisos isos fofunon", 'ERROR function rovarspraket');

  console.assert(sum([1, 2, 3, 4]) === 10, 'ERROR function sum');

  console.assert(multiply([1, 2, 3, 4]) === 24, 'ERROR function multiply');

  console.assert(reverse('jag testar') === 'ratset gaj', 'ERROR function reverse');

  console.assert(findLongestWord(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is']) === 6, 'ERROR function findLongestWord');

  console.assert(filterLongWords(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is'], 4).length === 4, 'ERROR function filterLongWords');

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').a === 7);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').b === 14);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').c === 3);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').d === 3);
})();
