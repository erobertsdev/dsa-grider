// --- REVERSE STRING
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// FIRST THOUGHT SOLUTION (1/5/24 - 1222) - Passes all tests but not the prettiest
function reverse(str) {
  let reversed = "";
  for (let x = str.length - 1; x >= 0; x--) {
    reversed += str[x];
  }
  return reversed;
}

// ### ALTERNATE SOLUTIONS ###
/* 1 - Split string into array then use the built-in reverse method,
 I knew about this but did it manually on purpose
 CODE:

 function reverse(str) {
  return str.split('').reverse().join('');
}
 */

/* 2 - alternate for loop
  CODE:

function reverse(str) {
  let reversed = '';
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}

 */

/* 3 - COMPLICATED ONE
  CODE:

function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}
*/

// ### PALINDROME
// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// First though solution - builds off the last problem, pretty obvious, passes all tests
function palindrome(str) {
  return str.split("").reverse().join("") == str;
}

module.exports = palindrome;
