module.exports = function check(str, bracketsConfig) {
  const closeByOpen = new Map(bracketsConfig);
  const opens = new Set(bracketsConfig.map(([open]) => open));
  const stack = [];

  const isValid = str.split('').every((char) => {
    const last = stack[stack.length - 1];
    const closesLast = closeByOpen.get(last) === char;
    if (closesLast) {
      stack.pop();
      return true;
    }

    const isOpen = opens.has(char);
    if (isOpen) {
      stack.push(char);
      return true;
    }

    return false;
  });

  return isValid && !stack.length;
};
