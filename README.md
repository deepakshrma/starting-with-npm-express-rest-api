##Starting with npm: 
###Agenda: 
1.  Introduction
2.  Install || update npm
3.  Concept of package(package.json)
4.  Install a global package
5.  Exposure of some module(async, underscore, request, nodemailer)
6.  Exercises on npm

##Starting with ExpressJs:  
###Agenda: 
1.  Understanding of project structure
2.  Creating Express Server(Hello.World!)
3.  Stating with express-generator
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
