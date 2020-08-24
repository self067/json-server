// const port = process.env.PORT || 4000;
const port = 4000;

const jsonServer = require('json-server');
// console.log( 'jsonServer:',jsonServer);

const auth = require('json-server-auth');
// console.log( 'jsonServerAuth:',auth);

const server = jsonServer.create();
// console.log('server:',server);

const router = jsonServer.router('db.json');
// console.log('router:', router);

server.db = router.db;

const middlewares = jsonServer.defaults();
// console.log('middlewares:',middlewares);

// Add custom routes before JSON Server router
// server.get('/echo', (req, res) => {
//   res.jsonp(req.query)
// });
server.use(middlewares);

const rules = auth.rewriter({
  // Permission rules
  db: 640,
  users: 600,
  roles: 640,
  tasks: 640,
  // Other rules
  '/posts/:category': '/posts?category=:category',
});
 
// You must apply the middlewares in the following order
server.use(rules);
server.use(auth);

// server.use((req, res, next) => {
//console.log('req!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', req);
//console.log('res!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', res);
// next(); // continue to JSON Server router
//  if (isAuthorized(req)) { // add ygit statusour authorization logic here
//    next(); // continue to JSON Server router
//  } else {
//    res.sendStatus(401);
//  }
// });

server.use(router);
server.listen(port);
