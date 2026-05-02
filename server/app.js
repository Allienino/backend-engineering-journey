const http = require("http");

const server = http.createServer((req, res) => {
        res.end("Hello Sultan, this is your backend speaking!");
});
server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});