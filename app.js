const http = require('http');
const port = process.env.PORT || 3000;
const host = '0.0.0.0';

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from CapRover Node.js app!\n');
}).listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
