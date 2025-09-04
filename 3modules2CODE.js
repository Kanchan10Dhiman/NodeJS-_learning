const sum= require("./math")

console.log(add(3,5));//without export not possible
//Jo cheez module.exports = ... me likhi hoti hai wahi dusri file me jaati hai.
// Baaki cheeze jo export nahi ki gayi, wo sirf usi file ke andar available rahengi.

/*
CommonJS (CJS) → require / module.exports--abi common js me kaam kr rhe h 
ESM (ECMAScript Modules) → import / export
 */

