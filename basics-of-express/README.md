##Starting with ExpressJs:  
###Agenda: 
1.  Understanding of project structure
2.  Creating Express Server(Hello.World!)
3.  Starting with express-generator
4.  Basic routing(Exposure to REST)
5.  Your own tomcat(public server)
6.  Routing in depth
7.  Middlewares
8.  Error Handling
9.  Exercises on ExpressJs

##Understanding of project structure

![Understanding of project structure](https://raw.githubusercontent.com/deepakshrma/starting-with-npm-express-rest-api/master/basics-of-express/images/understanding-of-project-structure.png)

##Create Project & Install ExpressJs
```bash
$ mkdir express-app && cd express-app
$ mkdir -p router views
$ touch router/index.js views/index.html views/about.html server.js
$ npm init --scope=express-app -y
$ npm i express --save
```
##Add dependencies in package.json
```js
#package.json
"dependencies":
  {
    "express": "~4.0.0"
}
```
```bash
$ npm install
```
##Creating Express Server(Hello.World!)
```js
"use strict";
//Step1:start app at port 3000
//server.js
var Express = require('express');
var PORT = 3000;
var app = Express();
app.listen(PORT);
```
```js
//Step2: Add callback to listen function
//server.js
app.listen(PORT, function () {
   console.info("Server is running @:http://localhost:%d", PORT);
});
```
##Basic routing(Exposure to REST)
```js
//server.js
//...
var app = Express();
//...
app.get('/', function (req, res) {
    res.send('Hello World!');
});
//...
app.listen(PORT, function () {
```
##Routing module
```js
//router/index.js
module.exports = function (app) {
    app.get('/', function (req, res) {
        res.send('Hello World!');
    });
    app.get('/users.json', function (req, res) {
        res.send(JSON.stringify([
            {name: 'Deepak', id: 1},
            {name: 'Nama', id: 2},
            {name: 'Nikhil', id: 3}
        ]));
    });
}
//server.js
//require router module
var router = require('./router'); 
//add routes
router(app);
```

##Create HTML file
```html
<-- Zen coding --!> 
html:5>body>div.content>span.title
```
##Routing module- Send file
```js
//router/index.js
module.exports = function (app) {
    //...
    app.get('/', function (req, res) {
            // maybe test for existence here using fs.stat
            res.writeHead(200, {"Content-Type": "text/html"});
            fs
                .createReadStream(path.resolve('views', 'index.html'))
                .pipe(res);
        });
}
```
##Your own tomcat(public server)
```js
//server.js
var router = require('./router');
//..
//add static server
app.use('/static', Express.static('views'));
//..
//add routes
```
##Basic routing- continue
```js
//router/users.js
//"use strict";
module.exports = function (app) {
    app.get('/user', function (req, res) {
        res.send(JSON.stringify([
            {name: 'Deepak', id: 1},
            {name: 'Nama', id: 2},
            {name: 'Nikhil', id: 3}
        ]));
    });
    app.post('/user', function (req, res) {
        res.send('Got a POST request');
    });
    app.put('/user', function (req, res) {
        res.send('Got a PUT request at /user');
    });
    app.delete('/user', function (req, res) {
        res.send('Got a DELETE request at /user');
    });
}
//server.js
var router = require('./router');
//...require new routes
var userRouter = require('./router/users');
router(app);
//...ad user routes
userRouter(app);
//...
app.listen(PORT, function () {
});
```

