<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on">
          Criar Produto
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2">
          <span>Cadastro de Produtos</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            {{produto}}
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="produto.nome" label="Nome do produto" hint="Nome que está no rótulo para fácil localização" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="produto.laboratorio" label="Laboratório" hint="Laboratório fabricante do produto"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="produto.fornecedor" label="Fornecedor" hint="Fornecedor do produto"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="produto.descFornecedor" label="Desc. do fornecedor" hint="Telefone ou informação útil"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="produto.estoqueMinimo" type="number" label="Estoque mínimo" hint="Mínimo itens"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="produto.estoque" type="number" label="Estoque" hint="Número itens estoque"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="produto.estoqueMaximo" type="number" label="Estoque máximo" hint="Máximo itens"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="produto.precoCusto" type="number" label="Preço custo" hint="Valor pago pelo produto"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="produto.preco" type="number" label="Preço" hint="Preço de venda do produto"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Percentual" hint="Percentual de lucro"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="produto.lote" label="Lote do Produto" hint="Lote do produto"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="produto.dataFabricacao" type="date" label="Data Fabricação" hint="Data de validade do produto (2020-10-04)"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="produto.dataValidade" type="date" label="Data Validade" hint="Data de validade do produto (2020-09-30)"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-autocomplete v-model="produto.categoria"
                  :items="['Nutrição', 'Nutrição esportiva', 'Nutracêutico', 'Vitaminas', 'Granel', 'Chás']"
                  label="Categoria" multiple></v-autocomplete>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="produto.gtin" label="Codigo Barras" hint="Codigo de barras do produto"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-select v-model="produto.tipo" :items="['Cápsula', 'Líquido', 'Óleo', 'Pomada']" label="Tipo" hint="Como o produto é vendido"></v-select>
              </v-col>
              <v-col cols="12">
                <v-textarea v-model="produto.inicacaoTerapeutica" counter label="Descrição detalhada" hint="Indicação terapeutica, Posologia, Observação para o consumidor."></v-textarea>
              </v-col>
            </v-row>
          </v-container>
          <small>*Campos obrigatórios</small>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn text @click="closeDialogProduto">Close</v-btn>
          <v-btn text  @click="saveProduto">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'CadastrarProduto',
  data: () => ({
    dialog: false,
    produto: {}
  }),

  methods: {
    async saveProduto () {
      this.dialog = false
    },

    async closeDialogProduto () {
      this.produto = {}
      this.dialog = false
    }
  }
}
</script>

<style>

</style>
