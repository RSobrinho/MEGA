<template>
  <div id="app">
    <configuracoesPrincipais/>
    <barraLateral/>
    <barraHorizontalPesquisa/>


    <div v-for="informacaoPessoa in pessoasCadastradas" :key="informacaoPessoa.id">
      <div v-show="verificaExistencia(informacaoPessoa) == false">
        <a  @click="idPaciente=informacaoPessoa.id" href="upload">
        <img 
        src="@/assets/patient.png" alt="paciente"
        width="100px"
        height="100px"
        />
        
        </a>
        <h1>{{informacaoPessoa.nomePessoa}}</h1>
        <h4>{{informacaoPessoa.cpfPessoa}}</h4>
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
    configuracoesPrincipais,
    barraLateral,
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
        {id: 15, nomePessoa: 'Ana Clara',  cpfPessoa: '11122233344', senhaPessoa: 'senhaAmanda', confSenhaPessoa: 'senhaAmanda'}

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
      else if(possivelObj.nomePessoa != "undefined"){
        return false; // isso verifica se ainda existe um nomedapessoa, significando que aquele nome existe como paciente
      }
      else {
        return 3; // isso aqui é só se o valor é apagado, porque tudo é undefined, mas n é mto importante n já que vai dar reload na pagina msm, e alterar no bd
      }
    },


  }

}

</script>

<style>

</style>
