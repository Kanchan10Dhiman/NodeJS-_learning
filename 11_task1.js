//a simple task related to EventEmitter
/* create a program using node.js EventEmitter that:
//OBJECTIVE
-->listens for multiple types of user events(loin,logout,purchase, profile update)
-->tracks how many times each event is emitted
-->logs a summary of all event occurrences when a special summary eent is triggered.

//REQUIREMENT
-->create atleast four custom events(user-login,logout,purchase, profile update)
-->emit these events multiple times  with diff arguemnets(eg username.purchased  item)
-->track and store the count of each event type
-->define a summary event that logs a detailed report of how many times each event was triggered
*/
const EventEmitter=require("events");
const emitter=new EventEmitter();

//EVENT LISTENER
emitter.on("user-login", (username)=>{
    console.log(`${username} logged in`);
});

emitter.on("user-logout" ,(username)=>{
    console.log(`${username} logged out`)
});

emitter.on("item-purchased", (item)=>{
    console.log(`item puschased by user : ${item}`);
});

emitter.on("update-profile", (update, field)=>{
    console.log(`update data is ${field} from ${update}`)
});


//emit\trigger events
emitter.emit("user-login", "kanchan Dhiman");
emitter.emit("item-purchased", "laptop" );
emitter.emit("update-profile", "kanchan", "kanchu");
emitter.emit("user-logout", "kanchan");



