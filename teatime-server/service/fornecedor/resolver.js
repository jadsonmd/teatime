const resolvers = {

  findFornById: async() => {
  //findFornById: async function (_id) {
    return {
      _id: "1",
      nome: "Jadson Fornecedor",
      descricao: "Teste teste"
    };
  },

}

module.exports = resolvers;