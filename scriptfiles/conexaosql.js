var mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});

con.connect(function (erroCon){
    if(erroCon) throw erroCon;
    console.log("Conectado ao banco de dados!");
    con.query("CREATE DATABASE loja", function (erroCon, result) {
        if(erroCon) throw erroCon;
        console.log("Banco de dados criado com sucesso.");
        if(erroCon) throw erroCon;
        console.log("O banco de dados já existe, continuando");

    })
});