const tag = (...args) => {
  console.log(...args);
};

const var1 = 'magic';
const var2 = 'function';

tag`Is this ${var1} or just a simple ${var2}?`;
// [ 'Is this ', ' or just a simple ', '?' ] magic function
