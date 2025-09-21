//express.js -->framework of node.js-->Express ko simple language me bolen to "Node.js ke upar banaya gaya ek lightweight framework hai jo web server banana aur APIs likhna easy kar deta hai."


//outing ka matlab simple shabdon me ye hai ki user kis URL pe request bhej raha hai aur us URL ke liye server kya response bhejega.

//INSTALL
//npm init -y
//npm install express

//// index.js
// index.js
const express = require("express");
const app = express();

// Route
app.get("/", (req, res) => {
  res.send("Hello World from Express!");
});

app.get("/about", (req,res)=>{
    res.send("this is about page")
})

// Server listen
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

