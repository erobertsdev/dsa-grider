// --- Directions
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
