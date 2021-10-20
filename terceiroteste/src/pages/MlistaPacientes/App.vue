<template>
  <div id="app">
    <configuracoesPrincipais/>
    <barraLateral @voltar="retornar"/>
    <barraHorizontalPesquisa/>

    <div id="container">
      <div id="blocos">
        <div v-for="informacaoPessoa in pessoasCadastradas" :key="informacaoPessoa.id">
          <div id="blocoDeInformacao" v-show="verificaExistencia(informacaoPessoa) == false">
            <div id="bordinha"><img src="@/assets/quad-card-patient.png" alt="quadriculado"></div>
            <a @click="idPaciente=informacaoPessoa.id" href="upload"><img id="logoPaciente" src="@/assets/patient.png" alt="paciente"></a>
            <h1 id="t1">{{informacaoPessoa.nomePessoa}}</h1>
            <h4>{{informacaoPessoa.cpfPessoa}}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import barraLateral from '@/Components/barraLateral.vue'
import barraHorizontalPesquisa from '@/Components/barraHorizontalPesquisa.vue'
import configuracoesPrincipais from '@/Components/configuracoesPrincipais.vue'

export default {
  name: 'MlistaPacientes',
  components: {
    barraLateral,
    configuracoesPrincipais,
    barraHorizontalPesquisa
  },

  data() {
    return {
      pessoasCadastradas: [
        {id: 1, nomePessoa: 'Rafael', especialidadeMedico: 'Cirurgiao', cpfPessoa: '11122233344', senhaPessoa: 'senhaRafael', confSenhaPessoa: 'senhaRafael'},
        {id: 2, nomePessoa: 'Pedro', especialidadeMedico: 'Cardiologista', cpfPessoa: '11122233344', senhaPessoa: 'senhaPedro', confSenhaPessoa: 'senhaPedro'},
        {id: 3, nomePessoa: 'Emanuel', cpfPessoa: '11122233344', senhaPessoa: 'senhaEmanuel', confSenhaPessoa: 'senhaEmanuel'},
        {id: 4, nomePessoa: 'Joelma', especialidadeMedico: 'Neurocirurgiao', cpfPessoa: '11122233344', senhaPessoa: 'senhaJoelma', confSenhaPessoa: 'senhaJoelma'},
        {id: 5, nomePessoa: 'Amanda',  cpfPessoa: '11122233344', senhaPessoa: 'senhaAmanda', confSenhaPessoa: 'senhaAmanda'},
        {id: 6, nomePessoa: 'Carlos', especialidadeMedico: 'Cirurgiao', cpfPessoa: '11122233344', senhaPessoa: 'senhaRafael', confSenhaPessoa: 'senhaRafael'},
        {id: 7, nomePessoa: 'Paulo', especialidadeMedico: 'Cardiologista', cpfPessoa: '11122233344', senhaPessoa: 'senhaPedro', confSenhaPessoa: 'senhaPedro'},
        {id: 8, nomePessoa: 'Ernesto', cpfPessoa: '11122233344', senhaPessoa: 'senhaEmanuel', confSenhaPessoa: 'senhaEmanuel'},
        {id: 9, nomePessoa: 'Joana', especialidadeMedico: 'Neurocirurgiao', cpfPessoa: '11122233344', senhaPessoa: 'senhaJoelma', confSenhaPessoa: 'senhaJoelma'},
        {id: 10, nomePessoa: 'Agata',  cpfPessoa: '11122233344', senhaPessoa: 'senhaAmanda', confSenhaPessoa: 'senhaAmanda'},
        {id: 11, nomePessoa: 'Renato', especialidadeMedico: 'Cirurgiao', cpfPessoa: '11122233344', senhaPessoa: 'senhaRafael', confSenhaPessoa: 'senhaRafael'},
        {id: 12, nomePessoa: 'Pietro', especialidadeMedico: 'Cardiologista', cpfPessoa: '11122233344', senhaPessoa: 'senhaPedro', confSenhaPessoa: 'senhaPedro'},
        {id: 13, nomePessoa: 'Eduardo', cpfPessoa: '11122233344', senhaPessoa: 'senhaEmanuel', confSenhaPessoa: 'senhaEmanuel'},
        {id: 14, nomePessoa: 'Juliana', especialidadeMedico: 'Neurocirurgiao', cpfPessoa: '11122233344', senhaPessoa: 'senhaJoelma', confSenhaPessoa: 'senhaJoelma'},
        {id: 15, nomePessoa: 'Ana Clara',  cpfPessoa: '11122233344', senhaPessoa: 'senhaAmanda', confSenhaPessoa: 'senhaAmanda'},

      ],

// isso serve pra qnd for pra tela de upload, vc ja souber qual foi o paciente escolhido pra mostrar os laudos dele
    }

  },

  props: {
    idPaciente: Number
  },

  methods: {
    verificaExistencia(possivelObj) { // isso seleciona qual é medico e qual é paciente com base se ele possui o objeto especialidade
      if(typeof possivelObj.especialidadeMedico != "undefined") {
        return true; // isso verifica se é medico, e se for retorna true
      }
      else if(typeof possivelObj.nomePessoa != "undefined"){
        return false; // isso verifica se ainda existe um nomedapessoa, significando que aquele nome existe como paciente
      }
      else {
        return 3; // isso aqui é só se o valor é apagado, porque tudo é undefined, mas n é mto importante n já que vai dar reload na pagina msm, e alterar no bd
      }
    },

    retornar() {
      window.history.back();
    }


  }

}

</script>

<style>
#blocos {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
  min-width: 900px;
  margin-left: 30px;

}
#blocoDeInformacao {
  height: 300px;
  width: 300px;
  background-color: white;
  border-radius: 20px;
  margin-left: 100px;
  margin-bottom: 60px;
}
#bordinha {
  position: absolute;
  background-color: #f7c445;
  border-radius: 20px 20px 0px 0px;
  border: 1px solid #FFFFFF;
  height: 112px;
  width: 300px;
}
img {
  object-fit: cover;
  height: 112px;
  width: 300px;
}
#logoPaciente {
  position: relative;
  top: 86px;
  left: 100px;
  border: 4px solid #FFFFFF;
  border-radius: 50%;
  height: 100px;
  width: 100px;
}
h1 {
  position: relative;
  text-align: center;
  top: 85px;
  font-size: 20px;
  vertical-align: bottom;
}
h4 {
  position: relative;
  text-align: center;
  top: 95px;
  font-size: 15px;
  color: #2E4A7D80;
}
</style>
