//hum web server banynge..jb b koi request aayegi to hum uska log bnayenge.
const http=require("http");
const fs=require("fs");

const server=http.createServer((req,res)=>{
    const log= `${Date.now()} : ${req.url} new request recieved \n`;
    fs.appendFile("log.txt", log,(err,data)=>{
        res.end("hello from server again")
    });
});

server.listen(8000, ()=>{
    console.log("server started here ")
});

//upr log file nhi bn rhi t to-->Jab tu browser me http://localhost:8000 likhti hai →Ye browser ek HTTP request bhejta hai us server ko.-->Tab jaake server ka callback chalega ((req,res)=>{...})
