<template>
  <div id="app">
    <configuracoesPrincipais/>
    <barraLateral/>
    <controlePacienteMedico/>
  </div>
</template>

<script>

import controlePacienteMedico from '@/Components/controlePacienteMedico.vue'
import barraLateral from '@/Components/barraLateral.vue'
import configuracoesPrincipais from '@/Components/configuracoesPrincipais.vue'

export default {
  name: 'ADMtelaAdmin',
  components: {
    configuracoesPrincipais,
    controlePacienteMedico,
    barraLateral
  }
}

</script>

<style>

</style>
