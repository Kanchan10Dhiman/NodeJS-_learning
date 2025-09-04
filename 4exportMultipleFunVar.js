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
const{add, mult}=require("./math")
console.log(add(5,2));
console.log(mult(5,2));
//---------------------------------

//EXPORTING AND REQUIRING MUTLIPLE FUNCTIONS AT ONCE




