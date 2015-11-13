// Include http module.
// var http = require("http");
// var fs = require("fs");
// var url = require("url");
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/View'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + 'public'));
//Store all JS and CSS in Scripts folder.

app.get('/', function(req, res){
  res.sendFile('index.html');
});

app.listen(3000);

// var data = fs.readFileSync('index.html');
// var data1 = fs.readFileSync('pique.css');
// var data2 = fs.readFileSync('d3.js');
// var data3 = fs.readFileSync('application.js');
// var data4 = fs.readFileSync('./assets/images/pique.png')

// // Create the server. Function passed as parameter is called on every request made.
// // request variable holds all request parameters
// // response variable allows you to do anything with response sent to the client.
// http.createServer(function (request, response) {
//   var pathname = url.parse(request.url).pathname;
//   try {
//               pathname = pathname.substring(1, pathname.length);
//           } catch (err) {

//           }
//   console.log(String(pathname));
//   type = '';

//   // Attach listener on end event.
//   // This event is called when client sent all data and is waiting for response.
//     // Write headers to the response.
//     // 200 is HTTP status code (this one means success)
//     if (pathname.search(/(.html$)/) !== -1) {
//       type = 'text/html';
//       console.log(type);
//     } else if (pathname.search(/(.css$)/) !== -1) {
//       type = 'text/css';
//       console.log(type);
//     } else if (pathname.search(/(.js$)/) !== -1) {
//       type = 'application/javascript';
//       console.log(type);
//     } else if (pathname.search(/(.png$)/) !== -1) {
//       type = 'image/png';
//     console.log(type);
//     };
//     // Second parameter holds header fields in object
//     // We are sending plain text, so Content-Type should be text/plain
//     response.writeHead(200, {
//       'content-length': data.length,
//       'Content-Type': 'text/html'
//     });
//     // Send data and end response.
//     response.write(data);
//     response.write(data1);
//     console.log(data);
//     response.write(data2);
//     response.write(data3);
//     response.write(data4);
// // Listen on the 8080 port.
// }).listen(8080);