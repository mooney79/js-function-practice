(function() {
  'use strict';

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------
/* Compares two numbers */
/* each number to be compared */
/* returns the highest value */



function max (num1, num2){
  if (num1>num2) { 
    return num1;
  } else {
    return num2;}
};

  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------
/* Compares three numbers */
/* each number to be compared */
/* returns the highest value */


  function maxOfThree( a, b, c){   
  if ((a >= b) && (a >= c)) {
    return a;
  } else if ((b >= a ) && (b >= c)) {
    return b;
  } else { return c}
};

//lots of extra work here.  Refactor

  // ---------------------
  // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------
/* Checks character against list of vowels */
/* Param is a letter string */
/* returns true or false */

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

// 'aeiou'.includes(char)

  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------
//Okay.  So we slice of the first letter.  Then we check to see if it's a vowel.  THEN if it IS a vowel, we move on.  If it IS NOT a vowel, then 
//we write it to the new string + "O" + the consonant again.
// insert "Boy that escalated quickly meme here"

/* Function turns a string into "rovarspraket" */
/* Param is a string */
/* Returns a modified string according to the rules of rovarspraket */

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

/*
  CLASSROOM VERSION

function rovarspraket(text){
  text = text.toLowerCase().split('');
  for (let i = 0; i<text.length; i++){
    if ('bcdfghjklmnpqrstvwxyz'.includes(text[i])) {
       text[i] = text[i] + 'o' + text[i];
    }
  }
  return text.join('');
}
*/


  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------

/* Add together all numbers */
/* Param is an array of numbers of unknown length */
/* Returns a total (number) */

  function sum(arg) {
  let total = 0;
  for (let i = 0; i < arg.length; i++) {
    total += arg[i];
  };
  return total;
}

/* Multiply together all numbers */
/* Param is an array of numbers of unknown length */
/* Returns a product (number) */


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

/*  Function takes a block of text and reverses the characters */
/* Param is a string */
/* Returns that string in opposite order*/

  
  
  function reverse(inputString) {
    let outputString = '';
    for (let i = inputString.length; i > 0; i--) {
      outputString = outputString + inputString[i-1];
    }
    return outputString;
 }

 /*
 CLASSROOM VERSION

 function reverse(str){
   const reverseString = [];

   for (let i = 0; i < str.length; i++) {
     reverseString.unshift(str[i]);
   }
  return reverseString.join(''); 
 }
 */


  // ---------------------
  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------

/*  Function looks at a list of words and returns the length of the longest */
/* Param is an array of strings */
/* Returns that LENGTH (number) of the longest string in the array*/

  
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

// if (arr[i].length > result) {              //QUICKER METHOD OF CHECKING
//   length = arr[i].length                   //INSIDE THE FOR LOOP
// }                                          // DUH, just uses the arg[i].length instead of using unnecessary variable

  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------
  
/*  Function looks at a list of words and compares them to a given length */
/* Param is an array of strings(arg) and a number(l) */
/* Returns an array of strings that equal or exceed the length l*/

  
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
  
/* Function counts how many instances of each character are used */
/* Param is a string*/
/* Returns an object with keys equal to each character and values equal to the number of times that character appears*/



  function charFreq(inputString) {
    let result = {};    
    for (let i = 0; i < inputString.length; i++) {   
      let testCase = inputString[i];
      if (result.hasOwnProperty(testCase)) {   // if (result[testCase]) {
        result[testCase]++; 
      } else {                                       
        result[testCase] = 1;                  
      }              
    }
    return result;                    
  }

  //Be aware of falsy values that might return false instead of true

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
