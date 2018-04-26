const dbConnection = require('../dbConnection.js');

module.exports.getGenre = (cb)=>{
  const sql = 'SELECT * FROM genres';
  dbConnection.query(sql, (err, res) => {
    if(err) return cb(err);
    cb(null, res.rows);
  })
}
