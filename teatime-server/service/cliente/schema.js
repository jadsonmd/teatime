const { buildSchema } = require('graphql');
const fieldsProduto = `
  _id: String
  nome: String
  laboratorio: String
  fornecedor: String
  descFornecedor: String
  estoqueMinimo: String
  estoque: String
  estoqueMaximo: String
  precoCusto: String
  preco: String
  lote: String
  dataFabricacao: String
  dataValidade: String
  categoria: String
  gtin: String
  tipo: String
  inicacaoTerapeutica: String
`;

const schema = buildSchema(`
type Cliente {
  id: String
  name: String
  celular: String
}

type Produto {
  ${fieldsProduto}
}

input ProdutoInput {
  ${fieldsProduto}
}

type Query {
  findClienteById(id: String): Cliente
  findProdutoById(id: String): Produto
  findAllProduto: [Produto]
}

type Mutation {
  addProduto(produto: ProdutoInput): Produto
}
`);

module.exports = schema;