//URL MODULE --->The URL module provides utilities for URL resolution and parsing.It can be used to split up a web address into readable parts, construct URLs, and handle different URL components
//A URL is the address of a resource on the internet.It tells the browser (or Node.js) where the resource is and how to access it.

/*
----------------------------------------------------------------------
Protocol (Scheme) → Defines how to access the resource (e.g., http, https, ftp).

Domain (Hostname) → Human-readable address of the server (e.g., www.example.com).

Port → Door number to connect to the server (default: 80 for HTTP, 443 for HTTPS).

Pathname → Exact location of the resource on the server (e.g., /about, /products/item1).

Query String → Extra data sent in key=value pairs after ? (e.g., ?user=kanchan&age=21).

Fragment (Hash) → Reference to a section within the page, handled by browser only (e.g., #section2).
--------------------------------------------------------------------------
Protocol (https) = Send by secured courier

Domain (www.amazon.in
) = Go to city Amazon India

Port (443) = Knock at door number 443

Path (/s) = Enter section s of the building

Query (?k=laptop&ref=nb_sb_noss_1) = Ask receptionist “Show me laptops, reference code nb_sb_noss_1”

Fragment (#customerReviews) = Directly flip to Customer Reviews page
*/

//✅ In short:req.url → directly available from http server, gives only the raw URL string.url module → helps you parse and work with URL parts (protocol, host, query params, etc.).

// 

// const url = require("url");

// const myUrl = new URL("https://www.example.com:8080/path/name?query=hello#section");

// console.log(myUrl.hostname);   // "www.example.com"
// console.log(myUrl.port);       // "8080"
// console.log(myUrl.pathname);   // "/path/name"
// console.log(myUrl.search);     // "?query=hello"
// console.log(myUrl.hash);       // "#section"

//Use new URL() (modern, better) instead of old url.parse().
//-------------------------------------------------------------------------------
const http = require("http");
const { URL } = require("url");

const server = http.createServer((req, res) => {
  const myUrl = new URL(req.url, `http://${req.headers.host}`);
  
  if (myUrl.pathname === "/about") {
    res.end("This is About Page");
  } else if (myUrl.pathname === "/contact") {
    res.end("This is Contact Page");
  } else {
    res.end("Home Page");
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

