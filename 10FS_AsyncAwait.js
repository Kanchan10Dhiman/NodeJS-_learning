//ASYNC-AWAIT -->ye functions k sath hi use ho skte h 

//read folder or to get the folder's file list
// const readfolder= async ()=>{
//     try{
//         await fs.promises.readdir(filepath);
//     }
//     catch(err) {
//         console.error(err);
//     }
// };

const fs=require("fs/promises");
const path=require("path");

const filename="ayncAwait.txt";
const filepath=path.join(__dirname, filename);

//CREATE FILE USING AYNC-AWAIT







