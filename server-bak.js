const jsonServer = require('json-server');
console.dir( 'jsonServer:');
console.dir( jsonServer);
const jsonServerAuth = require('json-server-auth');

console.dir( 'jsonServerAuth:');
console.dir( jsonServerAuth);

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);

server.use((req, res, next) => {
//console.log('req!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', req);
//console.log('res!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', res);
next(); // continue to JSON Server router

//  if (isAuthorized(req)) { // add ygit statusour authorization logic here
//    next(); // continue to JSON Server router
//  } else {
//    res.sendStatus(401);
//  }
})

server.use(router);

server.listen(port);
