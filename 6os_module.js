//access the OS Module
const os=require("os");

//METHODS OF OS MODULE
//1.Get the OS platform (win32, linux, darwin for macOS)
console.log("1. platform :",os.platform());
console.log("user info:", os.userInfo());

//2.Get OS CPU architecture
console.log("2. CPU ARCHITECTURE",os.arch());

//3.to return the amount of FREE MEMORY in THE SYSTEM 
console.log("3. free memory", os.freemem() , "bytes");

//4.total memory in system in bytes
console.log("4. Total memory:", os.totalmem())// "bytes" hta k koi assr nhi hua

//5.get system Uptime = how long your computer has been running since the last restart. (in seconds)
console.log("5. system's uptime:",os.uptime(),"seconds");

//6.get home directory of current user
console.log("6. home directory:", os.homedir());

//7.get hostname of the os-->Hostname = Computer ka naam = Device name
console.log("7. host name:",os.hostname());

//8.get network interfaces--os.networkInterfaces() tells you about all IP addresses, MAC addresses, and network details of your computer.
console.log("8.networ interfaces", os.networkInterfaces());
