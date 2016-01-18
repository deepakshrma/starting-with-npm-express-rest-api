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