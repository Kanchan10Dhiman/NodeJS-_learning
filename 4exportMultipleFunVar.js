const sum= require('./math');
const multiple=require ('./math');
//hmne math.js me add,mult function bnaya, require kra const sum= require('./math'); console.log(sum)hoga naki console.log(add);
console.log(multiple(5,2));
console.log(sum(5,2));

/*------------------------------------------
module.exports is a single object or value.
When you reassign module.exports (e.g., module.exports = add), it completely replaces whatever was previously assigned.
If you reassign it again (module.exports = mult), the previous value (add) is replaced with mult
*/



