const http = require("http");
const PORT = 3000;

const server = http.createServer((request, response) => {
  response.end("got response from server");
});

server.listen(PORT, () => {
  console.log("Server started at port", PORT);
});
