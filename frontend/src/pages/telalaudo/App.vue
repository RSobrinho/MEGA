<template>
  <div id="app">
    <ConfiguracoesPrincipais/>
    <BarraLateral @voltar="retornar"/>
    <BarraHorizontalPesquisa/>

    <div id="container">
      <div v-for="(laudo, index) in laudos" :key="index">
        <div id="fundo" >
          <div id="blocoLaudo">
            <div id="infoCima">
              
              <div id="nomeLaudo">Laudo de {{laudo.nomelaudo}}</div>
              <div id="imagem"><img id="iconEsteto" src="@/assets/estetoscopio.png" alt="iconEsteto"></div>
              
            </div>
            <div id="divider"></div>
            <div id="infoBaixo">
              <div id="medicoDoLaudo">Dr.(a) {{laudo.nomedoutor}}</div>
              
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
import axios from 'axios'



export default {
  name: 'telalaudo',
  components: {
    BarraLateral,
    BarraHorizontalPesquisa,
    ConfiguracoesPrincipais
  },

  data() {
    return {
      idPacienteCerto: 10, // seguinte, aqui pra eu terminar de programar eu dei um valor de id valido, mas normalmente eu setaria como 0
      laudos: [],
      

    }
  },

  methods: {
    retornar() {
      window.history.back();
    }

  },
  async created(){
     const response = await axios.get('http://localhost:3000/listar-laudos')
     this.laudos = response.data
     console.log(this.laudos)
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
