var mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});

con.connect(function (erroCon){
    if(erroCon) throw erroCon;
    console.log("Conectado ao banco de dados!");
});