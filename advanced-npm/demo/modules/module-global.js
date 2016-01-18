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
