//EVENT MODULE_IN NODE JS
//The Event Module in Node.js provides the EventEmitter class to handle events asynchronously. You can create custom events, listen with .on(), trigger with .emit(), and control execution with methods like .once() and .off(). Core Node.js modules are built on top of this pattern.
///----------------------------------------------------------------------------
//js me agar 5 bar define karoge function , sirf last wali chalegi...--pr node js me 5 bar chlegi--line by line 1 2 3.
//--------------------------------------------------------------------------
//require("events") se actually ek class import hoti hai jiska naam hai EventEmitter.

/*--------------------------------------------------------------------------
🔹 EventEmitter class in Node.js

events module ke andar ek class defined hai: EventEmitter
Ye tumhe ek aisa object banane deta hai jisme tum events listen aur emit kar sako.

Important methods of EventEmitter class

.on(eventName, listener)
→ Event ke liye listener register karta hai.

.emit(eventName, ...args)
→ Event trigger karta hai aur listeners ko data bhejta hai.

.once(eventName, listener)
→ Sirf ek baar chalega, phir remove ho jaayega.

.removeListener(eventName, listener) ya .off()
→ Listener hata deta hai.

.removeAllListeners(eventName)
→ Ek event ke saare listeners hata deta hai.
---------------------------------------------------------------------------------*/
//import EventEmitter class
const EventEmitter= require("events");
//create an instance of EventEmitter class
const emitter= new EventEmitter(); //Yaha tumhe usi variable ka naam use karna hoga jo tumne require ke sath assign kiya tha

//1.define an event listener(addListener)
// emitter.on("greet", ()=>{
//     console.log("hello,kanchan dhiman");
// })
// //2.TRigger(emit) the "greet" event
// emitter.emit("greet");
//------------------------------------------

//we can also pass arguemnts with emitting.

emitter.on("greet1",(username,prof)=>{
    console.log(`hello ${username}, you are an ${prof}`);
})
//2.TRigger(emit) the "greet" event
emitter.emit("greet1" , "kanchan dhiman", "engineer");
//----------------------------------------------------

//but the best idea to take a single argument as an object 

emitter.on("greet2", (args)=>{
    console.log(`helo ${args.username}, You are a ${args.prof}, ri8`);
});
//trigger event
emitter.emit("greet2", {username :"Kanchan dhiman", prof: "student"});








