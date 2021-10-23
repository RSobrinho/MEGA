const express = require('express')
const app = express()
const medico = require('./models/controllers/medico')
const paciente = require('./models/controllers/paciente')
const laudo = require('./models/controllers/laudo')
const bodyParser = require('body-parser')
const cors = require('cors')


app.use(require('cors')());



app.use(express.json())

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

// body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.get('/', async (req, res) =>{
  res.render("index")
})

app.post('/cadastrar-medico', async (req, res) => { //mesma coisa que o app.get anterior
  
   await medico.create(req.body)
  .then(() => {
    return res.json({
      erro: false,
      mensagem: "data!!"
    })
  }).catch(() =>{
    return res.status(400).json({
      erro: true,
      mensagem: "erro: médico não cadastrado!"
    })
  }) 
})



app.post('/cadastrar-paciente', async (req, res) => { //mesma coisa que o app.get anterior
  await paciente.create(req.body)
  .then(() => {
    return res.json({
      erro: false,
      mensagem: "paciente cadastrado com sucesso!"
    })
  }).catch(() =>{
    return res.status(400).json({
      erro: true,
      mensagem: "erro: paciente não cadastrado!"
    })
  })
})

app.get('/listar-pacientes', async (req, res) => {
  const pacientes = await paciente.findAll({raw: true})
  return res.status(200).json(pacientes)
  
})

app.get('/listar-medicos', async (req, res) => {
  const medicos = await medico.findAll({raw: true})
  return res.status(200).json(medicos)
  
})


app.get('/listar-medicos/:id', async (req, res) => {
    const id = req.params.id;
    
    const medicos = await medico.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Não foi possível achar o usuario com este id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Erro ao tentar achar o id=" + id
        });
      });
  
})

app.get('/listar-pacientes/:id', async (req, res) => {
  const id = req.params.id;
  
  const pacientes = await paciente.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Não foi possível achar o usuario com este id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Erro ao tentar achar o id=" + id
      });
    });
    Tutorial.update(req.body, {
      where: { id: id }
    })
})

app.put('/update-medicos/:id', async (req, res) => {
  const id = req.params.id;

  await medico.update(req.body, {
    where: { idmedico: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'Médico atualizado com sucesso!'
        })
      } else {
        res.send({
          message: `Não possível atualizar o médico de id=${id}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Server error: não foi possível atualizar o médico de id=" + id
      });
    });
  

  
})

app.put('/update-pacientes/:id', async (req, res) => {
  const id = req.params.id;

  await paciente.update(req.body, {
    where: { idpaciente: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'Paciente atualizado com sucesso!'
        })
      } else {
        res.send({
          message: `Não possível atualizar o paciente de id=${id}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Server error: não foi possível atualizar o paciente de id=" + id
      });
    });
  

  
})


app.delete('/deletar-paciente/:id', async (req, res) => {  
  const id = req.params.id;

  const pacientes = await paciente.findByPk(id);

  if(pacientes){
    await pacientes.destroy();
    return res.send({message: "Usuário deletado!"})
  } else{
    return res.status(400).send({Erro: "Usuário não encontrado!"});
  }
})

app.delete('/deletar-medico/:id', async (req, res) => {  
  const id = req.params.id;

  const medicos = await medico.findByPk(id);

  if(medicos){
    await medicos.destroy();
    return res.send({message: "Usuário deletado!"})
  } else{
    return res.status(400).send({Erro: "Usuário não encontrado!"});
  }
  
})


app.get('/listar-laudos', async (req, res) => {  
  const laudos = await laudo.findAll({raw: true})
  return res.status(200).json(laudos)
  
})

app.post('/cadastrar-laudo', async (req, res) => { //mesma coisa que o app.get anterior
  await laudo.create(req.body)
  .then(() => {
    return res.json({
      erro: false,
      mensagem: "laudo cadastrado com sucesso!"
    })
  }).catch(() =>{
    return res.status(400).json({
      erro: true,
      mensagem: "erro: laudo não cadastrado!"
    })
  })
})



app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000.")

})