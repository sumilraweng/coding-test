const isString = (str) => {
  return typeof str === typeof "";
};

const isEmpty = (str) => {
  return !str || 0 === str.length || !str.trim();
};

const rotateString = (str, n, direction) => {
  if (isString(str) && !isEmpty(str)) {
    if (direction === "left") {
      console.log(str.slice(n, str.length) + str.slice(0, n));
    } else if (direction === "right") {
      n = -n;
      console.log(str.slice(n, str.length) + str.slice(0, n));
    } else {
      throw new Error("Invalid Direction");
    }
  } else {
    throw new Error("Invalid Input");
  }
};

module.exports = rotateString;
