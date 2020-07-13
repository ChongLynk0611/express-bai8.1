
// khai bao lowdb
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)

// tao file db.json mac dinh khi chua co file 
db.defaults({  books : [] })
  .write()

module.exports = db;