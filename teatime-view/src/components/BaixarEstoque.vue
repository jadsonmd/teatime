<template>
  <v-row row wrap >
    <v-spacer></v-spacer>
    <v-chip @click="listaProdutos.splice(listaProdutos.indexOf(lista), 1)" v-for="lista in listaProdutos" :key="lista.nome" small >{{lista.nome}}</v-chip>
    <v-spacer></v-spacer>
  </v-row>
</template>

<script>
export default {
  name: 'BaixarEstoque',
  props: ['listaProdutos'],

  data () {
    return {
    }
  }
}
</script>

<style>

</style>
