const sum= require('./math');
const multiple=require ('./math');
//hmne math.js me add,mult function bnaya, require kra const sum= require('./math'); console.log(sum)hoga naki console.log(add);
//--> console.log(multiple(5,2));
//--> console.log(sum(5,2));
/*------------------------------------------
module.exports is a single object or value.
When you reassign module.exports (e.g., module.exports = add), it completely replaces whatever was previously assigned.
If you reassign it again (module.exports = mult), the previous value (add) is replaced with mult
-----------------------------------------------------
*/
//INDIVIDUALLY EXPORT & REQUIRE MULTIPLE FUNCTIONS.
//yha add,mult hi naam likhna h jo aap.js me h or console me b same hi likhna h ..add,mult
// const{add, mult}=require("./math")
// console.log(add(5,2));
// console.log(mult(5,2));
//---------------------------------

//EXPORTING AND REQUIRING MUTLIPLE FUNCTIONS AT ONCE

// const{add, mult, div,sub, pi}=require("./math")

//ANOTHER METHOD-->best method
const math=require("./math")
console.log(math.add(5,2));
console.log(math.mult(5,2));
console.log(math.div(6,2));
console.log(math.pi);
/*
yha destructuring ho rhi h
-->Destructuring = object ke andar ke properties ko alag-alag variables me tod dena.
-->Instead of writing:

const math = require("./math");
console.log(math.add(5,2));
console.log(math.mult(5,2));

-->Tum directly likh sakti ho:

const { add, mult, div, sub } = require("./math");
console.log(add(5,2));   // 7
console.log(mult(5,2));  // 10
console.log(div(6,2));   // 3
console.log(sub(6,2));   // 4

*/




