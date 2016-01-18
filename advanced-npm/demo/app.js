"use strict";
var globalModule = require("./modules/module-global");
globalFoo();
//global foo!
var five = 5;
console.log("" + five.add(2).add(2,2));

var functionalModule = require("./modules/module-functional");
functionalModule();
//functional foo!

var objectModule = require("./modules/module-object");
objectModule.foo();
//object foo!

var Pizza = require('./modules/pizza-constructor');
var pizza = new Pizza(['tomato','Mornay sauce'], true);
console.info(pizza); //will call implicitly toString method