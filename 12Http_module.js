//HTTP MODULE
//-->http module → A tool in Node.js to create a server.-->web server → The actual server (software/hardware) that serves content using HTTP/HTTPS.
//a REST API is a set of rules that allows two software systems to communicate with each other using HTTP/HTTPS.-->frontend ko data dena

/*
HTTP = HyperText Transfer Protocol-->It is a protocol (set of rules) that defines how data is exchanged between client and server over the internet.

When you open a website in browser → Browser (client) sends HTTP request.

Website’s server replies with HTTP response.

PORT-->A port ek door/entry point hota hai jisse ek computer ke andar chal raha program baahar se requests accept karta hai.Jab tum server banate ho, to usse bolna padta hai → “tum kis darwaze (port) se requests sunoge?”-->Server bhi aisa hi hota hai → ek hi computer (IP) par multiple services chal sakti hain, har ek alag port number par
*/

//acess http module
const http= require("http");
// const server=http.createServer();
const server=http.createServer((req,res)=>{
    if(req.url=== "/");{
        res.write("helo i am here to listen you dear");
        res.end();
    }
});
const port=3000;
server.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})


