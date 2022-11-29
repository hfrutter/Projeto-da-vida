var mysql = require('mysql')

var con = mysql.createConnection(
{
    host: "localhost",
    user: "root",
    password: "",
    database: "loja",
});

    // Não funciona ainda, a pretenção é pegar os arquivos csv e já puxar deles os dados e jogar no banco de dados, mas como são apenas 4 de cada estou fazendo manualmente.
    //function adicionarCliente(id, nome, compras, telefone, endereco)
    

    con.connect(function(erroCon) 
    {
        if (erroCon) throw erroCon;
        console.log("Conectado ao Banco de dados!");
        var sql = "CREATE TABLE clientes (id INT AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(255), endereco VARCHAR(255), compras INT, telefone VARCHAR(255))";
        con.query(sql, function (erroCon, result) {
          if (erroCon) throw erroCon;
          console.log("Tabela criada com sucesso");
        });
    });
