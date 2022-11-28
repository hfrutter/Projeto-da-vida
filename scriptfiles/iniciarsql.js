var mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "loja",
});

con.connect(function (erroCon){
    if(erroCon) throw erroCon;
    console.log("Conectado ao banco de dados!");
    if(erroCon) throw (erroCon);

    //var sql = "CREATE TABLE clientes (nome VARCHAR(255), compras INT, telefone INT, endereco VARCHAR(255))";
    //var sql = "DROP TABLE clientes"
    var sql = "CREATE TABLE clientes (id INT AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(255), compras INT, telefone INT, endereco VARCHAR(255))";
    con.query(sql, function (erroCon, result) {
        if(erroCon) throw erroCon;
        console.log(erroCon);
        console.log("Tabela criada com sucesso!");
    })

})