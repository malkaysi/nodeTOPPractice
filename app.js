var http = require('http');
var readUrlFile = require('./fileReader')

const requestListener = async function (req, res) {
  let url;
  switch (req.url) {
    case '/':
    case '/index.html':
      url = '/index.html'
      break;
    case '/about.html':
    case '/about':
      url = '/about.html'
      break;
    case '/contact-me.html':
    case '/contact-me':
      url = '/contact-me.html'
      break;
    default:
      url = '/404.html'
      break;
  }
  const data = await readUrlFile.readUrlFile(url);
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(data)
  res.end();
}

const server = http.createServer(requestListener);
server.listen(8080);



