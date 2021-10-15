<template>
  <div id="app">
    <ConfiguracoesPrincipais/>
      <section>
        <header class="cabecalho">
          <div class="logoPatoCabecalho"><img src="@/assets/DuckHealthLogo.png" height="90" width="auto" alt="pato"></div>
          
          <nav class="links">
            <span><a class="link" href="#p1">Início</a></span>
            <span><a class="link" href="#p3">Exames</a></span>
            <span><a class="link" href="#p2">Sobre</a></span>
            <span><a class="link" href="#p4">Contato</a></span>
          </nav>
        </header>
      </section>

      <section id="p1">
        <div>
        <h1 id="t1">Duck Health</h1>
        <h5 id="pg1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacinia euismod imperdiet. Pellentesque vel ultricies ante. lacinia euismod imperdiet. ultricies ante. </h5>
        </div>

        <button><a class="link" href="login">Acessar Laudos</a></button>
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

      <section id="p3">
        <h2 id="t3">Exames</h2>
        <div>
          <div class="imagemTexto1">
            <img class="imagemCima" src="@/assets/doctor.jpg" alt="medicoPaciente2">
            <h6 class="textoBaixo1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin,</h6>
          </div>
          <div class="imagemTexto1">
            <img class="imagemCima" src="@/assets/doctor3.jpg" alt="medicoPaciente2">
            <h6 class="textoBaixo1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin,</h6>
          </div>
          <div class="imagemTexto1">
            <img class="imagemCima" src="@/assets/doctor2.jpg" alt="medicoPaciente2">
            <h6 class="textoBaixo1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin,</h6>
          </div>
        </div>
        <div>
          <div class="imagemTexto2">
            <img class="imagemCima" src="@/assets/doctor3.jpg" alt="medicoPaciente2">
            <h6 class="textoBaixo2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin,</h6>
          </div>
          <div class="imagemTexto2">
            <img class="imagemCima" src="@/assets/doctor.jpg" alt="medicoPaciente2">
            <h6 class="textoBaixo2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin,</h6>
          </div>
        </div>
      </section>


      <section id="p4">
        <section id="infoEndereco">
          <div>
            <img id="cir3" src="@/assets/circulo.svg" alt="circulo">
          </div>

          <h1 id="t4">Endereço</h1>
          <h6 class="pg4">Rua dos Doidões, Bairro Muito Doido, N° 127</h6>
          <h6 class="pg4">Ambiente climatizado, para o seu conforto ao atende-lo!</h6>
          <h6 class="pg4">Sala com brinquedos e passa-tempo para as crianças!</h6>

        </section>
        <section id="mapa">
          <img id="mp" src="@/assets/maps.jpg" alt="mapa">
        </section>

      </section>

      <section id="p5">
        <div>
          <form id="formularioDuvidas" method="POST" action="NÃO SEI ;-;">
            <div id="botHor">
              <input type="text" name="Nome" id="nome" placeholder="Nome">
              <input type="text" name="Email" id="email" placeholder="Email">
            </div>
            <div id="contatos">
              <h1 id="t5">Contatos</h1>
              <div>
                <img class="logos l1" src="@/assets/telefone.png" alt="telefone">
                <h3 class="pg5">67(0000-0000) ou 67(00000-0000)</h3>
              </div>
              <div>
                <img class="logos l2" src="@/assets/instagram.png" alt="telefone">
                <h3 class="pg5">@Duck_Health</h3>
              </div>
              <div>
                <img class="logos l3" src="@/assets/facebook.png" alt="telefone">
                <h3 class="pg5">Duck Heath</h3>
              </div>
              <div>
                <img class="logos l4" src="@/assets/linkedin.png" alt="telefone">
                <h3 class="pg5">Duck Heath</h3>
              </div>
              
              
              
              
            </div>
            <div id="botVert">
              <input type="text" name="comentar" id="comentar" placeholder="Como podemos ajudar? Escreva sua dúvida">
              <input type="submit" name="enviar" id="enviar" value="Enviar">
            </div>
          </form>
        </div>
      </section>

      <section id="p6">
        <img src="@/assets/DuckHealthLogo.png" width="160" height="147" alt="logoRodape">
        <p id="marca">Duck Health</p>
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


#p2 {
  width: 100%;
  height: 664px;
  top: 790px;
  position: absolute;
  display: flex;
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
  top: 80px;
  right: 280px;
  z-index: 1;
}
#pg2 {
  position: absolute;
  font-size: 20px;
  text-align:justify;
  width: 507px;
  z-index: 1;
  right: 130px;
  top: 180px;
}


#p3 {
  width: 100%;
  height: 656px;
  top: 1446px;
  position: absolute;
  background-color: #FFD666;
  border-radius: 0px 222px 0px 220px;
}
#t3 {
  font-weight: 800;
  font-size: 38px;
  margin-top: 22px;
  margin-left: 80px;
}
.imagemTexto1 {
  display: inline-block;
  margin-left: 240px;
  margin-top: 30px;
  margin-right: 0px;
  position: relative;
  text-align: center;
}
.imagemTexto2 {
  display: inline-block;
  margin-left: 440px;
  margin-right: -250px;
  position: relative;
  text-align: center;
}
.imagemCima {
  height: 150px;
  width: 150px;
  object-fit: cover;
  border: 2.5px solid #2E4A7D;
  border-radius: 300px;
}
.textoBaixo1 {
  font-size: 20px;
  width: 220px;
}
.textoBaixo2 {
  font-size: 20px;
  width: 280px;
}

#p4 {
  width: 100%;
  height: 350px;
  margin-top: 2110px;
  position: absolute;
  display: inline-block;
}

#infoEndereco {
  margin-top: 20px;
  margin-left: 100px;
  display: inline-block;
}
#mapa {
  margin-top: 30px;
  margin-right: 80px;
  border-radius: 8px;
  display: inline-block;
  vertical-align: top;
  right: 0%;
  position: absolute;
}
#mp {
  height: 270px;
  width: 630px;
  object-fit: cover;
}
#t4 {
  font-size: 48px;
  margin: 20px;
  font-weight: 800;
}
.pg4 {
  font-size: 22px;
  margin-top: 35px;
  margin-left: 50px;
  font-weight: 800;
  color:  #2E4A7DCC;
}
#cir3 {
  position: absolute;
  margin: -300px;
  z-index: -1;
}


#p5 {
  width: 100%;
  height: 350px;
  margin-top: 2500px;
  position: absolute;
}
#formularioDuvidas {
  border-radius: 8px;
  margin-left: 20px;

}
#botHor {
  display: flex;
  flex-wrap: wrap;
  display: inline-block;
  margin-bottom: 10px;
}
#nome {
  margin-right: 10px;
  width: 345px;
  height: 50px; 
  border-style: none;
  border-radius: 8px;
  font-size: 20px;
}
#email {
  margin-right: 10px;
  width: 340px;
  height: 50px; 
  border-style: none;
  border-radius: 8px;
  font-size: 20px;
}

#comentar {
  margin-top: 10px;
  width: 700px;
  height: 160px; 
  border-style: none;
  border-radius: 8px;
  font-size: 20px;
  padding-bottom: 110px;
}
#enviar {
  margin-top: 20px;
  width: 700px;
  height: 50px; 
  border-style: none;
  border-radius: 8px;
  font-size: 20px;
  background-color: #2E4A7D;
  color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
#botVert {
  display: flex;
  flex-direction: column;
}
#contatos {
  right: 220px;
  top: 0px;
  display: flex;
  flex-direction: column;
  position: absolute;
}
#t5 {
  font-size: 48px;
  margin-bottom: 30px;
}
.pg5 {
  font-size: 24px;
  margin-bottom: 20px;
}
.logos {
  height: 30px;
  width: 30px;
  left: -50px;
  position: absolute;
}

#p6 {
  position: absolute;
  top: 2850px;
  background-color: #15c3d6;
  border-top-right-radius: 80px;
  width: 100%;
  color: white;
}
#marca {
  position: absolute;
  margin-top: 50px;
  display: inline-block;
  font-size: 40px;
}
</style>
