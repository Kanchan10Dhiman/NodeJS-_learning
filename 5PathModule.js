/*
Absolute Path-->Full address deta hai — drive/root se lekar exact file tak.

Relative Path-->A shortcut address — based on your current working folder.
*/
//__dirname & __filename → no need of path...path module → needed for extra operations (basename, join, extname, etc.).
const path=require("path");//"Node.js, mujhe path module ka access de do. path is module name"
console.log(__dirname);
console.log(__filename);

//creating path
//path.join()->Segments = the individual pieces of a path you want to combine-->With path.join(), you don’t have to manually add slashes between folders or files
const filepath=path.join("folder","students","data.txt");
console.log(filepath);
