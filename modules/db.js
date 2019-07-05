'use strict';
const mysql = require('mysql');
const config = require('../config'); //db정보는 config안에
const connection = mysql.createPool(config.db);

exports.getQueryResult = (sql) => {
 return new Promise( (resolve, reject) => {
   connection.getConnection((err, connection) => {
     if(err) return reject(err);
     connection.query(sql, (err, rows) => {
       connection.release();
       if (err) return reject(err);
       resolve(rows);
     });
   });
 });
};
