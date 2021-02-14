const Produto = require('../../model/produto');
const { queryMongoDB } = require("../../datasources");

module.exports = { 
  findProdutoById: function (id) {
    console.log(id);
    console.log('findProdutoById');
    return Produto.findById(id);
  },

  findAllProduto: function () {
    console.log('findAllProduto');
    return Produto.find({});
  },

  saveProduto: function (produto) {
    console.log('saveProduto');
    return Produto.saveProduto(produto);
  },
  
  saveProdutoMongoDB: async function (produto) {
    console.log('saveProdutoMongoDB');
    return await queryMongoDB(async (dbo) => {

      console.log(dbo);

      await dbo.collection("produto").insertOne(produto);

      return produto;
    });
  }
}

/*
mutation {
  addProduto(produto: {nome: "Castanha da india", fornecedor: "ApisNutri", 
    descFornecedor: "Paraná", estoqueMinimo: "10", estoque: "9", 
    estoqueMaximo: "15", precoCusto: "9.90", preco: "28.00", 
    lote: "987987", dataFabricacao: "2020-04-01", dataValidade: "2022-12-17", 
    categoria: ["Nutrição", "Vitaminas"], gtin: "897654", tipo: "Cápsula", 
    inicacaoTerapeutica: "Produto indicado para circulação sanguinea"}) {
    _id
    nome
    fornecedor
  }
}
*/