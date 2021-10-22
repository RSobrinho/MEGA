const express = require('express')
const app = express()
const medico = require('./models/controllers/medico')
const paciente = require('./models/controllers/paciente')
const bodyParser = require('body-parser')
const cors = require('cors')
const remove = require('./models/controllers/medicocontroller')


app.use(express.json())

app.use(cors({
  origin:"http://localhost:8080"
})

)


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
            message: `Cannot find Tutorial with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  
})




  





app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000.")

})