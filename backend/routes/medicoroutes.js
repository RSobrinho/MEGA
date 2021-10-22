module.exports = app => {
    const medico = require('./controllers/medico');
    var router = require("express").Router();


    router.get("/:id", medico.findOne);


    app.use('http://localhost:3000/', router);
}

