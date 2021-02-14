//NÃO ESTÁ SENDO MAIS USADO.
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const produtoSchema = new Schema({
  id: Schema.Types.ObjectId,
  nome: String,
  laboratorio: String,
  fornecedor: String,
  descFornecedor: String,
  estoqueMinimo: Schema.Types.Decimal128,
  estoque: Schema.Types.Decimal128,
  estoqueMaximo: Schema.Types.Decimal128,
  precoCusto: Schema.Types.Decimal128,
  preco: Schema.Types.Decimal128,
  lote: String,
  dataFabricacao: Date,
  dataValidade: Date,
  gtin: String,
  tipo: String,
  inicacaoTerapeutica: String,
  categoria: [String]
});

module.exports = mongoose.model('Produto', produtoSchema);
