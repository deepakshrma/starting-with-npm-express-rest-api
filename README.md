##Starting with npm: 
###Agenda: 
1.  Introduction
2.  Install || update npm
3.  Login
4.  Concept of package(package.json)
5.  Install a package(Local & Global)
6.  Exposure of some module(async, underscore, request, nodemailer)
7.  Exercises on npm

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


##Advanced npm(your own npm module): 
###Agenda: 
1.  Modular design pattern
2.  Create your own module
3.  Publish your own module
4.  Scripting with npm

#Starting with npm: 
##Agenda: 
1.  Introduction
2.  Install || update npm
3.  Login
4.  Concept of package(package.json)
5.  Install a package(Local & Global)
6.  Exposure of some module(async, underscore, request, nodemailer)
7.  Exercises on npm

###Introduction
Dependency manager, It makes easy to share code across development.

###Install or update npm
```bash
$ npm install -g npm
```
###Login
```bash
#see who are you
$ npm whoami
#login to npm
$ npm adduser
```
###Concept of package(package.json)
```bash
$ npm init --scope=deepakvishwakarma
#shortcut to above
$ npm init --scope=deepakvishwakarma -y
```
###Install a package(Local & Global)
```bash
$ npm install @linclark/pkg
#shortcut to above
$ npm i @linclark/pkg
#install a global package
$ npm i --global how-to-npm
#or
$ npm i -g how-to-npm
```
###Save your dependencies in local package.json
```bash
$ npm install @linclark/pkg --save
```
###Some useful packages
```bash
$ npm i async underscore request nodemailer
```
###Exercises on npm
```bash
$ how-to-npm
#Question 00-06
```


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
    "express": "~4.0.0",
    "ejs":"~1.0.0"
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
##Basic routing- continue...
###Exercise on Basic routing- Create routes for /user
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
##Middleware in express

![Middleware in express](https://raw.githubusercontent.com/deepakshrma/starting-with-npm-express-rest-api/master/basics-of-express/images/Middlewares.png)
```js
//server.js
//loging middleware
function middleware(req, res, next) {
    console.info('inside middleware');
    //do something with req, call next once done
    next()
}
//how to use it
app.use(middleware);
//add static server
app.use('/static', Express.static('views'));
```
###Exercise- Create a request logging middleware 
```js
//server.js
//logging middleware
function logger(req, res, next) {
    var startDate = Date.now();
    res.on("finish", function () {
        // some code to be executed after another middleware
        // does some stuff
        var statusCode = res.statusCode;
        var status = (statusCode > 100 && statusCode < 400)
            ? 'OK' : (statusCode > 400 && statusCode < 500)
            ? 'BAD REQUEST' : "ERROR";
        console.info("%d %s %s", statusCode, status, req.url);
    });
    next()
}
//how to use it
app.use(logger);
//add static server
```
##Error Handling
```js
//server.js
userRouter(app);
//error handling middleware
//This should be after last app.use
function errorHandler(err, req, res, next) {
    console.info(err);
    if (res.headersSent) {
        return next(err);
    }
    res.status(500).send(err.message);
}
app.use(errorHandler);
//route/index.js
app.get('/error', function (req, res) {
        throw new Error("Throwing error from /error");
        res.send('This wil never reached');
});
```
###For verification open 
[Error link: http://localhost:3000/error](http://localhost:3000/error)

##Routing in depth

###Chainable Routing- app.route()
```js
//router/books.js
app.route('/book')
  .get(function(req, res) {
    res.send('Get a random book');
  })
  .post(function(req, res) {
    res.send('Add a book');
  })
  .put(function(req, res) {
    res.send('Update the book');
  });
```
###Express Router- express.Router()
```js
//router/birds.js
"use strict";
var express = require('express');
var router = express.Router();
// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
// define the home page route
router.get('/', function (req, res) {
    res.send('Birds home page');
});
// define the about route
router.get('/about', function (req, res) {
    res.send('About birds');
});
module.exports = function (app) {
    app.use('/birds', router);
};
```
##Express Generator
###Install
```bash
$ npm i express-generator -g
```
###Create gapp
```bash
$ express express-gapp
```
##Exercise- using ejs render Dashboard and About.Me HTML page
*Note:*  
Create own html page or use
basics-of-express/express-app/public/about.html
basics-of-express/express-app/public/dashboard.html 

*Need to know:* 
```js
app.set('views', __dirname + '/public/');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
//And
res.render(path.resolve('public', 'about.html'),{user: "Great User",title:"homepage"});
```



expressModDemo
==============

This is a simple appication to demonstrate the basic CRUD using express module in nodejs. 


### For this app i have use mongoose, express, body parser module. 

Requirement
------------
mongoose, express, body parser module. I have mention all dependencies in package.json.

``` javascript
{
    "name": "node-api",
    "main": "server.js",
    "dependencies": {
        "express": "~4.0.0",
        "mongoose": "~3.6.13",
        "body-parser": "~1.0.1"
    }
}
```

Installation of module
------------
npm install in root folder. It will download all dependencies.

``` bash
$ npm install
```
now simply test api use server.js file. 

``` bash
$ node server.js 
```
Output
-------
You will simply see output as

``` bash
Magic happens on port
```
Testing of the REST-API
------------
For testing of the REST-API you can download the postan extension in Chromium broswer. Alternately you can download/add poster addon on Firemox.


[NodeJS]: http://nodejs.org
