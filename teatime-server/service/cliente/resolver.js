const resolvers = {
  findClienteById: async function (id) {
    return {
      id: "1",
      name: "Jadson",
      celular: "48 9 9991-6679"
    };
  },
  findProdutoById: async function (id) {
    return {
      _id: "1",
      nome: "Cartilagem",
      laboratorio: "ApisNutri"
    };
  },
  findAllProduto: async function () {
    return [{
      _id: "1",
      nome: "Cartilagem",
      laboratorio: "ApisNutri"
    },
    {
      _id: "2",
      nome: "teste",
      laboratorio: "teste"
    }];
  },
  addProduto: async function (produto) {
    console.log(produto);
    return {
      _id: "1",
      nome: "Cartilagem",
      laboratorio: "ApisNutri"
    }
  }
}

module.exports = resolvers;