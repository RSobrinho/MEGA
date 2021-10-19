<template>
  <div>
    <configuracoesPrincipais/>
    <div id="barra">
      <img id="logo" src="@/assets/DuckHealthLogo.png" alt="logo">
      <button id="botao" @click="$emit('voltar')">
        <img id="logout" src="@/assets/logout.png" alt="logopato">
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
  position:fixed;
  background-color: #15c3d6;
  width: 112px;
  height: 100vh;
  border-radius: 0px 8px 8px 0px;

}
#logo {
  position: absolute;
  top: 30px;
  left: 30px;
  height: 50px;
  width: 50px;
  background-color: #2E4A7D;
  border-radius: 8px;

}

#logout {
  width: 40px;
  height: 40px;
}
#botao {
  width: 55px;
  height: 55px;
  border-style: none;
  position:absolute;
  background-color: #12afcb;
  border-radius: 16px;
  left: 30px;
  bottom: 30px;
  
}
</style>