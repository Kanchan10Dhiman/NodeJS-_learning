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
-->define a summary event that logs a detailed report of how many times each event was triggered (Log = record rakhna (likhit ya digital form me)

*/
const EventEmitter=require("events");
const emitter=new EventEmitter();

//-->Object → better for event counts (because event names are meaningful).//Array → only good if you care about positions, not names.
//eventCounts is an object that stores counts for each event

let globalcount=0;
const eventCount={
    "user-login" :0,
    "user-logout":0,
    "item-purchased":0,
    "update-profile":0
};

//EVENT LISTENER/HANDLER
emitter.on("user-login", (username)=>{
    eventCount["user-login"]++;//Yaha "user-logout" ek string hai jisme hyphen (-) hai.jab bhi property name me special characters (space, - etc.) ho, hamesha [] use karna padta hai
    console.log(`${username} logged in`);
});

emitter.on("user-logout" ,(username)=>{
    eventCount["user-logout"]++;
    console.log(`${username} logged out`)
});

emitter.on("item-purchased", (item)=>{
    eventCount["item-purchased"]++;
    console.log(`item puschased by user : ${item}`);
});

emitter.on("update-profile", (update, field)=>{
    eventCount["update-profile"]++;
    console.log(`update data is ${field} from ${update}`)
});

emitter.on("summary",()=>{
    console.log(eventCount);
})

//emit\trigger events
emitter.emit("user-login", "kanchan Dhiman");
emitter.emit("user-login", "kanchan baby");
emitter.emit("item-purchased", "laptop" );
emitter.emit("update-profile", "kanchan", "kanchu");
emitter.emit("user-logout", "kanchan");

emitter.emit("summary");

//an addiitonal feature that is to add ...everytime all the 0 next time 1 next time 2 next time 3 next time 4 and so on..





