<template>
  <div>
    <barraLateral/>
    <carregarNovoLaudo/>
    <barraHorizontalPesquisa/>

    <div id="listaLaudosPaciente">
      <div>Laudos de {{pessoasCadastradas[idPaciente-1].nomePessoa}}</div>
       <div v-for="laudo in laudos" :key="laudo.idInterno"> <!-- o id dos laudos vai estar lincado com o id do paciente, n sei como vai ser feito, mas pra que puxe os laudos da pessoa especifica vai ser assim acho -->
        <div v-show="laudo.idL == idPaciente">
          <h3>{{laudo.nomeLaudo}}</h3>
          <a href="laudoEspecifico.txt" :download="laudo.arquivo">Download</a> <!-- E os downloads tbm vao ter q estar conectados no bd -->
          <h4>{{laudo.medicoDoLaudo}}</h4>
          <button class="bExc" @click="bExcluir = true, bCerto = laudo.idInterno">excluirLaudo</button>
          <div v-show="bExcluir == true && bCerto == laudo.id">
            <h2>Quer realmente excluir esse laudo?</h2>
            <button class="bSim" @click="confirmacaoExcluir(laudo)">Sim</button>
            <button class="bNao" @click="bExcluir = false">Não</button>
          </div>
        </div>
        
      </div>
    </div>

    <div v-show="sempreTrue == false"><MlistaPacientes :idPaciente="idPaciente"/></div>

    <div id="carregarNovoLaudo">

    </div>


  </div>
</template>

<script>

import carregarNovoLaudo from '@/Components/carregarNovoLaudo.vue'
import barraLateral from '@/Components/barraLateral.vue'
import barraHorizontalPesquisa from '@/Components/barraHorizontalPesquisa.vue'
import MlistaPacientes from '@/pages/MlistaPacientes/App.vue'
 

export default {
  name: 'MtelaUpload',
  components: {
    carregarNovoLaudo,
    MlistaPacientes,
    barraLateral,
    barraHorizontalPesquisa
  },

  methods: {
    confirmacaoExcluir(laudo) {
      laudo.id = undefined;
      laudo.nome = undefined;
      laudo.idInterno = undefined;
      laudo.arquivo = undefined;
      laudo.medicoDoLaudo = undefined;
      window.location.reload();
      this.bExcluir = false;
    }



  },

  data() {
    return {
      sempreTrue: true,
      idPaciente: 3, // seguinte, aqui pra eu terminar de programar eu dei um valor de id valido, mas normalmente eu setaria como 0
      bExcluir: false,

/* aqui no id no caso, vc colocaria ACHO uma chave estrangeira apontando pra 
pessoa, e o idInterno é um id interno, pra evidenciar todos os laudos de X paciente,
ent cada id de laudo = id de paciente, vai ter n idInterno

Nesse objeto arquivo, vc referencia de acordo com a pessoa 
E de acordo com o laudo interno do BD, pra ser o arquivo selecionado da pessoa selecionada

Ent pra exemplificar eu vou criar as pessoasCadastradas aqui de novo, mas n é necessario ACHO se a gnt ta usando BD

Se precisar referenciar as variáveis la do MtelaAdmin para esse arquivo, eu casso oq fazer, mas se n precisar melhor

*/
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
    
      laudos: [
        // obs os links dos laudos nao estao funcionando, msm que esteja referenciado "certo"
        // "referenciando" a pessoa com id 3 no obj idL, que nao tem especialidade portanto é paciente

        // Nesses medicos do laudo, eu preciso que no form que eu vou colocar, vc faca essa ligacao entre objeto e o forms, pra guardar dentro da "tupla" ou "array de objetos" pra guardar a string do medicoDoLaudo
        {idL: 3, idInterno: 1, arquivo: '@/testeLaudos/l2.txt', nomeLaudo: 'Eletrocardiograma', medicoDoLaudo: 'Dr Hans Chucrute'},
        {idL: 3, idInterno: 2, arquivo: '@/testeLaudos/l2.txt', nomeLaudo: 'Sondagem', medicoDoLaudo: 'Dr Hans Chucrute'},
        {idL: 3, idInterno: 3, arquivo: '@/testeLaudos/l3.txt', nomeLaudo: 'Exame de sangue', medicoDoLaudo: 'Dr Hans Chucrute'},
        {idL: 3, idInterno: 4, arquivo: '@/testeLaudos/l4.txt', nomeLaudo: 'Colonoscopia', medicoDoLaudo: 'Dr Hans Chucrute'},
        {idL: 3, idInterno: 5, arquivo: '@/testeLaudos/l5.txt', nomeLaudo: 'Laparoscopia', medicoDoLaudo: 'Dr Hans Chucrute'},
        {idL: 3, idInterno: 6, arquivo: '@/testeLaudos/l6.txt', nomeLaudo: 'suscromia', medicoDoLaudo: 'Dr Hans Chucrute'},

        // "referenciando" a pessoa com id 3 no obj idL, que nao tem especialidade portanto é paciente
        {idL: 10, idInterno: 1, arquivo: '@/testeLaudos/l7.txt', nomeLaudo: 'Eletrocardiograma', medicoDoLaudo: 'Dr Hans Chucrute'},
        {idL: 10, idInterno: 2, arquivo: '@/testeLaudos/l8.txt', nomeLaudo: 'Sondagem', medicoDoLaudo: 'Dr Hans Chucrute'},
        {idL: 10, idInterno: 3, arquivo: '@/testeLaudos/l9.txt', nomeLaudo: 'Exame de sangue', medicoDoLaudo: 'Dr Hans Chucrute'},
        {idL: 10, idInterno: 4, arquivo: '@/testeLaudos/l10.txt', nomeLaudo: 'Colonoscopia', medicoDoLaudo: 'Dr Hans Chucrute'},
        {idL: 10, idInterno: 5, arquivo: '@/testeLaudos/l11.txt', nomeLaudo: 'Laparoscopia', medicoDoLaudo: 'Dr Hans Chucrute'},
        {idL: 10, idInterno: 6, arquivo: '@/testeLaudos/l12.txt', nomeLaudo: 'suscromia', medicoDoLaudo: 'Dr Hans Chucrute'},

        // "referenciando" a pessoa com id 3 no obj idL, que nao tem especialidade portanto é paciente
        {idL: 13, idInterno: 1, arquivo: '@/testeLaudos/l13.txt', nomeLaudo: 'Eletrocardiograma', medicoDoLaudo: 'Dr Hans Chucrute'},
        {idL: 13, idInterno: 2, arquivo: '@/testeLaudos/l14.txt', nomeLaudo: 'Sondagem', medicoDoLaudo: 'Dr Hans Chucrute'},
        {idL: 13, idInterno: 3, arquivo: '@/testeLaudos/l15.txt', nomeLaudo: 'Exame de sangue', medicoDoLaudo: 'Dr Hans Chucrute'},
        {idL: 13, idInterno: 4, arquivo: '@/testeLaudos/l16.txt', nomeLaudo: 'Colonoscopia', medicoDoLaudo: 'Dr Hans Chucrute'},
        {idL: 13, idInterno: 5, arquivo: '@/testeLaudos/l17.txt', nomeLaudo: 'Laparoscopia', medicoDoLaudo: 'Dr Hans Chucrute'},
        {idL: 13, idInterno: 6, arquivo: '@/testeLaudos/l18.txt', nomeLaudo: 'suscromia', medicoDoLaudo: 'Dr Hans Chucrute'},
      ]
    }


  }
}

</script>

<style>

</style>
