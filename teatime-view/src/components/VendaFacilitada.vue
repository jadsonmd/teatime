<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on">
          Venda Facilitada
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          <span>Venda Facilitada</span>
        </v-card-title>
          <v-list>
            <v-list-item v-for="item in listaProdutosVendidos" :key="item.nome" >

            <v-list-item-content>
              <v-list-item-title v-text="item.nome"></v-list-item-title>
            </v-list-item-content>

            <v-list-item-content>
              <v-text-field type="number" v-model="item.quantidade"></v-text-field>
            </v-list-item-content>

          </v-list-item>
        </v-list>

        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="fecharDialogProdutos">cancelar</v-btn>
          <v-btn text @click="venderProdutos">Vender</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'VendaFacilitada',
  props: ['listaProdutosVendidos'],

  data: () => ({
    dialog: false
  }),

  methods: {
    venderProdutos: async function () {
      this.dialog = false
    },
    fecharDialogProdutos: async function () {
      this.dialog = false
    }
  },

  computed: {

  }
}
</script>
