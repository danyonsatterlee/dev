let http = require("http");
const PORT = 8080;
//req is short for request res is short for response
let server = http.createServer((req, res) => {
    if (req.method === "GET") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h1>Hello World this is my first server!!!</h1>");
    
    
        if (req.url === "/") {
            res.write("<h1>This would be my index.html</h1>");
        } else if(req.url ==="/blog"){
        res.write("<h1>this woudl be my blog</h1>")

        }res.end();
    }    
});

server.listen(PORT);
