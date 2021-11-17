const Produto = require('../../Schemas/Produtos');

const UpdateProduto = async (request, response) => {
    try {
        const dados = request.body;
        const id = request.params.id;
        const resposta = await Produto.findByIdAndUpdate(id, dados);
        return response.status(200).send(resposta);
    } catch (error) {
        return response.status(500).send(error);
    }
}

module.exports = UpdateProduto;