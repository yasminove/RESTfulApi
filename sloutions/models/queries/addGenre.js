const dbConnection = require('../dbConnection.js');

module.exports.addGenre = (genre, cb)=>{
    const sql = `INSERT into genres (name) VALUES ('${genre.name}')`;
    dbConnection.query(sql, (err, res) => {
            if(err) {
              return cb(err);
            }
      cb(null, res.rows);
    })
}
