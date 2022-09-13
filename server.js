import express from 'express';
// const express = require('express');

//import the allRoutes function from our restRoute.js file
import { userRoutes, profileRoutes, loggedInUserRoutes } from './route/restRoute.js';
// let { userRoutes, profileRoutes, loggedInUserRoutes } = require('../src/route/restRoute');

//import mongoose
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
// let mongoose = require('mongoose');
// let bodyParser = require('body-parser');
// const express = require('express');
const app = express();

// Setup the port for the server
const port = 4000;

//set connection between the API and mongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/localDB', {
    //avoid errors
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//parse requests and make it redable for our API
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
// app.use(express.bodyParser({limit: '50mb'}));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', "*");

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//call the allRoute function and send app which initializes express
userRoutes(app);
profileRoutes(app);
loggedInUserRoutes(app);

// When a get request is made to / or the default page 
// display a message.
app.get('/', (req, res) =>
    res.send(`Your node and express server is running on port: ${port}`)
);

//print a message to the cli
app.listen(port, () => {
    console.log("restAPI is running on port: " + port);
});