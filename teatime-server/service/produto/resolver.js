const resolvers = {
  findProdutoById: async function (id) {
    return {_id: "1", nome: "cartilagem"};
  },
  findAllProduto: async function () {
    return [{_id: "1", nome: "cartilagem"},{_id: "2", nome: "Calcio"}];
  },
  addProduto: async function (produto) {
    return {}
  },
}

module.exports = resolvers;