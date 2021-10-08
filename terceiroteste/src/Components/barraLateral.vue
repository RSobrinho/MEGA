<template>
  <div>
    <configuracoesPrincipais/>
    <div id="barra">
      <button @click="$emit('voltar')">
        <img id="logo" src="@/assets/DuckHealthLogo.png" alt="logopato">
      </button>
    </div>
  </div>
</template>

<script>

import configuracoesPrincipais from "./configuracoesPrincipais.vue"

export default {
  name: 'barraLateral',
  emits: ['voltar'],
  components: {
    configuracoesPrincipais
  }
}
</script>

<style>
#barra {
  position: relative;
  background-color: #15c3d6;
  width: 112px;
  height: 100%;
  border-radius: 0px 8px 8px 0px;
}
#logo {
  background-color: #2e4a7d;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  margin: 30px;
}
#botao {
  position:absolute;
  width: 50px;
  height: 50px;
  background-color: #12afcb;
  border-radius: 8px;
  padding: 9px;
  margin: 30px;
  bottom: 0%;
  top: auto;
  
}
</style>