var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password:'',
    database:'computer_shop'
});

connection.connect(function(err){
    if(err) throw err;
    console.log('connected!');
})

module.exports = connection;