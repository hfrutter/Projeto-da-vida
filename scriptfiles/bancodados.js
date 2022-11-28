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

    function adicionarCliente(id, nome, compras, telefone, endereco) {
        id = 1;
        nome = "Henrique Rutter";
        compras = 1;
        telefone = 11932242324;
        endereco = "Rua da independencia 784";
    
    
        var sql = "INSERT INTO clientes (id, nome, compras, telefone, endereco), VALUES, id, nome, compras, telefone, endereco"; 
        if(erroCon) throw erroCon;
        console.log("Finalizado com sucesso!");
    
    }

});

