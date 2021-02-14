const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Forn {
    _id: String
    nome: String
    descricao: String
  }

  type Query {
    findFornById(_id: String): Forn
  }

`);

module.exports = schema;