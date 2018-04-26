const dbConnection = require('../dbConnection.js');

module.exports.getBookById = (id, cb)=>{
  const sql = `SELECT * FROM books where id = ${id}`;
  dbConnection.query(sql, (err, res) => {
    if(err) return cb(err);
    cb(null, res.rows);
  })
}
