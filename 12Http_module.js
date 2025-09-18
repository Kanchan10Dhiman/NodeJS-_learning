//HTTP MODULE
//-->http module → A tool in Node.js to create a server.-->web server → The actual server (software/hardware) that serves content using HTTP/HTTPS.
//a REST API is a set of rules that allows two software systems to communicate with each other using HTTP/HTTPS.-->frontend ko data dena

/*
HTTP = HyperText Transfer Protocol-->It is a protocol (set of rules) that defines how data is exchanged between client and server over the internet.

When you open a website in browser → Browser (client) sends HTTP request.

Website’s server replies with HTTP response.

PORT-->A port ek door/entry point hota hai jisse ek computer ke andar chal raha program baahar se requests accept karta hai.Jab tum server banate ho, to usse bolna padta hai → “tum kis darwaze (port) se requests sunoge?”-->Server bhi aisa hi hota hai → ek hi computer (IP) par multiple services chal sakti hain, har ek alag port number par
*/

/*
Server ke paas khud ka permanent data nahi hota.Uska kaam bas ye hai:
-->Client se request lena
-->Database se data mangaana (agar zarurat ho)
-->Data ko process karke client ko wapas bhejna

🔹 Database ke paas asli data hota hai (jaise users ki details, orders, products, messages etc.).
Server jab bhi chahe, database ko bolega → "Mujhe ye data do" ya "Ye naya data save kar lo".
*/
//------------------------------------------------------ 
//acess http module
// const http= require("http");
// // const server=http.createServer();
// const server=http.createServer((req,res)=>{
//     if(req.url=== "/"){
//         res.write("helo i am here to listen you dear");
//         res.end();
//     }
// });
// const port=3000;
// server.listen(port, ()=>{
//     console.log(`listening on port ${port}`);
// });
//---------------------

const http= require("http");

//create server 
//we use this callback function to handlle and processing the request
// const myserver=http.createServer((req,res)=>{
//    console.log("request receives new !");
//    res.end("hello from server");
// });

// myserver.listen(8000, ()=>{
//     console.log("server starteed");
// });//ek port pe ek hi server chlega..

const myserver = http.createServer((req, res) => {

   if(req.url === "/") {
       res.end("Hello from home page");
   } else if(req.url === "/about") {
       res.end("This is the about page");
   } else {
       res.end("Page not found");
   }
});
//👉 “Hey browser, request internet par mat bhejna… mere apne hi computer me jo server chal raha hai usi ko bhejna.”Agar tu kisi aur ka server access karti (e.g. www.google.com), to wo request Google ke servers tak jaati.//listen is like turning the server ON — bina iske server duniya ko accessible hi nahi hoga.
myserver.listen(8000, ()=>{
    console.log("server starteed");
});//ek port pe ek hi server chlega..









