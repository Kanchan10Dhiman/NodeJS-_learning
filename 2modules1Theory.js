/*🔹 What is a module in Node.js?

A module in Node.js = ek independent file ya functionality ka piece, jo tum alag-alag jagah reuse kar sakti ho.

Think of it like this:
👉 Tum ek bada project likh rahi ho. Sab kuch ek hi file me likh dogi to messy ho jayega.
👉 Isliye tum code ko chhoti files (modules) me tod deti ho.
👉 Fir import/export karke use karti ho.*/

console.log("studying about modules");
//if we write 'node modules.js' it cant access the the file's data in basic.js...for that we have to use export/import
//----------------------------------------------------------------
/*
🔹 Encapsulation in Node.js-->Apna code ek box (module) ke andar rakhna taaki wo global scope ko pollute na kare

Node.js by default CommonJS module system use karta hai.
Iska matlab hai:

-->Har file ek module hoti hai.

-->Jo bhi cheez (function, variable, class) tum dusri file me use karna chahti ho, usko tumhe module.exports se bahar bhejna hoga.

-->Aur dusri file me use karne ke liye require() karna hoga.
-----------------------------------------------------------------
WHY USEFUL?

-->No pollution of global scope
Agar modules na hote, to har jagah variables/functions global ban jaate aur naam clash ho jaata.

-->Code reusability
Tum ek file ka code dusri file me reuse kar sakti ho.

-->Maintainability
Large project ko chhote-chhote modules me tod ke maintain karna easy ho jaata hai.
--------------------------------------------------------------------
module.exports kya hai?
Ye original object hai jise Node.js return karta hai jab tum require('./file') likhte ho.
*/

/*------------------------------------------------------------------
MODULES ARE FILS JO HUM BANTE H, APP.JS ,MATH.JS etc--OR HME EXPORT KRNA PDTA H JO B ACCESSIBLE KRWANA H ANOTHER MODULE ME.
Agar math.js me app.js ka content chahiye, to export app.js me hoga aur require/import math.js me.
-------------------------------------------------------------------
*/
