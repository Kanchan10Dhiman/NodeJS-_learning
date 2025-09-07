//FS MODULE(SYNC)

//The fs module allows us to interact with the file system on our computer.You can create, read, update, delete files and directories.
//CRUD-create,read,update,del
//----------------------------------------------------------------------------
/* fs.writeFileSync(): Writes data to a file. If the file does not exist, it
   will be created. If the file exists, it overwrites the content.
   
   //! syntax: fs.writeFileSync(filePath, data, options);

   //? filePath: The file path to write to.
   //? data: The content to write to the file.
   //? options: Optional. Includes encoding ('utf8'), mode, or flags.--->encoding ka format

   =>ENCODING->Encoding ka matlab hai kis format me data ko file me likhna ya file se padhna hai.
   common encodings->utf-8, ascii, base64, hex
*/
//----------------------------------------------------------------------------------
//ACCESS FS MODULE
const fs=require("fs");
const path=require("path");

//CRAETE FILE----------

// fs.writeFileSync("./test.txt", "data of the file ");
const filename="test2.txt";
const filepath=path.join(__dirname, filename);

const writefile=fs.writeFileSync(filename, "this is the created file ", "utf-8");

console.log("this is the path of file ",filepath);
console.log("created successfully",writefile);

//READ FILE--------------- 

//fs.readFileSync(): reads a file's content and returns it as a string or buffer.
//syntax: const data = fs.readFileSync(filepath, options);
//filepath: path of the file to read.
//options: opticnal. encoding ('utf8') to get data as string.

// fs.readFileSync("test2.txt");
const readfile=fs.readFileSync(filepath, "utf-8");//("test2.txt")-->will give error
console.log(readfile);  //output in buffer-->binary format
//console.log(readfile.toString());//string format and actual jo likha h file me --agr utf-8 lga dete h na pehle hi to shi format me miljata h


//UPDATE FILE---------------------(append something etc)

//fs.appendFileSync(): appends data to a file.if the file does not exist, it creates teh file.
//fs.appendFileSync(filepath,data,options)

const updatefile=fs.appendFileSync(filepath, "the appended data is here");
console.log(updatefile);

const updatedContent = fs.readFileSync(filepath, "utf-8");
console.log(updatedContent);

//DELETE FILE---------------------------
//* del file by its path--fs.unlinkSync(filepath);

// const filedel=fs.unlinkSync(filepath);
//noticed ki test2.txt del ho chuki h

//REname file----------------------------
const updatedFileName="updateTest.txt";
const newfilepath=path.join(__dirname,updatedFileName);
const renameFile=fs.renameSync(filepath,newfilepath);
console.log(renameFile);



