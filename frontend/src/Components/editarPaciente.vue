<template>
    <div id="container">

      <img id="imagem" src='@/assets/doctor3.jpg'>
        <div id="formulario" v-if="pacientes">
          
            <h1 id="cadEditMedPac">Editar <span id="profissao">Paciente</span></h1>
            <div id="blocosDeInformacao">
              <div><input type="text" name="nomeCompleto" id="nomeCompleto" class="bInfo" placeholder="Nome Completo" v-model="nomezz.nome"></div>
              <div><input type="text" name="cpf" id="cpf" class="bInfo" placeholder="CPF" v-model="nomezz.cpf"></div>
              <div><input type="password" name="senha" id="senha" class="bInfo" placeholder="Senha" v-model="nomezz.senha"></div>
              <div><input type="password" name="cpf" id="confirmarSenha" class="bInfo" placeholder="Confirmar Senha" v-model="nomezz.senha"></div>
              <div><input type="submit" name="enviar" id="enviar" @click="update" class="bInfo" value="Salvar"></div>
            </div>
        
        </div>
    </div>
</template>

<script>
import axios from 'axios'


export default {
  name: 'editarPaciente',
  components: {
  },
  props: {
    id: Number
  },
  data(){
    return{
        pacientes: [],
        nomezz: ''
    
        
      };   
  },
  methods:{
    update(){
      const data = {
            cpf:this.nomezz.cpf,
            nome:this.nomezz.nome,
            senha:this.nomezz.senha,
      }
      if(this.senhaPessoa == this.confirma){
          axios.put("http://localhost:3000/update-pacientes/" + this.id, data)
          .then(response => console.log(response.data));
          confirm("Médico editado com sucesso!")
      }else{
            confirm("As senhas não coincidem.")
          }
      }
  },
  

  async created(){
    const response = await axios.get('http://localhost:3000/listar-pacientes/'+ this.id)
    console.log(this.pacientes)

    this.nomezz = response.data

  }

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