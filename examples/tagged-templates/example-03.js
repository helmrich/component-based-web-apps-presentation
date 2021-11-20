const defaultTag = (strings, ...values) => {
  let result = '';
  strings.forEach((str, i) => {
    values[i] ? (result += str + values[i]) : (result += str);
  });
  return result;
};

const foo = 'magic';
const bar = 'function';

console.log(defaultTag`Is this ${foo} or just a simple ${bar}?`);
console.log(defaultTag(['Is this ', ' or just a simple ', '?'], foo, bar));
