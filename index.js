
var express = require("express");
var app = express();
// khai bao pug
app.set('view engine', 'pug');
app.set('views', './views');
// khai bao lowdb
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)
// tao file db.json mac dinh khi chua co file 

db.defaults({  books : [] })
  .write()







app.listen(3000 , function(){
    console.log("this is port 3000!!!");
});