const Produto = require('../../Schemas/Produtos');

const index = async (request, response) => {
    try {
        const resposta = await Produto.find({});
        return response.status(200).send(resposta);
    } catch (error) {
        return response.status(500).send(error);
    }
}

module.exports = index;