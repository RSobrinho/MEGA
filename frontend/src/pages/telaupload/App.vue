<template>
  <div>
    <barraLateral @voltar="retornar"/>
    <barraHorizontalPesquisa/>
    <ConfiguracoesPrincipais/>
    <div id="container">
      <div id="listaLaudosPaciente">
        <h1>Laudos de {{pessoasCadastradas[idPaciente-1].nomePessoa}}</h1>
        <div id="divider1"></div>
        <div v-for="laudo in laudos" :key="laudo.idInterno"> <!-- o id dos laudos vai estar lincado com o id do paciente, n sei como vai ser feito, mas pra que puxe os laudos da pessoa especifica vai ser assim acho -->
          <div id="blocoLaudo" v-show="laudo.idL == idPaciente">
            <div id="infoEsc">
              <div id="nomeLaudo">{{laudo.nomeLaudo}}</div>
              <div id="medicoDoLaudo">{{laudo.medicoDoLaudo}}</div>
            </div>
            <div id="infoDir">
              <a href="laudoEspecifico.txt" :download="laudo.arquivo"><img id="icon1" src="@/assets/download.png" alt="downloadIcon"></a> <!-- E os downloads tbm vao ter q estar conectados no bd -->
              <button id="bExc" @click="bExcluir = true, bCerto = laudo.idInterno"><img id="icon2" src="@/assets/trash.png" alt="excluirLaudo"></button>
              <div id="dataDoLaudo">{{laudo.dataDoLaudo}}</div>
            </div>
            
            <div v-show="bExcluir == true && bCerto == laudo.id">
              <h2>Quer realmente excluir esse laudo?</h2>
              <button class="bSim" @click="confirmacaoExcluir(laudo)">Sim</button>
              <button class="bNao" @click="bExcluir = false">Não</button>
            </div>
          </div>
        </div>
      </div>
      
      <div id="carregarLaudo">
        <h1> Carregar Novo Laudo</h1>
        <div id="divider2"></div>
        <div id="areaUpload">
          <img id="uploadLogo" src="@/assets/upload.png" alt="uploadLogo">
          <div id="texto">Arraste Aqui <div>ou</div></div>
          <form action="">
            <div id="uploadArquivo">
              <label for="upload">Escolha um Arquivo</label>
              <input id="upload" type="file" name="upload">
            </div>
          </form>
          
        </div>
          <form id="formularioDuvidas" method="POST" action="NÃO SEI ;-;">
            <div id="p1Form">
              <div id="textoP1">Nome do Laudo</div>
              <input type="text" name="nomeDoLaudo" id="nomeDoLaudo">
            </div>
            <div id="p2Form">
              <div id="textoP2">Data</div>
              <input type="text" name="data" id="data">
            </div>
            <input type="submit" name="Nome" id="enviarLaudo" value="Enviar Laudo">
          </form>
      </div>
    </div>

  </div>
</template>

<script>

import barraLateral from '@/Components/barraLateral.vue'
import barraHorizontalPesquisa from '@/Components/barraHorizontalPesquisa.vue'
import ConfiguracoesPrincipais from '@/Components/configuracoesPrincipais.vue'
 

export default {
  name: 'MtelaUpload',
  components: {
    ConfiguracoesPrincipais,
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
      laudo.dataDoLaudo = undefined;
      this.bExcluir = false;
      
      window.location.reload();
      
    },

    retornar() {
      window.history.back();
    }

  },

  data() {
    return {
      idPaciente: 10, // seguinte, aqui pra eu terminar de programar eu dei um valor de id valido, mas normalmente eu setaria como 0
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
        {idInterno: 1, idL: 3, arquivo: '@/testeLaudos/l2.txt', nomeLaudo: 'Eletrocardiograma', medicoDoLaudo: 'Dr Hans Chucrute', dataDoLaudo: "03/05/2009"},
        {idInterno: 2, idL: 3, arquivo: '@/testeLaudos/l2.txt', nomeLaudo: 'Sondagem', medicoDoLaudo: 'Dr Hans Chucrute', dataDoLaudo: "03/05/2010"},
        {idInterno: 3, idL: 3, arquivo: '@/testeLaudos/l3.txt', nomeLaudo: 'Exame de sangue', medicoDoLaudo: 'Dr Hans Chucrute', dataDoLaudo: "03/05/2011"},
        {idInterno: 4, idL: 3, arquivo: '@/testeLaudos/l4.txt', nomeLaudo: 'Colonoscopia', medicoDoLaudo: 'Dr Hans Chucrute', dataDoLaudo: "03/05/2012"},
        {idInterno: 5, idL: 3, arquivo: '@/testeLaudos/l5.txt', nomeLaudo: 'Laparoscopia', medicoDoLaudo: 'Dr Hans Chucrute', dataDoLaudo: "03/05/2013"},
        {idInterno: 6, idL: 3, arquivo: '@/testeLaudos/l6.txt', nomeLaudo: 'SusAmonguscromia', medicoDoLaudo: 'Dr Hans Chucrute', dataDoLaudo: "03/05/2014"},

        // "referenciando" a pessoa com id 3 no obj idL, que nao tem especialidade portanto é paciente
        {idInterno: 1, idL: 10, arquivo: '@/testeLaudos/l7.txt', nomeLaudo: 'Eletrocardiograma', medicoDoLaudo: 'Dr Hans Chucrute', dataDoLaudo: "03/05/2015"},
        {idInterno: 2, idL: 10, arquivo: '@/testeLaudos/l8.txt', nomeLaudo: 'Sondagem', medicoDoLaudo: 'Dr Hans Chucrute', dataDoLaudo: "03/05/2016"},
        {idInterno: 3, idL: 10, arquivo: '@/testeLaudos/l9.txt', nomeLaudo: 'Exame de sangue', medicoDoLaudo: 'Dr Hans Chucrute', dataDoLaudo: "03/05/2017"},
        {idInterno: 4, idL: 10, arquivo: '@/testeLaudos/l10.txt', nomeLaudo: 'Colonoscopia', medicoDoLaudo: 'Dr Hans Chucrute', dataDoLaudo: "03/05/2018"},
        {idInterno: 5, idL: 10, arquivo: '@/testeLaudos/l11.txt', nomeLaudo: 'Laparoscopia', medicoDoLaudo: 'Dr Hans Chucrute', dataDoLaudo: "03/05/2019"},
        {idInterno: 6, idL: 10, arquivo: '@/testeLaudos/l12.txt', nomeLaudo: 'SusAmonguscromia', medicoDoLaudo: 'Dr Hans Chucrute', dataDoLaudo: "03/05/2020"},

        // "referenciando" a pessoa com id 3 no obj idL, que nao tem especialidade portanto é paciente
        {idInterno: 1, idL: 13, arquivo: '@/testeLaudos/l13.txt', nomeLaudo: 'Eletrocardiograma', medicoDoLaudo: 'Dr Hans Chucrute', dataDoLaudo: "03/05/2021"},
        {idInterno: 2, idL: 13, arquivo: '@/testeLaudos/l14.txt', nomeLaudo: 'Sondagem', medicoDoLaudo: 'Dr Hans Chucrute', dataDoLaudo: "03/05/2022"},
        {idInterno: 3, idL: 13, arquivo: '@/testeLaudos/l15.txt', nomeLaudo: 'Exame de sangue', medicoDoLaudo: 'Dr Hans Chucrute', dataDoLaudo: "03/05/2023"},
        {idInterno: 4, idL: 13, arquivo: '@/testeLaudos/l16.txt', nomeLaudo: 'Colonoscopia', medicoDoLaudo: 'Dr Hans Chucrute', dataDoLaudo: "03/05/2024"},
        {idInterno: 5, idL: 13, arquivo: '@/testeLaudos/l17.txt', nomeLaudo: 'Laparoscopia', medicoDoLaudo: 'Dr Hans Chucrute', dataDoLaudo: "03/05/2025"},
        {idInterno: 6, idL: 13, arquivo: '@/testeLaudos/l18.txt', nomeLaudo: 'SusAmonguscromia', medicoDoLaudo: 'Dr Hans Chucrute', dataDoLaudo: "03/05/2026"},
      ]
    }


  }
}

</script>

<style>
input[type="file"] {
  display: none;
}
label {
  background-color:#2E4A7D;
  color: white;
  font-size: 14px;
  border-radius: 8px;
  padding: 10px 30px;
}
#uploadArquivo {
  margin-top: 5px;
}
#container {
margin-left: 170px;
display: flex;
justify-content: center;
position: relative;
top: 50px
}
#listaLaudosPaciente {
  background: white;
  width: 520px;
  height: 520px;
  overflow-y: scroll;
  overflow-x: hidden;
  border-radius: 15px;
}
h1 {
  font-size: 24px;
  margin-left: 140px;
}
#divider1 {
  border: 1px solid rgba(29, 37, 53, 0.5);
  width: 440px;
  height: 1px;
  margin-left: 30px;
  margin-bottom: 30px;
}
#blocoLaudo {
  background: linear-gradient(180deg, #FFD666 0%, rgba(255, 214, 102, 0.5) 100%);
  border-radius: 8px;
  margin-bottom: 10px;
  margin-left: 20px;
  height: 76px;
  width: 460px;
  display: flex;
  justify-content: space-between;
}

#nomeLaudo {
  font-size: 20px;
  margin-top: 10px;
  margin-left: 20px;

}
#medicoDoLaudo {
  font-size: 16px;
  color: #2E4A7D80;
  margin-left: 20px;

}
#bExc {
  position: relative;
  height: 32px;
  width: 32px;
  background: #2E4A7D;
  border-style: none;
  border-radius: 20px;
  top: 2px;
}
a {
  position: relative;
  top: 5px;
  margin-right: 10px;
}
#icon1 {
  height: 33px;
  width: 33px;
  background: #2E4A7D;
  border-radius: 20px;
  object-fit: cover;
}
#icon2 {
  position: relative;
  height: 29px;
  width: 29px;
  left: 0px;
}
#dataDoLaudo {
  font-size: 16px;
  color: #2E4A7D80;
  margin-right: 10px;
  margin-top: 10px;
}



#carregarLaudo {
  background: white;
  min-height: 520px;
  min-width: 520px;
  height: 520px;
  width: 520px;
  margin-left: 100px;
  border-radius: 15px;
}
h1 {
  position: relative;
  top: 25px;
  margin-bottom: 50px;
}
#divider2 {
  border: 1px solid rgba(29, 37, 53, 0.5);
  margin: 0px 0px 40px 40px;
  width: 440px;
  height: 1px;
}
#areaUpload{
	background: #F5F5F5;
  border: 1px dashed #2E4A7D;
	width: 440px;
  height: 180px;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#uploadLogo {
  height: 55px;
  width: 55px;
  margin-top: 20px;
}
#texto {
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  font-weight: 500px;
}
#formularioDuvidas {
  margin-top: 30px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#p1Form {
  background: #F5F5F5;
  border-radius: 8px 8px 8px 0px;
  height: 100px;
  width: auto;
}
#textoP1 {
  margin-top: 10px;
  margin-left: 10px;
}
#nomeDoLaudo {
  margin-left: 25px;
  margin-right: 25px;
  width: 400px;
  height: 35px;
  border: 1px solid #2E4A7D;
  border-radius: 5px;
}
#p2Form {
  background: #F1F1F1;
  border-radius: 0px 0px 8px 8px;
  height: 70px;
  width: auto;
  align-self: flex-start;
  display: inline-block;
  margin-left: 35px;
}
#textoP2 {
  position: relative;
  margin-left: 10px;
  bottom: 12px;
}
#data {
  margin-left: 22px;
  margin-right: 22px;
  width: 120px;
  height: 35px;
  border-radius: 5px;  
  border: 1px solid #2E4A7D;
}
#enviarLaudo {
  position: relative;
  color: white;
  display: inline-block;
  background: #2E4A7D;
  border-radius: 8px;
  width: 270px;
  height: 45px;
  left: 100px;
  bottom: 50px;
}

</style>
