function balikinString(str) {
  if (str.length === 0) {
    return str;
  } else {
    return balikinString(str.slice(1)) + str[0];
  }
}
console.log(balikinString(["h", "e", "l", "l", "o"]));
