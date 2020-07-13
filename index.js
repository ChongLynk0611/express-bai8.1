
var express = require("express");
var app = express();

var db = require('./db');
var booksRouter = require('./routes/books.router');
// khai bao pug
app.set('view engine', 'pug');
app.set('views', './views');

//khai bao de lay duoc req.body
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/books', booksRouter);

app.listen(3000 , function(){
    console.log("this is port 3000!!!");
});