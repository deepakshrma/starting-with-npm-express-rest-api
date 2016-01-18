var Express = require('express');
var path = require('path');

function ExpressServer(port, dir, route) {
    "use strict";
    var app = Express();
    var currentDir = process.cwd();
    port = port || 3000;
    dir = dir || '';
    var dirAbsPath = path.resolve(currentDir, (dir || ''));
    if (route) {
        app.use(route, Express.static(dirAbsPath));
    }
    else {
        app.use(Express.static(dirAbsPath));
    }
    return {
        listen: function (callback) {
            app.listen(port, function () {
                if (typeof  callback === 'function') {
                    callback(port, dirAbsPath, route);
                }
            });
        }
    }
}
module.exports = ExpressServer;
ExpressServer(3000, './../demo', '/static').listen(function () {
    "use strict";
    console.info('server is running on: http://localhost:%d', 3000, arguments);
});

