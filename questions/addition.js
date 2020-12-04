/* Addition function takes a list of numbers and returns the sum
1. Take anything between 1 to n arguments and return sum 
2. Throw and error with message "Invalid Input" when no arguments are passed. 
3. Detect non numeric input and throw an error with message "Invalid Input"
*/
const checkEmpty = (value) => {
  return value.length === 0;
};
const checkInteger = (value) => {
  return Number.isInteger(value);
};
//here we are using reducing function  which sum up all the value
const addition = (...numbers) => {
  let sum = 0;
  if (!checkEmpty(numbers)) {
    sum = numbers.reduce((sum = 0, number) => {
      if (checkInteger(number)) {
        return (sum += number);
      } else throw new Error("Invalid Input");
    });
  } else throw new Error("Invalid Input");
  return sum;
};

module.exports = addition;
