<template>
  <div id="app">
    <barraLateral/>
    <barraHorizontalPesquisa/>
    <listaLaudo/>
  </div>
</template>

<script>
import barraLateral from '@/Components/barraLateral.vue'
import barraHorizontalPesquisa from '@/Components/barraHorizontalPesquisa.vue'
import listaLaudo from '@/Components/listaLaudo.vue'

export default {
  name: 'PtelaDownloadLaudos',
  components: {
    barraLateral,
    listaLaudo,
    barraHorizontalPesquisa
  }
}

</script>

<style>
</style>
