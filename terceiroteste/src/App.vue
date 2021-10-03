<template>
  <div id="app">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet">
    

    <div class="container-fluid">

     <section>
       <div class="row">
        <header class="linhasCima">
          <img src="@/assets/bg-login-curves-right.svg" alt="TesteDir">
        </header>

        <div class="logoPato col-sm-3 col-xs-12"><img src="@/assets/DuckHealthLogo.png" height="50" width="auto" alt="pato"></div>
        <h4 class="l1">Duck<div class="l2">Health</div></h4>
        </div>
      </section>

      <section class="caixaLogin">
        <h1 class="titulo">Bem-vindo</h1>
        <h2 class="subtitulo">Acesse seus <span style="color: #FFD666;">laudos</span> agora!</h2>
        
        <form class="dados" method="get" action="../assets/teste.txt">
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
  </div>

</template>


<script>
//import HelloWorld from './components/HelloWorld.vue' biblioteca frontend chamada axius; a api e o backend

/*axius.get(localhost:3000/cadastrar-medico) , ler documentacao do axios, ou axios*/

export default {
  name: 'telaPrincipal',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Nunito', sans-serif;
  background-color: white;
  width: 100vw;
  height: 100vh;

}
.linhasCima {
  position: absolute;
  right: 0%;
  max-width: 100%;
  height: auto;
}
.logoPato {
  margin-top: 30px;
  margin-left: 45px;
  position: absolute;
  background-color: #2e4a7d;
  border-radius: 10px;
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

</style>
