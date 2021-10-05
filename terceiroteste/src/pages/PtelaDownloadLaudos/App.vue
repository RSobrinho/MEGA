<template>
  <div id="app">
      <section>
        <header class="cabecalho">
          <div class="logoPatoCabecalho"><img src="@/assets/DuckHealthLogo.png" height="90" width="auto" alt="pato"></div>
          
          <nav class="links">
            <span><a class="link" href="#p1">Início</a></span>
            <span><a class="link" href="#p2">Exames</a></span>
            <span><a class="link" href="#p3">Sobre</a></span>
            <span><a class="link" href="#p4">Contato</a></span>
          </nav>
        </header>
      </section>

      <section id="p1">
        <div>
        <h1 id="t1">Duck Health</h1>
        <h5 id="pg1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacinia euismod imperdiet. Pellentesque vel ultricies ante. lacinia euismod imperdiet. ultricies ante. </h5>
        </div>

        <div id="botaoLaudo"><a href="telaLogin">Acessar Laudos</a></div>
      </section>

      <section id="p5">
        <img src="@/assets/DuckHealthLogo.png" width="160" height="147" alt="logoRodape">
        <p>Duck Health</p>
      </section>



  </div>
</template>

<script>
import barraLateral from './components/barraLateral.vue'
import barraHorizontalPesquisa from './components/barraHorizontalPesquisa.vue'
import listaLaudo from './components/listaLaudo.vue'

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
#app {
  background-color: #ebf2f5;
  width: 100vw;
  height: 3219px;
  color: white;
  font-family:Arial, Helvetica, sans-serif;
}
</style>
