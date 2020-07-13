
var express = require("express");
var router = express.Router();

// shortid de sinh ngau nhien id cua sach
const shortid = require('shortid');

var db = require('../db');
 // cac get
router.get('/' , (req, res)=>{
    res.render('index',{
        books: db.get('books').value()
    });
});
router.get('/create',(req, res)=>{
    res.render('create');
})
router.get('/delete/:id' , (req,res)=>{
    var id = req.params.id;
    db.get('books').remove({id:id}).write();
    res.redirect('/');
})
router.get('/edit/:id', (req,res)=>{
    var id = req.params.id;
    var book = db.get('books').find({id:id}).value();
    res.render('edit' , {
        book:book
    })
})
// cac post
router.post('/create',(req,res)=>{
    req.body.id=shortid.generate();
    db.get('books').push(req.body).write();
    res.redirect('/');
})
router.post('/edit/:id',(req,res)=>{
    var id = req.params.id;
    var book = db.get('books').find({id:id}).value();
    book.title = req.body.title;
    res.redirect('/'); 
})

module.exports = router;