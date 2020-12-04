/**
 * The function takes three arguments corresponding to R,G and B values.
 * The function converts these values to corresponding HEX color code
 */
const convertHex = (value) => {
  hexValue = value.toString(16);
  if (hexValue.length == 1) {
    return "0" + hexValue;
  }
  return hexValue;
};

const rgbToHexConversion = (...rgbValues) => {
  hexValueString = "#";
  if (checkNumberOfInput(rgbValues)) {
    for (i in rgbValues) {
      if (checkInteger(rgbValues[i]) && checkBoundaryValue(rgbValues[i])) {
        hexValueString += convertHex(rgbValues[i]);
      } else throw new Error("Invalid Input");
    }
  } else throw new Error("Invalid Input");
  return hexValueString;
};

const checkInteger = (value) => {
  return Number.isInteger(value);
};
const checkBoundaryValue = (value) => {
  return value <= 255;
};
const checkNumberOfInput = (value) => {
  return value.length <= 3;
};

module.exports = rgbToHexConversion;
