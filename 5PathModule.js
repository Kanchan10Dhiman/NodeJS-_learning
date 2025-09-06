/*
Absolute Path-->Full address deta hai — drive/root se lekar exact file tak.

Relative Path-->A shortcut address — based on your current working folder.
*/
//__dirname & __filename → no need of path...path module → needed for extra operations (basename, join, extname, etc.).

const path=require("path");//access path module
console.log(__dirname);
console.log(__filename);

//CREATING PATH
//path.join()->Segments = the individual pieces of a path you want to combine-->With path.join(), you don’t have to manually add slashes between folders or files
const filepath=path.join("folder","students","data.txt");
console.log(filepath);

//path.parse() breaks a file path into an object containing useful parts like the root, directory, file name, and extension.

const parsedata=path.parse(filepath);
const resolvedPath = path.resolve(filepath);//Converts relative path → absolute path (from project folder).
const extname = path.extname(filepath);//Get file extension
const basename = path.basename(filepath);//Extracts file name with extension
const dirname = path.dirname(filepath);//Extracts only the folder path--Get directory name
const pathsep=path.sep;//path.sep → gives the system’s path separator -->Linux/macOS → / -->Windows → \

console.log(parsedata,resolvedPath,extname,basename ,dirname, pathsep);
//look slike json
console.log("\n\n JSON LOOK");
console.log({parsedata,resolvedPath,extname,basename ,dirname, pathsep});