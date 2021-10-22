const Sequelize = require('Sequelize');
const db = require('../db');


const User = db.define('paciente', {
    idpaciente: {
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
    senha: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

//User.sync(); - Cria a tabela, caso nao exista
// User.sync({ alter: true});

module.exports = User;