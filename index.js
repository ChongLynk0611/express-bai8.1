
var express = require("express");
var app = express();
// set up pug
app.set('view engine', 'pug');
app.set('views', './views');








app.listen(3000 , function(){
    console.log("this is port 3000!!!");
});