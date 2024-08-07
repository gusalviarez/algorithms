const text = "Which is the best arepa?"
const replacement = "%20"
const original = " "

const replace_string = (text, original, replacement) => {
   return text.replaceAll(original, replacement);
}

const replace_string2 = (text, original, replacement) => {
   text = text.trim();
   let newstring = '';
   for (const char of text) {
      newstring += char === original ? replacement : char;
   }
   return newstring;
}

console.log(replace_string(text, original, replacement))
console.log(replace_string2(text, original, replacement))
