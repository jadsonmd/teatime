const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Fornecedor {
    _id: String
    nome: String
    descricao: String
  }

  type Query {
    findFornecedorById(_id: String): Fornecedor
  }

`);

module.exports = schema;