<template>
  <div id="app">
    <ConfiguracoesPrincipais/>
    <BarraLateral @voltar="retornar"/>
    <BarraHorizontalPesquisa/>

    <div id="container">
      <div v-for="laudo in laudos" :key="laudo.idInterno">
        <div id="fundo" v-show="laudo.idPaciente == idPacienteCerto">
          <div id="blocoLaudo">
            <div id="infoCima">
              <div id="nomeLaudo">Laudo de {{laudo.nomeLaudo}}</div>
              <div id="imagem"><img id="iconEsteto" src="@/assets/estetoscopio.png" alt="iconEsteto"></div>
              
            </div>
            <div id="divider"></div>
            <div id="infoBaixo">
              <div id="medicoDoLaudo">{{laudo.medicoDoLaudo}}</div>
              <div id="infoData">
                <img id="iconCalendar" src="@/assets/calendar.png" alt="iconCalendar">
                <span id="dataLaudo">  |  {{laudo.dataDoLaudo}}</span>
              </div>
            </div>
            <div id="fundoDownload">
              <a href="laudoEspecifico.txt" :download="laudo.arquivo">
                <div id="downloadLaudo">
                  <img id="iconDownload" src="@/assets/download.png" alt="iconDownload"> <span id="textoLaudo">Baixar laudo</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BarraLateral from '@/Components/barraLateral.vue'
import BarraHorizontalPesquisa from '@/Components/barraHorizontalPesquisa.vue'
import ConfiguracoesPrincipais from '@/Components/configuracoesPrincipais.vue'

export default {
  name: 'PtelaDownloadLaudos',
  components: {
    BarraLateral,
    BarraHorizontalPesquisa,
    ConfiguracoesPrincipais
  },

  data() {
    return {
      idPacienteCerto: 10, // seguinte, aqui pra eu terminar de programar eu dei um valor de id valido, mas normalmente eu setaria como 0

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
        {idInterno: 1, idPaciente: 3, arquivo: '@/testeLaudos/l2.txt', nomeLaudo: 'Eletrocardiograma', medicoDoLaudo: 'Dr Hans Chucrute', dataDoLaudo: "03/05/2009"},
        {idInterno: 2, idPaciente: 3, arquivo: '@/testeLaudos/l2.txt', nomeLaudo: 'Sondagem', medicoDoLaudo: 'Dr Hans Chucrute', dataDoLaudo: "03/05/2010"},
        {idInterno: 3, idPaciente: 3, arquivo: '@/testeLaudos/l3.txt', nomeLaudo: 'Exame de sangue', medicoDoLaudo: 'Dr Hans Chucrute', dataDoLaudo: "03/05/2011"},
        {idInterno: 4, idPaciente: 3, arquivo: '@/testeLaudos/l4.txt', nomeLaudo: 'Colonoscopia', medicoDoLaudo: 'Dr Hans Chucrute', dataDoLaudo: "03/05/2012"},
        {idInterno: 5, idPaciente: 3, arquivo: '@/testeLaudos/l5.txt', nomeLaudo: 'Laparoscopia', medicoDoLaudo: 'Dr Hans Chucrute', dataDoLaudo: "03/05/2013"},
        {idInterno: 6, idPaciente: 3, arquivo: '@/testeLaudos/l6.txt', nomeLaudo: 'SusAmonguscromia', medicoDoLaudo: 'Dr Hans Chucrute', dataDoLaudo: "03/05/2014"},

        // "referenciando" a pessoa com id 3 no obj idL, que nao tem especialidade portanto é paciente
        {idInterno: 1, idPaciente: 10, arquivo: '@/testeLaudos/l7.txt', nomeLaudo: 'Eletrocardiograma', medicoDoLaudo: 'Dr Hans Chucrute', dataDoLaudo: "03/05/2015"},
        {idInterno: 2, idPaciente: 10, arquivo: '@/testeLaudos/l8.txt', nomeLaudo: 'Sondagem', medicoDoLaudo: 'Dr Hans Chucrute', dataDoLaudo: "03/05/2016"},
        {idInterno: 3, idPaciente: 10, arquivo: '@/testeLaudos/l9.txt', nomeLaudo: 'Exame de sangue', medicoDoLaudo: 'Dr Hans Chucrute', dataDoLaudo: "03/05/2017"},
        {idInterno: 4, idPaciente: 10, arquivo: '@/testeLaudos/l10.txt', nomeLaudo: 'Colonoscopia', medicoDoLaudo: 'Dr Hans Chucrute', dataDoLaudo: "03/05/2018"},
        {idInterno: 5, idPaciente: 10, arquivo: '@/testeLaudos/l11.txt', nomeLaudo: 'Laparoscopia', medicoDoLaudo: 'Dr Hans Chucrute', dataDoLaudo: "03/05/2019"},
        {idInterno: 6, idPaciente: 10, arquivo: '@/testeLaudos/l12.txt', nomeLaudo: 'SusAmonguscromia', medicoDoLaudo: 'Dr Hans Chucrute', dataDoLaudo: "03/05/2020"},

        // "referenciando" a pessoa com id 3 no obj idL, que nao tem especialidade portanto é paciente
        {idInterno: 1, idPaciente: 13, arquivo: '@/testeLaudos/l13.txt', nomeLaudo: 'Eletrocardiograma', medicoDoLaudo: 'Dr Hans Chucrute', dataDoLaudo: "03/05/2021"},
        {idInterno: 2, idPaciente: 13, arquivo: '@/testeLaudos/l14.txt', nomeLaudo: 'Sondagem', medicoDoLaudo: 'Dr Hans Chucrute', dataDoLaudo: "03/05/2022"},
        {idInterno: 3, idPaciente: 13, arquivo: '@/testeLaudos/l15.txt', nomeLaudo: 'Exame de sangue', medicoDoLaudo: 'Dr Hans Chucrute', dataDoLaudo: "03/05/2023"},
        {idInterno: 4, idPaciente: 13, arquivo: '@/testeLaudos/l16.txt', nomeLaudo: 'Colonoscopia', medicoDoLaudo: 'Dr Hans Chucrute', dataDoLaudo: "03/05/2024"},
        {idInterno: 5, idPaciente: 13, arquivo: '@/testeLaudos/l17.txt', nomeLaudo: 'Laparoscopia', medicoDoLaudo: 'Dr Hans Chucrute', dataDoLaudo: "03/05/2025"},
        {idInterno: 6, idPaciente: 13, arquivo: '@/testeLaudos/l18.txt', nomeLaudo: 'SusAmonguscromia', medicoDoLaudo: 'Dr Hans Chucrute', dataDoLaudo: "03/05/2026"},
      ]

    }
  },

  methods: {
    retornar() {
      window.history.back();
    }
  }
}

</script>

<style>
#container {
  margin-left: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  top: 50px;
}
#fundo {
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid #D3E2E5;
  width: 530px;
  height: 320px;
  margin-left: 70px;
  margin-bottom: 40px;
}
#blocoLaudo {
  margin-left: 27px;
  margin-top: 27px;
  border-radius: 8px 8px 8px 8px;
  background: linear-gradient(180deg, #FFD666 0%, rgba(255, 214, 102, 0.5) 100%);
  width: 475px;
  height: 253px;
}
#infoCima {
  margin-left: 30px;
  margin-top: 20px;
}
#nomeLaudo {
  font-size: 25px;
  margin-left: 50px;
  text-align: center;
  position: relative;
  top: 20px;
  font-weight: bolder;

}
#divider {
  border: 2px solid #f6f9fa;
  width: 475px;
  height: 0px;
  position: relative;
  bottom: 37px;
  z-index: 0;
}
#imagem {
  position: relative;
  background: #2E4A7D;
  border: 2.5px solid #FFFFFF;
  height: 75px;
  width: 75px;
  border-radius: 50%;
  z-index: 1;
}
#iconEsteto {
  height: 50px;
  width: 50px;
  margin-top: 11px;
  margin-left: 10px;

}


#infoBaixo {
  margin-left: 35px;
  font-weight: bolder;
}
#medicoDoLaudo {
  font-size: 23px;
  margin-bottom: 60px;
}
#dataLaudo { 
  font-size: 18px;
}
#iconCalendar {
  position: relative;
  top: 8px;
  height: 30px;
  width: 30px;
}



#downloadLaudo {
  background: #12AFCB;
  border-radius: 8px 8px 8px 8px;
  height: 36px;
  width: 190px;
}
a {
  color: white;
}
#iconDownload {
 height: 30px;
 width: 30px;
 position: relative;
 left: 15px;
 top: 4px;
}
#textoLaudo {
  position: relative;
  bottom: 6px;
  left: 20px;
}
#fundoDownload {
  background: #f6f9fa;
  height: 50px;
  width: 200px;
  padding-left: 15px;
  padding-top: 12px;
  position: relative;
  left: 280px;
  bottom: 30px;
  border-radius: 8px 0px 0px 0px;
}
</style>
