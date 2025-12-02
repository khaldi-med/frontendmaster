#!/usr/bin/env node

const http = require('http');

const fs = require('fs');
const PORT = 3000;

const servre = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' });
  fs.createReadStream('index.html').pipe(res);
});

servre.listen(PORT);
console.log(`servre started on port ${PORT}`);
