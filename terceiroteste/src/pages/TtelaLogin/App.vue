<template>
  <div id="app">
    <ConfiguracoesPrincipais/>
     <section>
        <header class="linhasCima">
          <img src="@/assets/bg-login-curves-right.svg" alt="TesteDir">
        </header>

        <div class="logoPato"><img src="@/assets/DuckHealthLogo.png" height="50" width="auto" alt="pato"></div>
        <h4 class="l1">Duck<div class="l2">Health</div></h4>
      </section>


      <section class="caixaLogin">
        <h1 class="titulo">Bem-vindo</h1>
        <h2 class="subtitulo">Acesse seus <span style="color: #FFD666;">laudos</span> agora!</h2>
        
        <form class="dados" method="POST" action="../assets/teste.txt">
          <div>
            <div class="b1"><input type="text" name="cpf" id="cpf" placeholder="Escreva aqui seu CPF"></div>
            <div class="b2"><input type="password" name="senha" id="senha" placeholder="Escreva aqui a senha"></div>
            <div class="b3"><input type="submit" name="enviar" id="enviar" value="Entrar"></div>
          </div>
        </form>

        <h5>Esqueceu sua senha? <a href="restaurarSenha"><span class="restSenha">Clique Aqui!</span></a></h5> 
      </section>
      
      <section>
        <footer class="linhasBaixo">
          <img src="@/assets/bg-login-curves-left.svg" alt="TesteEsq">
        </footer>
      </section>
  </div>
</template>


<script>
import ConfiguracoesPrincipais from '@/Components/configuracoesPrincipais.vue'

export default {
  name: 'TtelaLogin',
  components: {
    ConfiguracoesPrincipais
  }
}
</script>

<style scoped>
.linhasCima {
  position: absolute;
  right: 0%;
  max-width: 100%;
  height: auto;
}
.linhasBaixo {
  position: absolute;
  bottom: 0%;
}
.logoPato {
  margin-top: 30px;
  margin-left: 45px;
  position: absolute;
  background-color: #2e4a7d;
  border-radius: 10px;
  max-width: 50px;
  max-height: 50px;
}
.l1 {
  display: inline-block;
  margin-top: 25px;
  margin-left: 120px;
  color: #FFD666;
}
.l2 {
  color: #00DDF9;
}
.caixaLogin {
  background-image:linear-gradient(to bottom, #4f73fd, #03becd);
  min-height: 500px;
  min-width: 500px;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  font-family:inherit;
  color: white;
  text-align: center;
}
.titulo {
  font-size: 36px;
  font-weight: 700;
  margin-top: 30px;
}
.subtitulo {
  font-size: 24px;
}
h5 {
  position: absolute;
  top: 395px;
  left: 87px;
  font-size: 20px;
}
.restSenha {
  color: #FFD666;
  text-decoration-line: none;
  text-decoration-style: solid;
}
#cpf {
  position: absolute;
  top: 172px;
  left: 50px;
  border: 1px solid #3C5D95;
  border-radius: 8px;
  width: 400px;
  height: 50px;
  font-size: 18px;
  font-weight: 500;
}
#senha {
  position: absolute;
  top: 246px;
  left: 50px;
  border: 1px solid #3C5D95;
  border-radius: 8px;
  width: 400px;
  height: 50px;
  font-size: 18px;
  font-weight: 500;
}
#enviar {
  position: absolute;
  top: 329px;
  left: 50px;
  border-radius: 8px;
  width: 400px;
  height: 60px;
  background-color: #FFD666;
  color: #3C5D95;
  font-size: 30px;
  font-weight: 600;
}
</style>
