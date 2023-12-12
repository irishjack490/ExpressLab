//load express
const express = require('express');
const path = require('path');
//Create our express app
const app = express();

//require the students database
const studentsDb = require('./data/student-DB');

//configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//mount middleware (app.use)

//mount routes
app.get('/student', function(req, res){
    res.render('student/index',{
        student: student-DB.getAll()
    });
});
//Define a "root" route directly on app
//Next lesson, we'll use best practice routing
app.get('/', function (req, res){
    res.send('<h1>Hello Express</h1>');
})

app.get('/home', function(req, res) {
res.render('home.ejs');

 });
app.listen(3000, function () {
console.log('Listening on port 3000');

});