<template>
    <div id="container">

      <img id="imagem" src='@/assets/doctor.jpg'>
        <div id="formulario">
          
            <h1 id="cadEditMedPac">Editar <span id="profissao">Médico</span></h1>
            <div id="blocosDeInformacao">
              <div><input type="text" name="nomeCompleto" id="nomeCompleto" class="bInfo" placeholder="Nome Completo" :value="nomePessoa"></div>
              <div><input type="text" name="especialidade" id="especialidade" class="bInfo" placeholder="Especialidade" :value="especialidadeMedico"></div>
              <div><input type="text" name="cpf" id="cpf" class="bInfo" placeholder="CPF" :value="id"></div>
              <div><input type="password" name="senha" id="senha" class="bInfo" placeholder="Senha" :value="senhaPessoa"></div>
              <div><input type="password" name="cpf" id="confirmarSenha" class="bInfo" placeholder="Confirmar Senha" :value="senhaPessoa"></div>
              <div><input type="submit" name="enviar" id="enviar" class="bInfo" value="Salvar"></div>
            </div>
          
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'editarMedico',
  components: {
  },
  props: {
    id: String
  },


  async mount(){
    const response = await axios.get('http://localhost:3000/medico-id/'+ this.id)



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