<template>
  <div>
    <configuracoesPrincipais/>
    <barraLateral @voltar="desabilitarForm"/>
    <div id="container" v-if="s1 == false">

      <div class="configPessoa">
        <img class="logos" src="@/assets/doctor4.png" alt="fotoMedico">
        <h1 class="lista">Lista de Medicos</h1>
        <button class="botao cad" @click="cadastrarMedico(), habilitarForm(), limparTextoCadastro(), bExcluir = false"><img class="icone" src="@/assets/add.png" alt="cadastrarMedico"></button>
        <div class="divider"></div>
        <div class="blocos">
          <div v-for="informacaoPessoa in pessoasCadastradas" :key="informacaoPessoa.id"> <!--Esse div v-for vai fazer tudo oq ta dentro, na quantidade de pessoas que existem no array de objetos, que na vdd vc vai muda pra a qtde de elementos no bd  |  Alem disso, ele vai ter o botao pra abrir o form de edicao, que vai ter q lincar com o bd pra pegaWr os dados de la, e transferir para o array de elementos | E o botao de excluir medico tbm vai estar ligado ao bd, pra excluir X pessoa e seus elementos no array-->
            <span class="bordinha"></span>
            <div class="blocoDeInformacao" v-show="verificaExistencia(informacaoPessoa) == true">
              <h2>{{informacaoPessoa.nomePessoa}}</h2>
              <h4>{{informacaoPessoa.cpfPessoa}}</h4>
              <button class="botao" @click="editarMedico(), habilitarForm(), encontrarPessoa(informacaoPessoa), bExcluir = false"><img class="icone" src="@/assets/paper.png" alt="editarMedico"></button>
            
              <button class="botao" @click="bExcluir = true, bCerto = informacaoPessoa.id"><img class="icone" src="@/assets/trash.png" alt="excluirMedico"></button>
              <div class="excluir" v-show="bExcluir == true && bCerto == informacaoPessoa.id">
                <img class="alertIcon" src="@/assets/alert.png" alt="iconeAlerta">
                <h2 class="confirmacaoExclusao">Quer realmente excluir esse médico?</h2>
                <div>
                  <button class="botaoEscolha" @click="confirmacaoExcluir(informacaoPessoa)">Sim</button>
                  <button class="botaoEscolha" @click="bExcluir = false">Não</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="configPessoa">
        <img class="logos" src="@/assets/patient.png" alt="fotoPaciente">
        <h1 class="lista">Lista de Pacientes</h1>
        <button class="botao cad" @click="cadastrarPaciente(), habilitarForm(), limparTextoCadastro(), bExcluir = false"><img class="icone" src="@/assets/add.png" alt="cadastrarPaciente"></button>
        <div class="divider"></div>
        <div class="blocos">
          <div v-for="informacaoPessoa in pessoasCadastradas" :key="informacaoPessoa.id">
            <div class="blocoDeInformacao bordinha" v-show="verificaExistencia(informacaoPessoa) == false">
              <h2>{{informacaoPessoa.nomePessoa}}</h2>
              <h4>{{informacaoPessoa.cpfPessoa}}</h4>
              <button class="botao " @click="editarPaciente(), habilitarForm(), encontrarPessoa(informacaoPessoa), bExcluir = false"><img class="icone" src="@/assets/paper.png" alt="editarPaciente"></button>

              <button class="botao" @click="bExcluir = true, bCerto = informacaoPessoa.id"><img class="icone" src="@/assets/trash.png" alt="excluirPaciente"></button>
              <div class="excluir" v-show="bExcluir == true && bCerto == informacaoPessoa.id">
                <img class="alertIcon" src="@/assets/alert.png" alt="iconeAlerta">
                <h2 class="confirmacaoExclusao">Quer realmente excluir esse paciente?</h2>
                <div>
                  <button class="botaoEscolha" @click="confirmacaoExcluir(informacaoPessoa)">Sim</button>
                  <button class="botaoEscolha" @click="bExcluir = false">Não</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      "<!--aqui é onde eu passo os props la do outro componente para serem mudados ou atualizados aqui, de forma dinamica-->"
      <addEditarMedicoPaciente :addEditar="addEditar" :acao="acao" :tipo="tipo" :tipoConta="tipoConta" :imagemMP="imagemMP"
      :nomePessoa="pessoasCadastradas.nomePessoa" :especialidadeMedico="pessoasCadastradas.especialidadeMedico"
      :cpfPessoa="pessoasCadastradas.cpfPessoa" :senhaPessoa="pessoasCadastradas.senhaPessoa" 
      :confSenhaPessoa="pessoasCadastradas.confSenhaPessoa" :id="pessoasCadastradas.id"/>
    </div>
  </div>
</template>

<script>

import addEditarMedicoPaciente from '@/Components/addEditarMedicoPaciente.vue'
import barraLateral from '@/Components/barraLateral.vue'
import configuracoesPrincipais from '@/Components/configuracoesPrincipais.vue'

export default {
  name: 'ADMtelaAdmin',
  components: {
    configuracoesPrincipais,
    addEditarMedicoPaciente,
    barraLateral
  },
  methods: {
    desabilitarForm() { // isso aq é pra sumir com o forms, q no futuro eu vou botar no botao inferior da barra lateral
      if(this.s1 == true) {
        this.s1 = false;
      }
      else {
        window.history.back();
      }
    },
    habilitarForm() { // isso aqui é pra aparecer o forms, seja de cadastro ou edicao
      this.s1 = true;
    },
    cadastrarMedico() { //aqui tambem ja da pra colocar pra cadastrar no bd o forms que a pessoa preencheu
      this.addEditar = "Cadastrar ",
      this.tipo = "Médico",
      this.acao = "Cadastrar",
      this.tipoConta = true,
      this.imagemMP = 'doctor.jpg'


    },
    editarMedico() { // aqui tambem ja da pra colocar pra editar no bd o forms que a pessoa preencheu
      this.addEditar = "Editar ",
      this.tipo = "Médico",
      this.acao = "Salvar",
      this.tipoConta = true,
      this.imagemMP = 'doctor.jpg'
    },
    editarPaciente() { //aqui tambem ja da pra colocar pra editar no bd o forms que a pessoa preencheu
      this.addEditar = "Editar ";
      this.tipo = "Paciente";
      this.acao = "Salvar";
      this.tipoConta = false;
      this.imagemMP = 'doctor3.jpg'
    },    
    cadastrarPaciente() { //aqui tambem ja da pra colocar pra cadastrar no bd o forms que a pessoa preencheu
      this.addEditar = "Cadastrar Novo ";
      this.tipo = "Paciente";
      this.acao = "Cadastrar";
      this.tipoConta = false;
      this.imagemMP = 'doctor3.jpg'
    },

    encontrarPessoa(infoPessoa) { // esse daqui serve so pra aparecer os dados da pessoa ja escrito no forms, pra pessoa alterar só oq ela quiser, e o resto manter
      this.pessoasCadastradas.nomePessoa = infoPessoa.nomePessoa;
      this.pessoasCadastradas.especialidadeMedico = infoPessoa.especialidadeMedico;
      this.pessoasCadastradas.cpfPessoa = infoPessoa.cpfPessoa;
      this.pessoasCadastradas.senhaPessoa = infoPessoa.senhaPessoa;
      this.pessoasCadastradas.confSenhaPessoa = infoPessoa.confSenhaPessoa;
    },

    limparTextoCadastro() {
      this.pessoasCadastradas.nomePessoa = "";
      this.pessoasCadastradas.cpfPessoa = "";
      this.pessoasCadastradas.especialidadeMedico = "";
      this.pessoasCadastradas.senhaPessoa = "";
      this.pessoasCadastradas.confSenhaPessoa = "";
    },

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

    confirmacaoExcluir(infoPessoa) { // excluir um array/tupla no bd, aqui vc escolhe oq fica melhor pra conectar no bd, e muda tbm se precisar
      
      //metodo de excluir se os ids ficam vazios ou undefined
      infoPessoa.nomePessoa = undefined;
      infoPessoa.especialidadeMedico = undefined;
      infoPessoa.senhaPessoa = undefined;
      infoPessoa.cpfPessoa = undefined;
      infoPessoa.confSenhaPessoa = undefined;

      /* metodo de excluir de o id da frente vai pro anterior e assim por diante/ DA FORMA QUE EU PROGRAMEI, VAI DAR MTO RUIM ESSA SEGUNDA FORMA, É MELHOR MANTER UM ID UNICO QUE QUANDO APAGADO, SÓ DELETA AQL TUPLA E PRONTO
      for(let i = infoPessoa.id; i < pessoasCad.length; i++) {  // nessa segunda forma, eu coloquei um parametro a mais (pessoasCad)
        
      aqui basicamente os elementos andam uma casa pra tras, e o elemento escolhido e "deletado", 
      é aí q a integracao entra, pra poder deletar de verdade os elementos, e com o bd é só excluír 
      a ultima posicao do id q tem que o resto vai sumir no window.location.reload()
        
      pessoasCad[i-1].nomePessoa = pessoasCad[i].nomePessoa;
      pessoasCad[i-1].especialidadeMedico = pessoasCad[i].especialidadeMedico;
      pessoasCad[i-1].cpfPessoa = pessoasCad[i].cpfPessoa;
      pessoasCad[i-1].senhaPessoa = pessoasCad[i].senhaPessoa;
      pessoasCad[i-1].confSenhaPessoa = pessoasCad[i].confSenhaPessoa;

      }*/
      window.location.reload(); // serve pra dar reload e atualizar os dados, pra n ficar com botao bugado e afins

      this.bExcluir = false; //tirar a tela de exclusao da nossa frente
    },


  },

  data() { // esse são os objetos, que vao ser usados nos métodos, e também são os que estão sendo utilizados lá no addEditarMedicoPaciente.vue passado por props(aql regiao do codigo verde)
    return {
      addEditar: "Cadastrar ",
      tipo: "Médico",
      acao: "Cadastrar",
      tipoConta: true,
      imagemMP: 'doctor.jpg',

      s1: false,
      bExcluir: false,
      bCerto: false,

      /* esses sao os objetos, mas que vao ser trocados pelos dados no bd e no backend(mas a sintaxe é essa), pra aparecer esses dados das pessoas, seja ela medico ou paciente
      por enquanto eu deixei uns prontos, porque nao ta conectado com o bd, e qnd tiver(com os dados dessa forma ou eu posso mudar se precisar de acordo com o bd), 
      os dados vao aparecer automaticamente no front*/

      pessoasCadastradas: [
        {id: 1, nomePessoa: 'Rafael', especialidadeMedico: 'Cirurgiao', cpfPessoa: '11122233344', senhaPessoa: 'senhaRafael', confSenhaPessoa: 'senhaRafael'},
        {id: 2, nomePessoa: 'Pedro', especialidadeMedico: 'Cardiologista', cpfPessoa: '11122233344', senhaPessoa: 'senhaPedro', confSenhaPessoa: 'senhaPedro'},
        {id: 3, nomePessoa: 'Emanuel', cpfPessoa: '11122233344', senhaPessoa: 'senhaEmanuel', confSenhaPessoa: 'senhaEmanuel'},
        {id: 4, nomePessoa: 'Joelma', especialidadeMedico: 'Neurocirurgiao', cpfPessoa: '11122233344', senhaPessoa: 'senhaJoelma', confSenhaPessoa: 'senhaJoelma'},
        {id: 5, nomePessoa: 'Amanda',  cpfPessoa: '11122233344', senhaPessoa: 'senhaAmanda', confSenhaPessoa: 'senhaAmanda'},
        {id: 1, nomePessoa: 'Rafael', especialidadeMedico: 'Cirurgiao', cpfPessoa: '11122233344', senhaPessoa: 'senhaRafael', confSenhaPessoa: 'senhaRafael'},
        {id: 2, nomePessoa: 'Pedro', especialidadeMedico: 'Cardiologista', cpfPessoa: '11122233344', senhaPessoa: 'senhaPedro', confSenhaPessoa: 'senhaPedro'},
        {id: 3, nomePessoa: 'Emanuel', cpfPessoa: '11122233344', senhaPessoa: 'senhaEmanuel', confSenhaPessoa: 'senhaEmanuel'},
        {id: 4, nomePessoa: 'Joelma', especialidadeMedico: 'Neurocirurgiao', cpfPessoa: '11122233344', senhaPessoa: 'senhaJoelma', confSenhaPessoa: 'senhaJoelma'},
        {id: 5, nomePessoa: 'Amanda',  cpfPessoa: '11122233344', senhaPessoa: 'senhaAmanda', confSenhaPessoa: 'senhaAmanda'},
        {id: 1, nomePessoa: 'Rafael', especialidadeMedico: 'Cirurgiao', cpfPessoa: '11122233344', senhaPessoa: 'senhaRafael', confSenhaPessoa: 'senhaRafael'},
        {id: 2, nomePessoa: 'Pedro', especialidadeMedico: 'Cardiologista', cpfPessoa: '11122233344', senhaPessoa: 'senhaPedro', confSenhaPessoa: 'senhaPedro'},
        {id: 3, nomePessoa: 'Emanuel', cpfPessoa: '11122233344', senhaPessoa: 'senhaEmanuel', confSenhaPessoa: 'senhaEmanuel'},
        {id: 3, nomePessoa: 'Emanuel', cpfPessoa: '11122233344', senhaPessoa: 'senhaEmanuel', confSenhaPessoa: 'senhaEmanuel'},
        {id: 3, nomePessoa: 'Emanuel', cpfPessoa: '11122233344', senhaPessoa: 'senhaEmanuel', confSenhaPessoa: 'senhaEmanuel'},
        {id: 3, nomePessoa: 'Emanuel', cpfPessoa: '11122233344', senhaPessoa: 'senhaEmanuel', confSenhaPessoa: 'senhaEmanuel'},
        {id: 3, nomePessoa: 'Emanuel', cpfPessoa: '11122233344', senhaPessoa: 'senhaEmanuel', confSenhaPessoa: 'senhaEmanuel'},
        {id: 3, nomePessoa: 'Emanuel', cpfPessoa: '11122233344', senhaPessoa: 'senhaEmanuel', confSenhaPessoa: 'senhaEmanuel'},
        {id: 3, nomePessoa: 'Emanuel', cpfPessoa: '11122233344', senhaPessoa: 'senhaEmanuel', confSenhaPessoa: 'senhaEmanuel'},
        {id: 4, nomePessoa: 'Joelma', especialidadeMedico: 'Neurocirurgiao', cpfPessoa: '11122233344', senhaPessoa: 'senhaJoelma', confSenhaPessoa: 'senhaJoelma'},
        {id: 5, nomePessoa: 'Amanda',  cpfPessoa: '11122233344', senhaPessoa: 'senhaAmanda', confSenhaPessoa: 'senhaAmanda'},
      ],

    }
  },
}
</script>

<style>
#container {
  display: flex;
  margin-left: 170px;
  justify-content: center;
  overflow-y: hidden;
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
  margin: 155px 0px 50px 50px;
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
}
.icone {
  height: 25px;
  width: 25px;
}
.excluir {
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: linear-gradient(0deg, #9dcadd, #aed4e5);
  border: 1px solid #000000;
  border-radius: 8px;
  width: 300px;
  height: 80px;
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
  height: 30px;
  width: 60px;
  margin-left: 10px;
}
.configPessoa {
  display: flex;
  flex-wrap: wrap;
  max-height: 780px;
  max-width: 600px;
  height: 780px;
  width: 600px;
  background-color: white;
  margin-right: 50px;

}
.blocos {
  overflow-y: scroll;
  margin-left: 40px;
  max-height: 600px;
  max-width: 600px;
  margin-top: 70px; 
}
.blocoDeInformacao {
  background: linear-gradient(180deg, #FFD666 0%, rgba(255, 255, 255, 0.5) 100%);
  border-radius: 8px;
  height: 80px;
  width: 500px;
  max-width: 500px;
  max-height: 80px;
}


</style>