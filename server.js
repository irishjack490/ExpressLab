//load express
const express = require('express');

//Create our express app
const app = express();

//configure the app (app.set)

//mount middleware (app.use)

//mount routes

//Define a "root" route directly on app
//Next lesson, we'll use best practice routing

app.get('/home', function(req, res) {
res.send('<h1>Home Page</h1>');

 });
app.listen(3000, function () {
console.log('Listening on port 3000');

});