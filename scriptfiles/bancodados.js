var mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "loja",
});

con.connect(function(erroCon) 
{
    if (erroCon) throw erroCon;
    console.log("Conectado ao banco de dados!");
    var sql = "INSERT INTO clientes (id, nome, endereco, compras, telefone) VALUES ('', 'Antonio','R. Fidalga, 209-1 - Pinheiros','2','1123456789')";
    con.query(sql, function (erroCon, result) 
    {
      if (erroCon) throw erroCon;
      console.log("Dados inseridos com sucesso!");
    });
});



