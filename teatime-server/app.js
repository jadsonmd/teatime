const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const expressPlayground = require("graphql-playground-middleware-express").default;
const { mergeSchemas } = require('@graphql-tools/merge');
const { mergeResolvers } = require('@graphql-tools/merge');

const schemaCliente = require('./service/cliente/schema');
const resolverCliente = require('./service/cliente/resolver');

const schemaProduto = require('./service/produto/schema');
const resolverProduto = require('./service/produto/resolver');

const schemaFornecedor = require('./service/fornecedor/schema');
const resolverFornecedor = require('./service/fornecedor/resolver');

const mergedSchema = mergeSchemas({
  schemas: [
    schemaCliente,
    schemaFornecedor,
    schemaProduto,
  ]
});

const mergedResolvers = mergeResolvers([
  resolverCliente,
  resolverFornecedor,
  resolverProduto,
  ]
);

const app = express();
const port = 3000;

app.use('/graphql', graphqlHTTP(req => {
  return ({schema: mergedSchema, rootValue: mergedResolvers })
}));

//Graphql Playground route
app.get("/playground", expressPlayground({ endpoint: "/graphql" }));

app.listen(port, () => {
  console.log(`now i can listen you on ${port}`);
});