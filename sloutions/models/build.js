const fs = require('fs');

const dbConnection = require('./dbConnection.js');

const sql = fs.readFileSync(`${__dirname}/build.sql`).toString();

const runDbBuild = dbConnection.query(sql, (err, res) => {
  if (err) {
    console.log(err, 'error');
  };
  console.log("Directory created with result: ", res);
});

module.export = runDbBuild;
