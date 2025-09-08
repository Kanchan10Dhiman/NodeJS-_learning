//FSMODULE ASYNC//
//SYNC:-pehle hmne sync pdha jisme hme pta h ki pehle ek task hoga..or baki code block hojega..jb 1 complete ho jayega uske baad hi 2 task hoga or line by line hoga ye. pehle file create hi hogi ,then read ,then update, and rename and delete.
//ASYNC:-ab isme tasks parallely chlte h,isme ek mistake hoti (abi srf jada pdha nhi  aage) ki tasks koi b upr niche ho jata -jese file create badme hui or read pehle hi execute hogya, fr update del k baad hogya execute--to ise  prevent krne k liy hum callbacks and promises execute krte h, jese write and read ko chain me daal dia taki pehle write hi ho uske baad hi read ho..ese hi update rename delte ko ek block me daal do-baki dekhte h kya h aage.

//FS ASYNC
//fs.writeFile()->writes data to the file, and replace if it's already exists.
//fs.writeFile(path,data,options,callbacks)
//access fs module.
const fsAsync=require("fs");
const path=require("path");

const filename=fs.writeFile("async_fs.txt");

const filepath=path.join(__dirname, filepath);
console.log(filepath);




