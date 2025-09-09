//FSMODULE ASYNC//
//SYNC:-pehle hmne sync pdha jisme hme pta h ki pehle ek task hoga..or baki code block hojega..jb 1 complete ho jayega uske baad hi 2 task hoga or line by line hoga ye. pehle file create hi hogi ,then read ,then update, and rename and delete.

//Jo tasks dependent hain (write → read) → async me chain karna zaroori--Jo tasks independent hain → async me alag block me bhi likh sakte ho.

//ASYNC:-ab isme tasks parallely chlte h,isme ek mistake hoti (abi srf jada pdha nhi  aage) ki tasks koi b upr niche ho jata -jese file create badme hui or read pehle hi execute hogya, fr update del k baad hogya execute--to ise  prevent krne k liy hum callbacks and promises execute krte h, jese write and read ko chain me daal dia taki pehle write hi ho uske baad hi read ho..ese hi update rename delte ko ek block me daal do-baki dekhte h kya h aage.
/*
fs.writeFile, fs.appendFile, fs.rename, fs.unlink → callback mandatory

fs.writeFileSync, fs.appendFileSync, fs.renameSync, fs.unlinkSync → no return

fs.readFileSync → returns data

Async me error handling callback me check karo: (err) => { if(err) ... } */

//FS ASYNC

//fs.writeFile()->writes data to the file, and replace if it's already exists.
//fs.writeFile(path,data,options,callbacks)

/*access fs module and path module..path module isliy ki jo file bnai h usko ek specific path dena pdta h..or hum esa isliy b kr re h kuki hum is folder se usko join kr re h..
-->Yahan __dirname ka matlab hai-->jis folder me tumhari current JS file (app.js) rakhi hai, uska absolute path.
-->Iska fayda: chahe tum terminal kahin se bhi run karo (even parent directory, ya VS Code ke alag folder se), file hamesha us folder me create hogi jahan tumhari script rakhi hai.*/

//ACESS FS AND PATH MODULE
const fs=require("fs");
const path=require("path");

//write file-->Callback me sirf err aata hai.
const filename="asyncfile.txt";
const filepath=path.join(__dirname,filename);

const writefile=fs.writeFile(filename, "this is the async file " ,"utf-8" , (err)=>{
    if (err) console.error(err);
    else console.log("file saved");
});

//READ FILE-->fs.readFile(path,options,callback)-->in callback we pass the parameter(err,data)-------->err → error object ya null-->data → file ka content (Buffer ya string)
const readfile=fs.readFile(filepath,"utf-8",(err,data)=>{
    if (err) console.error(err);
    else console.log(data);
});

//UPDATE FILE














