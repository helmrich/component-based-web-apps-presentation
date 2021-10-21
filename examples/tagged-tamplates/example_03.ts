const defaultTag = (strings: string[], ...values: any) => {  

    let result = '';

    strings.forEach((str, i) => {
        values[i] ? result += str + values[i] : result += str;
    });

    return result;
}

const var1 = "magic";
const var2 = "function";
  
defaultTag`Is this ${var1} or just a simple ${var2}?`;