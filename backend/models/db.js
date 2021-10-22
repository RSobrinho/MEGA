const Sequelize = require('sequelize');


const conecta = new Sequelize('projeto', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
  });

conecta.authenticate()
.then(function(){
    console.log("Ação realizada com sucesso.") //ação = conexao com o banco de dados
}).catch(function(){
    console.log("Erro: Ação não foi realizada.");
});





  module.exports = conecta;