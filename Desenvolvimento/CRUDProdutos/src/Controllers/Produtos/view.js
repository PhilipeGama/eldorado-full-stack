const Produto = require('../../Schemas/Produtos');

const VisualizarProduto = async (request, response) => {
    try {
        const id = request.params.id;
        const resposta = await Produto.findById(id);
        return response.status(200).send(resposta);
    } catch (error) {
        return response.status(500).send(error);
    }
}

module.exports = VisualizarProduto;