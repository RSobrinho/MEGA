<template>
    <div>

      <img :src="require(`@/assets/${imagemMP}`)">
      <h1 id="cadEditMedPac">{{addEditar}}<span id="profissao">{{tipo}}</span></h1>

      <form class="dados" method="POST" action="NÃO SEI ;-;">
        <div>
          <div class="b1"><input type="text" name="nomeCompleto" id="nomeCompleto" placeholder="Nome Completo" :value="nomePessoa"></div>
          <div v-show="tipoConta"><input type="text" name="especialidade" id="especialidade" placeholder="Especialidade" :value="especialidadeMedico"></div>
          <div class="b3"><input type="text" name="cpf" id="cpf" placeholder="CPF" :value="cpfPessoa"></div>
          <div class="b4"><input type="password" name="senha" id="senha" placeholder="Senha" :value="senhaPessoa"></div>
          <div class="b5"><input type="password" name="cpf" id="confirmarSenha" placeholder="Confirmar Senha" :value="confSenhaPessoa"></div>
          <div class="b6"><input type="submit" name="enviar" id="enviar" :value="acao"></div>
        </div>
      </form>

    </div>
</template>

<script>

export default {
  name: 'addEditarMedicoPaciente',
  components: {
  },
  props: {
    // props para mudar o texto do front msm
    addEditar: String,
    tipo: String,
    acao: String,
    tipoConta: Boolean,
    imagemMP: String,

    /* props para os valores do bd serem chamados, e aparecerem escritos no form,
    e permitindo mudanca no bd se for editar paciente ou medico*/

    nomePessoa: String,
    especialidadeMedico: String,
    cpfPessoa: String,
    senhaPessoa: String,
    confSenhaPessoa: String,
    id: String

  },
  data() {
    return { 
    }
  }
}
</script>

<style>

</style>