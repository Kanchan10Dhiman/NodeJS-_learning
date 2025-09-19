//🌍 1. GET Request (browser se)Jab tum browser me URL likhti ho → default request method GET hoti hai.-->request krna data ki browser se 

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.end("This is a GET request: Home Page");
  } else if (req.method === "GET" && req.url === "/about") {
    res.end("This is a GET request: About Page");
  } else {
    res.end("404 Not Found");
  }
});

server.listen(8000, () => {
  console.log("Server running at http://localhost:8000");
});


//POST request-->browser pe datasend krna
const http = require("http");

const server1 = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/submit") {
    let body = "";

    // Data aayega chunks me
    req.on("data", chunk => {
      body += chunk.toString();
    });

    // Data complete hone ke baad
    req.on("end", () => {
      res.end("POST request received with data: " + body);
    });
  } else {
    res.end("Send POST request to /submit");
  }
});

server.listen(8000, () => {
  console.log("Server running at http://localhost:8000");
});

