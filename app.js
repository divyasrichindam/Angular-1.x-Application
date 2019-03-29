
// const mod1 = require("mod1");
// const fs = require("fs");
// const http = require("http"); 

// http.createServer(function(req, res) {
//     res.writeHead(200, {"Content-type":"text/html"})
//     if(req.url=="/home") {
//         res.end("Welcome to my homepage")
//     }
//     else if(req.url == "/profile") {
//         res.end("<h1>Welcome to my profile page</h1>")
//     }
//     else {
//         res.end("Hello Everyone!!");
//     }
//     res.end("Hello from server!!!");
// }).listen(3000, () => {
//     console.log("Server running @localhost:3000")
// }); 
// console.log("Hello 1");

// setTimeout(function() {
//     console.log("Hello 2");
// }, 2000)
// console.log("Hello 3");
// var data_event = mod1.getData();
// data_event.on("process_start", () => {
//     console.log("Process started!!!")
// });

// async function process_user_data() {
//     var user_data = await mod1.getUser();
//     console.log(user_data);
// }

// process_user_data();

// fs.readFile("newfile.txt", "utf-8", (err, data) => {
//     if(!err) {
//         console.log(data);
//     }

// });

// fs.writeFile("newfile.txt", "New content for newfile.txt", "utf-8", (err) => {
//     if(!err) {
//         console.log("Data written to the file");
//     }
// });

// fs.open("newfile.txt", "a", (err, file) => {
//     if(!err) {
//         fs.write(file, "This data needs to be added to the file", "utf-8", (err) => {
//             if(!err) {
//                 console.log("Success");
//             }

//         });
//     }

// });

// var read_stream = fs.createReadStream("temp.txt");
// read_stream.setEncoding("utf-8");

// read_stream.on("data", (data) => {
//     console.log("=======================>");
//     console.log(data);
// })