/**
 The function takes number of seconds as input and return an object with keys 
 hours
 minutes
 seconds
 The value corresponding to each key should be the conversion of seconds into correponding 
 time 
 */
const checkInteger = (value) => {
  return Number.isInteger(value);
};

const convertTime = (seconds) => {
  if (checkInteger(seconds)) {
    return (timeConversion = {
      hours: Math.floor(seconds / (60 * 60)) % 60,
      minutes: Math.floor(seconds / 60) % 60,
      seconds: seconds % 60,
    });
  } else throw new Error("Invalid Input");
};

module.exports = convertTime;
