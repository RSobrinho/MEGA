<template>
  <div id="app">
    <ConfiguracoesPrincipais/>
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

        <button><a class="link" href="telalogin">Acessar Laudos</a></button>
        <img id="cir1" src="@/assets/circulo.svg" alt="circulo">
      </section>

      <section id="p2">
        <img id="doc" src="@/assets/doctor.jpg" alt="circulo">
        <img id="cir2" src="@/assets/circulo.svg" alt="circulo">

        <div>
          <h1 id="t2">Sobre nós</h1>
          <h6 id="pg2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin, sapien id suscipit suscipit, urna ex sodales ante, nec convallis nibh nisi a nibh. Aenean rutrum dui id dui varius, et consequat risus congue. Pellentesque maximus eu arcu a maximus. Cras ac diam pharetra, tincidunt nunc ac, mattis dolor. Donec ullamcorper arcu et vestibulum tincidunt. Mauris finibus lacus vitae accumsan euismod. Nullam ut eros sit amet sapien malesuada iaculis condimentum scelerisque elit. Maecenas non ipsum nec massa rutrum viverra. Nulla facilisi.</h6>
        </div>
      </section>


      <section id="p5">
        <img src="@/assets/DuckHealthLogo.png" width="160" height="147" alt="logoRodape">
        <p>Duck Health</p>
      </section>



  </div>
</template>

<script>

import ConfiguracoesPrincipais from '@/Components/configuracoesPrincipais.vue'

export default {
  name: 'TlandingPage',
  components: {
    ConfiguracoesPrincipais
  }
}

</script>

<style scoped>
#app {
  font-weight: 800;
}

.link {
  color: white;
  text-decoration: none;
  margin: 20px;
  font-size: 28px;
  font-weight: 700;
}
.logoPatoCabecalho {
  margin-top: 14px;
  margin-left: 130px;
  position: absolute;
  background-color: #2e4a7d;
  border-radius: 10px;
}
.links {
  text-align: right;
  margin: 42px 35px;
}
.cabecalho {
  background-color: #15c3d6;
  width: 100%;
  height: 118px;
  position: absolute;
  z-index: 3;
}


#p1 {
  background-color: #15c3d6;
  top: 118px;
  width: 100%;
  height: 672px;
  font-size: 30px;
  position: absolute;
  border-bottom-left-radius: 80px;
  z-index: 2;
}
#t1 {
  color: #FFD666;
  margin-top: 92px;
  margin-left: 150px;
  margin-bottom: 44px;
  font-size: 64px;
  
}
#pg1 {
  margin-left: 150px;
  width: 370px;
  font-size: 24px;
  text-align:justify;
  color: white;
  font-weight: 700;
}
button {
  background-color: #2e4a7d;
  width: 328px;
  height: 70px;
  border-radius: 20px;
  text-align: center;
  margin-top: 50px;
  margin-left: 171px;
  opacity: 1;
  font-size: 28px;
}
#cir1 {
  position: absolute;
  left: 85%;
  bottom: 55%;
}




#p2 {
  width: 100%;
  height: 664px;
  top: 790px;
  position: absolute;
}
#cir2 {
  left: 33.3%;
  top: -33.3%;
  z-index: 0;
  position: absolute;
}
#doc {
  max-height: 500px;
  max-width: 600px;
  z-index: 1;
  position: absolute;
  margin-top: 82px;
  margin-left: 83px;
}
#t2 {
  font-size: 48px;
  right: 0%;
}
#pg2 {
  font-size: 20px;
  text-align:justify;
  margin-right: 81px;

}




#p5 {
  position: absolute;
  top: 3072px;
  background-color: #15c3d6;
  border-top-right-radius: 80px;
  width: 100%;
}
p {
  display: inline-block;
  font-size: 40px;
}
</style>
