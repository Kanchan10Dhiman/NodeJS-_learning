//FS MODULE PROMISES
// const fs=require("fs"); agr promises nhi likhn acahhte bar bar hr crud operation me to ye likh skte ho

const fs=("fs/promises")
const path=require("path");

const filename="fsPromises.txt";
const filepath=path.join(__dirname, filename);

// const file=__dirname;
// fs.promises
// .readdir(file)
// .then((data)=> console.log(data))
// .catch((err)=> console.error(err))

//WRITE FILE USING PROMISES

//fs.promises.writeFile(path,data,options).then().catch

//fs.promises.writeFile
fs.writeFile(filepath, "hello this is promise file", "utf-8")
.then(console.log("file craeted sucessfully"))
.catch((err)=>{
    console.error(err);
})

//READ FILE-->fs.promises.readFile
fs.readFile(filepath, "utf-8")
.then((data)=>console.log(data , "file read successfully"))
.catch((err)=>{
    console.error(err);
})

//UPDATE FILE-->fs.promises.appendFile
fs.appendFile(filepath, "this is appeneded in the file" , "utf-8")
.then(console.log("successfulluy updated"))
.catch((err)=>console.error(err));

//DELETE FILE
// fs.promises.unlink(filepath)
// .catch(console.log("sucessfully deleted"))
// .then((err)=>console.error(err));
