const dbConnection = require('../dbConnection.js');

module.exports.addBook = (
  title, genre, description,
  author, publisher, pages, image_url,
   buy_url, cb)=>{

    const sql = `INSERT into books (title, genre, description, author, publisher, pages, image_url, buy_url)
     VALUES
($1,$2,$3,$4,$5,$6,$7,$8) returning *`;
    dbConnection.query(sql,[title,genre, description, author, publisher, pages, image_url, buy_url],
       (err, res) => {
            if(err) {
              console.log(cb, 'err2');
              return cb(err);
            }
      cb(null, res.rows);
    })
}
