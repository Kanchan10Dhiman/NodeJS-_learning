globalThis.console.log("hello to nodejs")
console.log(global);
// window.console.log("windows")-->in node window can't access,it ison web only.
console.log("module print?")
// console.log(globalThis.module); //undefined,as module is not part of global object.
globalThis.console.log(module);//it worked,as console is part of global..but module not.
console.log(process);

