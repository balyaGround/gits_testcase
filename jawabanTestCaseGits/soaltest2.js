function reverseStringRecursive(str) {
  if (str.length === 0) {
    return str;
  } else {
    return reverseStringRecursive(str.slice(1)) + str[0];
  }
}
console.log(reverseStringRecursive(["h", "e", "l", "l", "o"]));
