<template>
    <div id="container">

      <img id="imagem" src='@/assets/doctor3.jpg'>
        <div id="formulario">
          <form id="dados" method="POST" action="NÃO SEI ;-;">
            <h1 id="cadEditMedPac">Cadastrar Novo <span id="profissao">Paciente</span></h1>
            <div id="blocosDeInformacao">
              <div><input type="text" name="nomeCompleto" id="nomeCompleto" class="bInfo" placeholder="Nome Completo"></div>
              <div><input type="text" name="cpf" id="cpf" class="bInfo" placeholder="CPF"></div>
              <div><input type="password" name="senha" id="senha" class="bInfo" placeholder="Senha"></div>
              <div><input type="password" name="cpf" id="confirmarSenha" class="bInfo" placeholder="Confirmar Senha"></div>
              <div><input type="submit" name="enviar" id="enviar" class="bInfo" value="Cadastrar"></div>
            </div>
          </form>
        </div>
    </div>
</template>

<script>

export default {
  name: 'cadastrarPaciente',
  components: {
  },
  props: {
    // props para mudar o texto do front msm (Obs, mudei isso e fiz 4 componentes ao invés de 1 pra ficar mais tranquilo no back, mudando os valores, entao nao precisa mais delas)

    /* props para os valores do bd serem chamados, e aparecerem escritos no form,
    e permitindo mudanca no bd se for editar paciente ou medico*/
    /*nomePessoa: String,
    especialidadeMedico: String,
    cpfPessoa: String,
    senhaPessoa: String,
    confSenhaPessoa: String,
    id: String*/
    // nao precisa mais, ja que eu dividi em 4 componentes

  },
}
</script>

<style scoped>
#container {
  display: flex;
  align-items: top;
  justify-content: center;
  margin-left: 100px;
  
}
#imagem {
  vertical-align: middle;
  height: auto;
  width: 450px;
  object-fit: cover;
}
#formulario {
  background-color: white;
}
#cadEditMedPac {
  margin: 20px;
  font-weight: 800;
  font-size: 40px;
  margin-bottom: 40px;
}
#dados {
  margin-left: 40px;
  margin-right: 40px;
}
#profissao {
  color: #ff738a;
}
#blocosDeInformacao {
  text-align: center;
}
.bInfo {
  padding: 5px;
  font-size: 20px;
  height: 65px;
  width: 350px;
  margin-bottom: 25px;
  border-radius: 8px;
  border: 1px solid #2E4A7D;
  background-color: #F5F5F5;

}
#enviar {
  background-color: #2E4A7D;
  color: white;
  margin-top: 20px;
  font-size: 22px;
}
</style>