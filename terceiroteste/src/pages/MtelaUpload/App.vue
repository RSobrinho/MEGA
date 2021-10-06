<template>
  <div id="app">
    <barraLateral/>
    <carregarNovoLaudo/>
  </div>
</template>

<script>

import carregarNovoLaudo from '@/Components/carregarNovoLaudo.vue'
import barraLateral from '@/Components/barraLateral.vue'

export default {
  name: 'MtelaUpload',
  components: {
    carregarNovoLaudo,
    barraLateral
  }
}

</script>

<style>
body {
  overflow-x:hidden;
  margin: 0;
  padding: 0;
  border: 0;
}
#app {
  background-color: #ebf2f5;
  width: 100vw;
  height: 3219px;
  color: white;
  font-family:Arial, Helvetica, sans-serif;
}
.link {
  color: white;
  text-decoration: none;
  margin: 20px;
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
  font-weight: 500;
  font-size: 28px;

}
.cabecalho {
  background-color: #15c3d6;
  width: 100%;
  height: 118px;
  position: absolute;
}

#p1 {
  background-color: #15c3d6;
  top: 118px;
  width: 100%;
  height: 672px;
  position: absolute;
  border-bottom-left-radius: 80px;

}
#t1 {
  color: #FFD666;
  margin-top: 92px;
  margin-left: 150px;
  margin-bottom: 44px;
  font-weight: 700;
  font-size: 52px;
}
#pg1 {
  margin-left: 150px;
  width: 300px;
  text-align:justify;
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
  font-weight: 500;
}
</style>
