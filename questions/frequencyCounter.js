/* 
Count the frequency of a vowels in a given string. 
1. The function should take a string input and return an object with keys a,e,i,o,u
2. The value corresponding to each key should have the frequency of vowels that appear 
   in the string
3. In case numbers are passed it shoul throw an error with message "Invalid Input"
*/
const isString = (str) => {
  return typeof str === typeof "";
};

const isEmpty = (str) => {
  return !str || 0 === str.length || !str.trim();
};

const frequencyCounter = (str) => {
  vowelsFrequency = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  if (isString(str)) {
    for (i in str) {
      let vowels = str[i].toLowerCase();
      if ("aeiou".includes(vowels)) {
        vowelsFrequency[vowels]++;
      }
    }
  } else throw new Error("Invalid Input");
  return vowelsFrequency;
};

module.exports = frequencyCounter;
