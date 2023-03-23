function isBalanced(str) {
  const stack = [];
  const pairs = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === "{" || char === "[" || char === "(") {
      stack.push(char);
    } else if (char === "}" || char === "]" || char === ")") {
      const last = stack.pop();
      if (last !== pairs[char]) {
        return "NO";
      }
    }
  }

  return stack.length === 0 ? "YES" : "NO";
}

console.log(isBalanced("{ ( ( [ ] ) [ ] ) [ ] }"));
console.log(isBalanced("{ [ ( ] ) }"));
