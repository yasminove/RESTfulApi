const dbConnection = require('../dbConnection.js');

module.exports.getBook = (cb)=>{
  const sql = 'SELECT * FROM books';
  dbConnection.query(sql, (err, res) => {
    if(err) return cb(err);
    cb(null, res.rows);
  })
}
