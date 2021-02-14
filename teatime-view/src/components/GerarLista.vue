<template>
  <v-container class="my-5">
      <v-row row wrap >
        <v-chip @click="listaProdutos.splice(listaProdutos.indexOf(lista), 1)" v-for="lista in listaProdutos" :key="lista.nome" small >{{lista.nome}}</v-chip>
      </v-row>
      <v-btn @click="listaProdutos = []" >Gerar lista</v-btn>
      <v-btn @click="listaProdutos = []" >limpar</v-btn>
    </v-container>
</template>

<script>
export default {
  data () {
    return {
      listaProdutos: []
    }
  }

}
</script>

<style>

</style>
