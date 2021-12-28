const http = require('http');
const { URL } = require("url");

const routes = require('./routes');

const server = http.createServer((request, response) => {

  const parsedUrl = new URL(`http://localhost:8080${request.url}`);

  console.log(`Request method: ${request.method} | Endpoint: ${parsedUrl.pathname}`);

  const route = routes.find((routeObj) => (
    routeObj.endpoint === parsedUrl.pathname && routeObj.method === request.method
  ))

  if (route) {
    request.query = Object.fromEntries(parsedUrl.searchParams);
    route.handler(request, response);
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end(`Cannot ${request.method} ${request.url}`);
  }

});

server.listen(8080, () => { console.log('Server started at http://localhost:8080') })