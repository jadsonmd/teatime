const resolvers = {

  findProdById: async function (_id) {
    return {
      _id: "1",
      nome: "Jadson Produto",
      descricao: "Teste teste"
    };
  },

}

module.exports = resolvers;