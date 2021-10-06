<template>
  <div>
    <configuracoesPrincipais/>
    <div id="barra">
      <div>
        <img id="logo" src="@/assets/DuckHealthLogo.png" alt="logopato">
      </div>
      <div id="sair">
        <a href="javascript:history.back()"><img id="botao" src="@/assets/logout.png" alt="botaoVoltar"></a>
      </div>
    </div>
  </div>
</template>

<script>

import configuracoesPrincipais from "./configuracoesPrincipais.vue"

export default {
  name: 'barraLateral',
  components: {
    configuracoesPrincipais
  }
}
</script>

<style>
#barra {
  position: absolute;
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