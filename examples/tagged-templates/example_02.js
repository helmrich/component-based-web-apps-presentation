const tag2 = (...args) => {
    console.log(...args);
}

const var1 = "magic";
const var2 = "function";

tag2`Is this ${var1} or just a simple ${var2}?`;