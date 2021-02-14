const graphql = require('graphql');
const ProdutoService = require("../service/produtoService")

const { 
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const ProdutoType = new GraphQLObjectType({
  name: 'Produto',
  fields: () => ({
    _id: { type: GraphQLID },
    nome: {type: GraphQLString },
    laboratorio: {type: GraphQLString },
    fornecedor: {type: GraphQLString },
    descFornecedor: {type: GraphQLString },
    estoqueMinimo: {type: GraphQLString },
    estoque: {type: GraphQLString },
    estoqueMaximo: {type: GraphQLString },
    precoCusto: {type: GraphQLString },
    preco: {type: GraphQLString },
    lote: {type: GraphQLString },
    dataFabricacao: {type: GraphQLString },
    dataValidade: {type: GraphQLString },
    categoria: {type: GraphQLList(GraphQLString) },
    gtin: {type: GraphQLString },
    tipo: {type: GraphQLString },
    inicacaoTerapeutica: {type: GraphQLString }
  })
});

const ProdutoInputType = new graphql.GraphQLInputObjectType({
  name: 'ProdutoInput',
  fields: () => ({
    _id: { type: GraphQLID },
    nome: {type: GraphQLString },
    laboratorio: {type: GraphQLString },
    fornecedor: {type: GraphQLString },
    descFornecedor: {type: GraphQLString },
    estoqueMinimo: {type: GraphQLString },
    estoque: {type: GraphQLString },
    estoqueMaximo: {type: GraphQLString },
    precoCusto: {type: GraphQLString },
    preco: {type: GraphQLString },
    lote: {type: GraphQLString },
    dataFabricacao: {type: GraphQLString },
    dataValidade: {type: GraphQLString },
    categoria: {type: GraphQLList(GraphQLString) },
    gtin: {type: GraphQLString },
    tipo: {type: GraphQLString },
    inicacaoTerapeutica: {type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    produto: {
      type: ProdutoType,
      args: { id: { type: GraphQLID } },
      resolve (parent, args) {
        //return Produto.findById(args.id);
        console.log('findProdutoById');
        return ProdutoService.findProdutoById(args.id);
      }
    },
    produtos: {
      type: new GraphQLList(ProdutoType),
      resolve (parent, args) {
        //return Produto.find({});
        console.log('findAllProduto');
        return ProdutoService.findAllProduto();
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addProduto: {
      type: ProdutoType,
      args: {
        produto: { type: new GraphQLNonNull(ProdutoInputType) }
      },
      resolve(parent, args) {
        /*let produto = new Produto({
          name: args.name,
          genre: args.genre
        });*/
        //return produto.save();
        console.log('saveProduto');
        return ProdutoService.saveProdutoMongoDB(args.produto);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});