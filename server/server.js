//server/server.js
var express = require('express');
var router = require('./routes/routes.js')
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
const dbConnection = require("./database");
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));
app.use('/', router);



// React Routes - Send every other request to the React app
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
//   });

//   // set a Port connection variable
// const PORT = process.env.PORT || 3001;

// //establish server connection
//   app.listen(PORT, () => {
//     console.log(`🌎 ==> API server now on port ${PORT}`);
//   });

module.exports=app;