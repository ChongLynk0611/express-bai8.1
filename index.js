
var express = require("express");
var app = express();

// shortid de sinh ngau nhien id cua sach
const shortid = require('shortid');

// khai bao pug
app.set('view engine', 'pug');
app.set('views', './views');

// khai bao lowdb
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)

//khai bao de lay duoc req.body
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// tao file db.json mac dinh khi chua co file 
db.defaults({  books : [] })
  .write()

  // cac get
app.get('/' , (req, res)=>{
    res.render('index',{
        books: db.get('books').value()
    });
});
app.get('/books/create',(req, res)=>{
    res.render('create');
})
app.get('/books/delete/:id' , (req,res)=>{
    var id = req.params.id;
    db.get('books').remove({id:id}).write();
    res.redirect('/');
})
app.get('/books/edit/:id', (req,res)=>{
    var id = req.params.id;
    var book = db.get('books').find({id:id}).value();
    res.render('edit' , {
        book:book
    })
})
// cac post
app.post('/books/create',(req,res)=>{
    req.body.id=shortid.generate();
    db.get('books').push(req.body).write();
    res.redirect('/');
})
app.post('books/edit/:id',(req,res)=>{
    var id = req.params.id;
    var book = db.get('books').find({id:id}).value();
    book.title = req.body.title;
    res.redirect('/'); 
})






app.listen(3000 , function(){
    console.log("this is port 3000!!!");
});