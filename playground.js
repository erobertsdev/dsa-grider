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

console.log(reverse("banana"));
