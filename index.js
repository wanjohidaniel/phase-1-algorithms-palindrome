function isPalindrome(word) {
  // Write your algorithm here
  return word === word.split('').reverse().join('');
}

/* 
  Add your pseudocode here
  function isPalindrome(word) {
    return true if the word reade same foward and backwards,
    otherwise, return false
  }
*/

/*
  Add written explanation of your solution here
The isPalindrome function takes a string word as an argument. Inside the function, the string is split into an array of characters using the split('') method. Then, the reverse() method is used to reverse the order of the elements in the array. Finally, the join('') method is used to join the reversed array back into a string.
The === operator is then used to compare the original string with the reversed string. If they are the same, the function returns true, indicating that the input string is a palindrome. Otherwise, it returns false, indicating that the input string is not a palindrome.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
