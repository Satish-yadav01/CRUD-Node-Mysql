const mysql = require('mysql');

const connection = 
    mysql.createConnection({
    host: process.env.DB_PATH,
    user: 'root',
    password: '1@Bhishek',
    database: 'Blog'
})
connection.connect((err,result)=>{
  if(err) throw err
  console.log("Mysql DB connection successful")
  console.log(result)
})
// console.log(connection)

module.exports = connection