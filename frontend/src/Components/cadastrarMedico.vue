<template>
    <div id="container">

      <img id="imagem" src='@/assets/doctor.jpg'>
        <div id="formulario">
          
            <h1 id="cadEditMedPac">Cadastrar <span id="profissao">Médico</span></h1>
            <div id="blocosDeInformacao">
              <div><input type="text" name="nomeCompleto" id="nomeCompleto" v-model="nomePess" class="bInfo" placeholder="Nome Completo"></div>
              <div><input type="text" name="especialidade" id="especialidade" v-model="especialidadeMedico" class="bInfo" placeholder="Especialidade"></div>
              <div><input type="text" name="cpf" id="cpf" v-model="cpfPessoa" class="bInfo" placeholder="CPF"></div>
              <div><input type="password" name="senha" id="senha" v-model="senhaPessoa" class="bInfo" placeholder="Senha"></div>
              <div><input type="password" name="cpf" id="confirmarSenha" class="bInfo" placeholder="Confirmar Senha"></div>
              <div><input type="submit" name="enviar" id="enviar" class="bInfo" @click="enviar" value="Cadastrar"></div>
            </div>
          
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'cadastrarMedico',
  components: {
  },
  data(){
    return {
      nomePess: '',
      especialidadeMedico: '',
      cpfPessoa: '',
      senhaPessoa: ''
    }
  },
  
  methods: {
    enviar(){
          const data = {
            cpf:this.cpfPessoa,
            nome:this.nomePess,
            especialidade:this.especialidadeMedico,
            senha:this.senhaPessoa,
          }
          axios.post("http://localhost:3000/cadastrar-medico", data)
          .then(response => console.log(response.data));
      }
  },
}
</script>

<style scoped>
#container {
  display: flex;
  align-items: top;
  justify-content: center;
  margin-left: 100px;
  
}
#imagem {
  vertical-align: middle;
  height: auto;
  width: 450px;
  object-fit: cover;
}
#formulario {
  background-color: white;
}
#cadEditMedPac {
  margin: 20px;
  font-weight: 800;
  font-size: 40px;
  margin-bottom: 40px;
}
#dados {
  margin-left: 40px;
  margin-right: 40px;
}
#profissao {
  color: #ff738a;
}
#blocosDeInformacao {
  text-align: center;
}
.bInfo {
  padding: 5px;
  font-size: 20px;
  height: 65px;
  width: 350px;
  margin-bottom: 25px;
  border-radius: 8px;
  border: 1px solid #2E4A7D;
  background-color: #F5F5F5;

}
#enviar {
  background-color: #2E4A7D;
  color: white;
  margin-top: 20px;
  font-size: 22px;
}
</style>