const Sequelize = require('Sequelize');
const db = require('../db');



const User = db.define('medico', {
    idmedico: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    cpf: {
        type: Sequelize.BIGINT,
        allowNull: false,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    especialidade: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});


//User.sync() - Cria a tabela, caso nao exista
// User.sync({ alter: true}) - Altera a tabela caso haja divergencia com a que consta no DB

module.exports = User;