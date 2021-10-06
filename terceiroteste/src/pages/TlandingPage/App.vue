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

      <section><div class="mtoespaco">testeteste</div></section>

      <section id="p3">
        <h2 id="t3">Exames</h2>

        <div class="imagemTexto">
          <img class="imagemCima" src="@/assets/doctor.jpg" alt="medicoPaciente2">
          <h6 class="textoBaixo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin,</h6>
        </div>
        <div class="imagemTexto">
          <img class="imagemCima" src="@/assets/doctor3.jpg" alt="medicoPaciente2">
          <h6 class="textoBaixo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin,</h6>
        </div>
        <div class="imagemTexto">
          <img class="imagemCima" src="@/assets/doctor2.jpg" alt="medicoPaciente2">
          <h6 class="textoBaixo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin,</h6>
        </div>
        <div class="imagemTexto">
          <img class="imagemCima" src="@/assets/doctor3.jpg" alt="medicoPaciente2">
          <h6 class="textoBaixo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin,</h6>
        </div>
        <div class="imagemTexto">
          <img class="imagemCima" src="@/assets/doctor.jpg" alt="medicoPaciente2">
          <h6 class="textoBaixo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin,</h6>
        </div>
      </section>


      <section id="p4">
        <div>
          <h1 id="t4">Endereço</h1>
          <div id="pg4">
            <h6>Rua X, Bairro Y, N° Z</h6>
            <h6>Ambiente climatizado, para o seu conforto ao atende-lo!</h6>
            <h6>Sala com brinquedos e passa-tempo para as crianças!</h6>
          </div>
        </div>
        <img id="mapa" src="@/assets/maps.jpg" alt="mapa">

      </section>

      <section id="p5">
        <form class="formularioDuvidas" method="POST" action="NÃO SEI ;-;">
          <div>
            <div class="b1"><input type="text" name="Nome" id="nome" placeholder="Nome"></div>
            <div class="b2"><input type="text" name="Email" id="email" placeholder="Email"></div>
            <div class="b3"><input type="text" name="enviar" id="enviar" placeholder="Como podemos ajudar? Escreva sua dúvida"></div>
            <div class="b4"><input type="submit" name="enviar" id="enviar" value="Enviar"></div>
          </div>
        </form>
        <div>
          <h1 id="t5">Contatos</h1>
          <div class="pg5">
            <h3>67(0000-0000) ou 67(00000-0000)</h3>
            <h3>@Duck_Health</h3>
            <h3>Duck Heath</h3>
            <h3>Duck Heath</h3>
          </div>
        </div>
      </section>

      <section id="p6">
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
body {
  width: 100%;
  height:100vh;
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


.imagemCima {
  max-height: 250px;
  max-width: 250px;
}

.mtoespaco {
  top: 400px;
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
  position: absolute;
  font-size: 48px;
  right: 0%;
  margin-top: 128px;
  margin-right: 156px;
  z-index: 1;
}
#pg2 {
  position: absolute;
  font-size: 20px;
  text-align:justify;
  width: 507px;
  z-index: 1;
  right: 0%;
  margin-right: 81px;
  margin-top: 226px;
}




#p6 {
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
