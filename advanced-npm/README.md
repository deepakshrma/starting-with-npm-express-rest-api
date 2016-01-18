##Advanced npm(your own npm module):
###Agenda:
1. Modular design pattern
2. Create your own module
3. Publish your own module
4. Scripting with npm

##1. Modular design pattern
Node.js is a common.js module implementation. 
*Note:* 
```js
//require is use to get public methods and data types of a module
var SomeModule = require('./absolute-path-here');
//...
//module.exports,exports to make object and data type public accessible from external module
module.exports = func
exports
//.
//var use to create local variable
var someData = 12;
```
###Different module design pattern
a. Globals
```js
//"use strict";
// module-global.js
globalFoo = function () {
    console.log('global foo!');
}
//add new function to Number
Number.prototype.add = function () {
    return this + [].slice.apply(arguments).reduce(function (a, b) {
            "use strict";
            return a + b;
        },0);
}
//..
//implementation
//app.js
var globalModule = require("./modules/module-global");
globalFoo();
//global foo!
//or
require("./modules/module-global")()
var five = 5;
console.log("" + five.add(2).add(2,2));
```
b. Functional
```js
"use strict";
//module-functional.js
module.exports = function () {
    console.log('functional foo!');
}
//..
//implementation
//app.js
var functionalModule = require("./modules/module-functional");
functionalModule();
//functional foo!
```
c. Object
```js
"use strict";
//module-object.js
"use strict";
// bar.js
exports.foo = function () {
    console.log('object foo!');
}
//..
//implementation
//app.js
var objectModule = require("./modules/module-object");
objectModule.foo();
//object foo!
```
d. Constructor
```js
"use strict";
//pizza-constructor.js
function Pizza(sauces, chili) {
    this.sauces = sauces;//array
    this.chili = chili;//bool
}
Pizza.prototype.build = function (callback) {
    setTimeout(callback, 2000, null, 'Your pizza is ready now!');
}
Pizza.prototype.toString = function () {
    return "{sauces:" + this.sauces + ",chili:" + this.chili + "}";
}
module.exports = Pizza;
//..
//implementation
//app.js
var Pizza = require('./modules/pizza-constructor');
var pizza = new Pizza(['tomato','Mornay sauce'], true);
console.info(pizza); //will call implicitly toString method
```
##Create your own module- Your own static server
###Setup NPM
```bash
npm set init.author.name "Deepak Vishwakar,a"
npm set init.author.email "deepak.m.shrma@gmail.com"
npm set init.author.url "https://github.com/deepakshrma"
```
###Login to npm
```bash
$ npm adduser
```
###Create a repo on git with name _*http-server*_
```bash
$ git clone git@github.com:deepakshrma/http-server.git
$ cd http-server
```
###Crate a module- http-server
```bash
$ npm init -y
$ touch index.js
```
```js
//http-server/index.js
module.exports = function() {
    console.log('server is running...');
}
```
```bash
$ git add .
$ git commit -am 'created my first module'
$ git push
$ git tag 0.1.0
$ git push origin master --tags
```
###Test your module
```bash
$ npm install . -g
$ npm ls -g
$ node
>var myServer = require('http-server');
>myServer();
```
###Publish your http server
```bash
$ npm publish
#install and check
$ npm install http-server
``` 

Reference doc:   
[https://quickleft.com/blog/creating-and-publishing-a-node-js-module/](https://quickleft.com/blog/creating-and-publishing-a-node-js-module/)

##Exercise on advanced npm:
_*Create your own static server and publish it on npm*_
###Requirement
```js
var httpServer = require('module-http-server');
var yourserver = httpServer(8080,"public");
yourserver.listen(function(port){
    console.log("server is running on: localhost:"+port);
})
```