const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Assalaumagaleikum, uarakhmatullakhi ua barakatukh biz Kazakhstan Karkol raz'ezd 462 bir salem zholdaimyz. Kazakh eli zhane Docker image-din ishinen dep koyaykshy! \n");
});

server.listen(8080, "0.0.0.0", () => {
  console.log("Server running on port 8080");
});
