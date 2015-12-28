import colors from 'colors';
import express from 'express';
import path from 'path';
import http from 'http';
import fs from 'fs';
import request from 'request';
import routes from './routes';
let app = express();
console.log("Application started".green);

let allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }
}

app.configure(function(){
    app.use(allowCrossDomain);
    app.use(express.bodyParser());
    app.use(app.router);
    app.use(express.static(process.cwd()));
});

let Router = routes(app);

//start app
let httpServer = http.createServer(app);

httpServer.listen(process.env.PORT);
console.log(`Listening on port ${process.env.PORT}...`);
