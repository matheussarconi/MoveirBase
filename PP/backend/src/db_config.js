const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'root',
    database: 'moveir'
})
 
connection.connect(function(err) {
    if(err) {
        throw err
    } else {
        console.log("Mysql conectado")
    }
})


module.exports = connection;