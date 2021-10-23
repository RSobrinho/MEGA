<template>
  <div>
    <configuracoesPrincipais/>
    <barraLateral @voltar="desabilitarForm"/>
    <div id="container" v-if="s1 == 0">

      <div class="configPessoa">
        <img class="logos" src="@/assets/doctor4.png" alt="fotoMedico">
        <h1 class="lista">Lista de Medicos</h1>
        <button class="botao cad" @click="s1 = 4, s2 = true"><img class="icone" src="@/assets/add.png" alt="cadastrarMedico"></button>
        <div class="divider"></div>
        <div class="blocos">
          <div v-for="(medico, index) in medicos" :key="index"> <!--Esse div v-for vai fazer tudo oq ta dentro, na quantidade de pessoas que existem no array de objetos, que na vdd vc vai muda pra a qtde de elementos no bd  |  Alem disso, ele vai ter o botao pra abrir o form de edicao, que vai ter q lincar com o bd pra pegaWr os dados de la, e transferir para o array de elementos | E o botao de excluir medico tbm vai estar ligado ao bd, pra excluir X pessoa e seus elementos no array-->
            <div class="blocoDeInformacao">
              <h2 class="nomePessoa">{{medico.nome}}</h2>
              <h4 class="cpfPessoa">{{medico.cpf}}</h4>
              <div class="bordinha"></div>

              <div class="botoes">
                <button class="botao" @click="s1 = 2, bb = medico.idmedico, bExcluir = false"><img class="icone" src="@/assets/paper.png" alt="editarMedico"></button>
                <button class="botao" @click="excluirMedico(medico.idmedico)"><img class="icone" src="@/assets/trash.png" alt="excluirMedico"></button>
              </div>

            
            </div>
          </div>
        </div>
      </div>

      <div class="configPessoa">
        <img class="logos" src="@/assets/patient.png" alt="fotoPaciente">
        <h1 class="lista">Lista de Pacientes</h1>
        <button class="botao cad" @click="s1 = 3, s2 = true"><img class="icone" src="@/assets/add.png" alt="cadastrarPaciente"></button>
        <div class="divider"></div>
        <div class="blocos">
          <div v-for="(paciente, index) in pacientes" :key="index">
            <div class="blocoDeInformacao">
              <h2 class="nomePessoa">{{paciente.nome}}</h2>
              <h4 class="cpfPessoa">{{paciente.cpf}}</h4>
              <div class="bordinha"></div>

              <div class="botoes">
                <button class="botao" @click="s1 = 1, bb = paciente.idpaciente, bExcluir = false"><img class="icone" src="@/assets/paper.png" alt="editarPaciente"></button>
                <button class="botao" @click="excluirPaciente(paciente.idpaciente)"><img class="icone" src="@/assets/trash.png" alt="excluirPaciente"></button>
              </div>
             
            </div>
          

          </div>
        </div>
      </div>
    </div>
    <div v-else-if="s1 == 1">
      <editarPaciente :id="bb"/>
    </div>
    

    <div v-else-if="s1 == 2">
      <editarMedico :id="bb"/>
    </div>

    <div v-else-if="s1 == 3">
      <cadastrarPaciente/>
    </div>

    <div v-else-if="s1 == 4">
      <cadastrarMedico/>
    </div>

  </div>
</template>

<script>

import barraLateral from '@/Components/barraLateral.vue'
import configuracoesPrincipais from '@/Components/configuracoesPrincipais.vue'
import editarPaciente from '@/Components/editarPaciente.vue'
import editarMedico from '@/Components/editarMedico.vue'
import cadastrarPaciente from '@/Components/cadastrarPaciente.vue'
import cadastrarMedico from '@/Components/cadastrarMedico.vue'
import axios from 'axios'



export default {
  name: 'telaadmin',
  components: {
    configuracoesPrincipais,
    barraLateral,
    editarPaciente,
    editarMedico,
    cadastrarPaciente,
    cadastrarMedico
  },
  methods: {
    desabilitarForm() { // isso aq é pra sumir com o forms, q no futuro eu vou botar no botao inferior da barra lateral
      if(this.s1 != 0) {
        this.s1 = 0;
      }
      else {
        window.history.back();
      }
    },
    
    habilitarForm() { // isso aqui é pra aparecer o forms, seja de cadastro ou edicao
      this.s1 = true;
    },


  
    


    async excluirMedico(idzao) { // excluir um array/tupla no bd, aqui vc escolhe oq fica melhor pra conectar no bd, e muda tbm se precisar
          var result = confirm("Você quer mesmo deletar esse médico?")
          if(result){
            await axios.delete("http://localhost:3000/deletar-medico/" + idzao)
            window.location.reload()
          }
    },

    async excluirPaciente(idzao){
         var result = confirm("Você quer mesmo deletar esse paciente?")
          if(result){
            await axios.delete("http://localhost:3000/deletar-paciente/" + idzao)
            window.location.reload()
          }
      }

    


  },

  data() { // esse são os objetos, que vao ser usados nos métodos, e também são os que estão sendo utilizados lá no addEditarMedicoPaciente.vue passado por props(aql regiao do codigo verde)
    return {
      addEditar: "Cadastrar ",
      tipo: "Médico",
      acao: "Cadastrar",
      tipoConta: true,
      imagemMP: 'doctor.jpg',
      medicos: [],
      pacientes: [],
      s1: false,
      bExcluir: false,
      bCerto: false,
      bb: false,

      /* esses sao os objetos, mas que vao ser trocados pelos dados no bd e no backend(mas a sintaxe é essa), pra aparecer esses dados das pessoas, seja ela medico ou paciente
      por enquanto eu deixei uns prontos, porque nao ta conectado com o bd, e qnd tiver(com os dados dessa forma ou eu posso mudar se precisar de acordo com o bd), 
      os dados vao aparecer automaticamente no front*/


    }
  },
  async mounted(){
     const response = await axios.get('http://localhost:3000/listar-pacientes')
     const response2 = await axios.get('http://localhost:3000/listar-medicos')
                                
     this.pacientes = response.data
     this.medicos = response2.data

  },
 /*  if(s2){
    created()
  } */
}

</script>

<style>
#container {
  display: flex;
  margin-left: 170px;
  justify-content: center;
  overflow-y: hidden;
  position: relative;
  top: 50px;
}
.logos {
  height: 100px;
  width: 100px;
  border: 2.5px solid #2E4A7D;
  border-radius: 50%;
  display: inline-block;
  margin: 20px 30px 0px;
}
.lista {
  margin: 50px 80px 0px 0px;
}
.cad {
  margin-top: 40px;
}
.divider {
  position: absolute;
  margin: 145px 0px 50px 50px;
  width: 500px;
  height: 1px;
  border: 1px solid rgba(46, 74, 125, 0.5);
}
.botao {
  height: 45px;
  width: 45px;
  background-color: #2E4A7D;
  border-radius: 20px;
  border-style: none;
  margin-left: 30px;
}
.botoes {
  vertical-align: top;
  position: relative;
  bottom: 95px;
  left: 330px;
}
.icone {
  height: 25px;
  width: 25px;
  position: relative;
}
.excluir {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: linear-gradient(0deg, #9dcadd, #aed4e5);
  border: 1px solid #000000;
  border-radius: 8px;
  width: 300px;
  height: 70px;
  margin-left: 200px;
  bottom: 75px;
  position: relative;
  z-index: 1;
}
.alertIcon {
  height: 20px;
  width: 25px;
  margin: 10px;
}
.confirmacaoExclusao {
  font-size: 14px;
  margin-top: 10px;
  margin-right: 5px;
}
.botaoEscolha {
  font-size: 14px;
  color: white;
  background-color: #2e4a7d;
  border-style: none;
  border-radius: 8px;
  height: 26px;
  width: 55px;
  margin-left: 10px;
}
.configPessoa {
  display: flex;
  flex-wrap: wrap;
  max-height: 715px;
  max-width: 600px;
  height: 715px;
  width: 600px;
  background-color: white;
  margin-right: 50px;
  border-radius: 8px;

}
.blocos {
  overflow-y: scroll;
  margin-left: 40px;
  max-height: 540px;
  height: 540px;
  max-width: 550px;
  width: 550px;
  margin-top: 50px; 
}
.blocoDeInformacao {
  background: linear-gradient(180deg, #FFD666 0%, rgba(255, 255, 255, 0.5) 100%);
  border-radius: 8px;
  height: 80px;
  width: 500px;
  max-width: 500px;
  max-height: 80px;
  margin-bottom: 10px;
}
.bordinha {
  position: relative;
  background-color:#2e4a7d;
  border-radius: 8px 0px 0px 8px;
  height: 70px;
  width: 11px;
  display: inline-block;
  bottom: 30px;
  right: 136px;
}
.nomePessoa {
  position: relative;
  top: 8px;
  font-size: 22px;
  margin-left: 30px;
}
.cpfPessoa {
  top: 5px;
  position: relative;
  font-size: 16px;
  color: rgba(46, 74, 125, 0.6);
  font-weight: bold;
  display: inline-block;
  vertical-align: top;
  margin-left: 30px;

}



</style>

