const Sequelize = require('Sequelize');
const db = require('../db');


const User = db.define('laudos', {
    idlaudos: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nomelaudo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    nomedoutor: {
        type: Sequelize.STRING,
        allowNull: false,
    },

}, {
    timestamps: false
}

);

//User.sync(); - Cria a tabela, caso nao exista
// User.sync({ alter: true});

module.exports = User;