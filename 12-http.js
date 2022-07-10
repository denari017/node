const http = require("http");

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end("WELCOM sir to home page")
    }
    if(req.url === "/about"){
        res.end("tu je o about sir")
    }
    res.end(" <h1>MORE</h1> <p>CHOD</p> <a href="/">TU</a>")
});

server.listen(5000);