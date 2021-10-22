const Sequelize = require('Sequelize');
const db = require('../db');
const medico = require('./medico')


exports.findOne = (req, res) => {
    const id = req.params.id;
    
    medico.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Tutorial with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  };