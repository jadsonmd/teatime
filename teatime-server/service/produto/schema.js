const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Prod {
    _id: String
    nome: String
    descricao: String
  }

  type Query {
    findProdById(_id: String): Prod
  }

`);

module.exports = schema;