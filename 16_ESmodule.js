//ES module ECMA script
//default export krne k baad -->

//COMMON JS=>previous syntax-->const sum= require('./math');
//ECMA SCRIPT syntax=>
//----------------------------------------------
// import mult from "./math2.js"; //pehle jake type:module set krdo package.json me 
// console.log(mult(9,10));

//-----------------------------------
import { add, mult} from "./math2.js";
console.log(add(5,500));
console.log(mult(3,5));

//------------------------
import * as math from "./math2.js" //import everything