const resolvers = {
  findClienteById: async function (id) {
    return {
      id: "1",
      name: "Jadson",
      celular: "48 9 9991-6679"
    };
  },
}

module.exports = resolvers;