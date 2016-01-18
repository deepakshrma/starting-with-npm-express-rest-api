"use strict";
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