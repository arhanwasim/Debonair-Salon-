/**
 * Debonair Salon - Local HTTP Server
 * Runs a zero-dependency static file server on http://localhost:3000
 */
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8'
};

const server = http.createServer((req, res) => {
  // Parse URL & remove query params
  const reqUrl = new URL(req.url, `http://${req.headers.host}`);
  let pathname = decodeURIComponent(reqUrl.pathname);

  // Default to index.html for root path
  if (pathname === '/' || pathname === '') {
    pathname = '/index.html';
  }

  // Prevent directory traversal attacks
  const safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
  const filePath = path.join(PUBLIC_DIR, safePath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`
        <!DOCTYPE html>
        <html>
        <head><title>404 Not Found</title></head>
        <body style="font-family:sans-serif;background:#141414;color:#f6f4ee;padding:40px;text-align:center;">
          <h1 style="color:#d0a45d;">404 - Page Not Found</h1>
          <p>The file <code>${pathname}</code> was not found.</p>
          <a href="/" style="color:#d0a45d;">← Back to Home</a>
        </body>
        </html>
      `);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache',
      'Content-Length': stats.size
    });

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`\n==================================================`);
  console.log(` ✨ Debonair Salon Server is Live!`);
  console.log(` 🌐 Localhost URL: http://localhost:${PORT}`);
  console.log(` 📂 Serving from:  ${PUBLIC_DIR}`);
  console.log(`==================================================\n`);
});
