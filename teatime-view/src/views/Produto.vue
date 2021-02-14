<template>
  <v-container>
    <BaixarEstoque :listaProdutos="baixarProdutosEstoque" />
    <v-card>
      <v-card-title>
        Lista de produtos Teatimeeee
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="produtos"
        :search="search"
      >
      <template v-slot:item.actions="{ item }">
        <v-icon medium @click="editarItem(item)"> mdi-pencil </v-icon>
        <v-icon medium @click="buscarItemEstoque(item)"> mdi-check-bold </v-icon>
      </template>
    </v-data-table>
    </v-card>
    <br />
    <span>
      <CadastrarProduto />
      <VendaFacilitada :listaProdutosVendidos="baixarProdutosEstoque" />
    </span>
  </v-container>
</template>

<script>

import BaixarEstoque from '@/components/BaixarEstoque'
import CadastrarProduto from '@/components/CadastrarProduto'
import VendaFacilitada from '@/components/VendaFacilitada'

export default {
  components: { BaixarEstoque, CadastrarProduto, VendaFacilitada },

  data () {
    return {
      search: '',
      headers: [
        {
          text: 'Nome Produto',
          align: 'start',
          sortable: false,
          value: 'nome'
        },
        { text: 'Laboratorio', value: 'laboratorio' },
        { text: 'Indicação', value: 'indicacao' },
        { text: 'Tipo', value: 'tipo' },
        { text: 'Estoque', value: 'estoque', align: 'end' },
        { text: 'Preço', value: 'preco', align: 'end' },
        { text: 'Ações', value: 'actions', align: 'center', sortable: false }
      ],
      produtos: [
        { nome: 'Geleia Real', laboratorio: 'ApisNutri', preco: 67.00, precoCusto: 0.0, indicacao: 'Imunidade', tipo: 'Cápsula', estoque: 0, estoqueMin: 0, estoqueMax: 0 },
        { nome: 'Cartilagem de Tubarão', laboratorio: 'ApisNutri', preco: 30.00, precoCusto: 0.0, indicacao: 'Articulações', tipo: 'Cápsula', estoque: 0, estoqueMin: 0, estoqueMax: 0 },
        { nome: 'Calcio de Ostras', laboratorio: 'ApisNutri', preco: 28.00, precoCusto: 0.0, indicacao: 'Ossos', tipo: 'Cápsula', estoque: 0, estoqueMin: 0, estoqueMax: 0 },
        { nome: 'Vitager', laboratorio: 'Bioflora', preco: 40.00, precoCusto: 0.0, indicacao: 'Memória', tipo: 'Líquido', estoque: 0, estoqueMin: 0, estoqueMax: 0 }
      ],
      baixarProdutosEstoque: []
    }
  },

  methods: {

    buscarItemEstoque: function (item) {
      this.baixarProdutosEstoque.push(item)
    },

    editarItem: (item) => {
      console.log(item.laboratorio)
    }

  },

  computed: {

  }
}

</script>

<style scoped>

.v-chip.liquido{
  background: greenyellow;
}

.v-chip.capsula{
  background: green;
}

.v-chip.pomada{
  background-color: yellow;
}
</style>
