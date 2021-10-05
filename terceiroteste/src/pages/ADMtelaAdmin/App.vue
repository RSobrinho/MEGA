<template>
  <div id="app">



  </div>
</template>

<script>

import controlePacienteMedico from './components/controlePacienteMedico.vue'
import barraLateral from './components/barraLateral.vue'

export default {
  name: 'ADMtelaAdmin',
  components: {
    controlePacienteMedico,
    barraLateral
  }
}

</script>

<style>
#app {
  background-color: #ebf2f5;
  width: 100vw;
  height: 3219px;
  color: white;
  font-family:Arial, Helvetica, sans-serif;
}
</style>
