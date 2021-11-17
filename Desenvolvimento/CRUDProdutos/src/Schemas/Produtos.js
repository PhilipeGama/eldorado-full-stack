const mongoose = require('../../config/database');

const ProdutoSchema = new mongoose.Schema({
    nome: String,
    descricao: String,
    preco: mongoose.Decimal128
});

const Produto = mongoose.model('Produto', ProdutoSchema);

module.exports = Produto