const jsonServer = require("json-server"); //import json-server libray
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();
const port = process.env.PORT || 3001; //can use any port no here

server.use(middleware);
// server.use(
//     jsonServer.rewriter({
//         "/api/*": "/$1",
//     })
// );

server.use(router);
server.listen(port, ()=> {
    console.log(`Server is running on ${port}`)
});