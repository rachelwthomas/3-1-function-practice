(function() {
  'use strict';

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------

  // function description
  // parameter description
  // return description

// function returns the higher of the two inputs
// num1 and num2 are numbers to compare
// returns the higher of the two variables

    // let max = (num1, num2) => {
    //
    //   // return num1 >= num2 ? num1: num2;
    //
    //   if(num1 > num2) {
    //     return num1
    //   }
    //   else {
    //     return num2
    //   }
    // }

    // console.assert(max(2,4) === 4, 'error: max function');
    //
    // console.log(max(4,2));
    // console.log(max(2,7));

// This is a comment




  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------

  // function description-finds the max value of three
  // parameter description-num1, num2 and num3 are numbers to compare
  // return description-the highest number of the 3 variables will be returned


  // let maxOfThree = (num1, num2, num3) => {
  //
  //   return Math.max(num1, num2,num3);
  //
  //
  // }
  //
  // console.log(maxOfThree(3,7,10));




  // ---------------------
  // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------

  // function description-determines if a letter is a vowel not
  // parameter description-char is the number to determine if it is a vowel or not
  // return description-will return true if vowel, false if not


  let vowel =["a", "e" , "i", "o", "u", "y"]

  let isVowel = (char) => {

    if (vowel.indexOf(char) === -1) {
      return false
    }
    else {
      return true
    }

  }


// let isVowel = (char) => {
//   let vowels = 'aeiou';
//   return vowels.includes(char);
// }


  //
  // console.log(isVowel("a"));
  // console.log(isVowel("e"));
  // console.log(isVowel("u"));
  // console.log(isVowel("n"));




  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------

  // function description-doubles every consonant and inserts an o inbetween
  // parameter description-str is the string that is being passed in
  // return description-will bring every consonant twice with an o in between


  let rovarspraket = (str) => {

    // looping through each letter of the string
    for (let i = 0; i < str.length; i++) {
      // determining if each letter is a true=vowel or false=consonant
    let result = ((isVowel((str.charAt(i)))));
    // console.log(str.charAt(i));
    // console.log(result);
    // if the letter is false the charater is printed, then an o is added and then printed the charater is printed again
    if(result === false) {
      console.log(str.charAt(i) +"o"+ str.charAt(i));
    }
    else {
      console.log(str.charAt(i));
    }

    }
    // return console.log(rovarspraket("this is fun"));
 }

  // console.log(rovarspraket("this is fun"));





  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------
  // let num = [1, 2, 3, 4, 5, 6];
  //
  //******************************************THESE DONT WORK************************
  //  let sum = (num) => {
  //
  //    let result = 1;
  //
  //    for(i=1; i <= num.length; i++){
  //      result += i;
  //      console.log(result);
  //   } // }console.log(result);
  //
  //  }
  //
  //  let multiply = (num) => {
  //
  //    let result = 1;
  //
  //    for(i=1; i <= num.length; i++){
  //      result *= i;
  //      console.log(result);
  //   } // }console.log(result);
  //
  //  }
  //




  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------


  // function description-prints string in reverse order
  // parameter description-str is the string that is being passed in
  // return description-will print string in reverse order


  // let reverse = (str) => {
  //
  //   for(let i=str.length-1; i>=0; i--) {
  //     console.log(str[i]);
  //   }
  //
  // }
  // reverse("jag tester");




  // ---------------------
  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------


// *****************************************************DOES NOT WORK************************


// let str = ["JavaScript is so much fun"]
//
//
// let strSplit = str.split(' ');
//
//
//
// let findLongestWord = (str) => {
//
//
//
//
// let longestWord = 0;
//
// for(i=0; i<str.length; i++){
//   if(strSplit[i].length > longestWord){
//     longestWord = str.Split[i].length;
//   }
// } return longestWord;
//
// }
//
// console.log(findLongestWord(str))


  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------





  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------

  // console.assert(charFreq('aaabaabccc').a === 5);
  // console.assert(charFreq('aaabaabccc').b === 2);
  // console.assert(charFreq('aaabaabccc').c === 3);


})();
