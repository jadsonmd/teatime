const { buildSchema } = require('graphql');

const schema = buildSchema(`
type Cliente {
  id: String
  name: String
  celular: String
}

type Query {
  findClienteById(id: String): Cliente
}

`);

module.exports = schema;