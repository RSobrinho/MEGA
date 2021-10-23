<template>
  <div id="app">
    <configuracoesPrincipais/>
    <barraLateral/>
    <barraHorizontalPesquisa/>

    <div id="container">
      <div id="blocos">
        <div v-for="(paciente, index) in pacientes" :key="index">
          <div id="blocoDeInformacao" >
            
            <div id="bordinha"><img src="@/assets/quad-card-patient.png" alt="quadriculado"></div>
            <a @click="jao=paciente.idpaciente" href="telaupload?=+jao" ><img id="logoPaciente" src="@/assets/patient.png" alt="paciente"></a>
            <h1 id="t1">{{paciente.nome}}</h1>
            <h4>{{paciente.cpf}}</h4>
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
import axios from 'axios'
//v-for, item.nome,

export default {
  name: 'listapacientes',
  components: {
    configuracoesPrincipais,
    barraLateral,
    barraHorizontalPesquisa
  },
  data() {
      return{
        pacientes: [],
        jao: ''
      };   
  },
  props: {
    idPaciente: Number
  },
  methods: {
    
  },

    
  async created(){
     const response = await axios.get('http://localhost:3000/listar-pacientes')
     this.pacientes = response.data
     
     console.log(this.pacientes)
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
