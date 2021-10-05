<template>
  <div id="app">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800&display=swap" rel="stylesheet">
  </div>
</template>

<script>
//biblioteca frontend chamada axius; a api e o backend
/*axius.get(localhost:3000/cadastrar-medico) , ler documentacao do axios, ou axios*/

export default {
  name: 'configuracoesPrincipais',
  components: {
  }
}
</script>

<style>
/*reset css*/
*{margin:0; padding: 0; box-sizing: border-box; font-family: 'Nunito', sans-serif;}
body {
  overflow-x:hidden;
  background-color: #ebf2f5;
  width: 100vw;
  height: 100vh;
  color: #2e4a7d;
  position: absolute;
  font-weight: 700;
}
</style>
