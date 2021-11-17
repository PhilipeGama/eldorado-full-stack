const Produto = require('../../Schemas/Produtos');

const CreateProduto = async (request, response) => {
    try {
        const dados = request.body;
        const resposta = await Produto.create(dados);
        return response.status(200).send(resposta);
    } catch (error) {
        return response.status(500).send(error);
    }
}

module.exports = CreateProduto;