const express = require('express');
const router = express.Router();

const ListarProduto = require('../src/Controllers/Produtos/index');
const CadastrarProduto = require('../src/Controllers/Produtos/create');
const AtualizarProduto = require('../src/Controllers/Produtos/update');
const VisualizarProduto = require('../src/Controllers/Produtos/update');
const DeletarProduto = require('../src/Controllers/Produtos/delete');

const ProdutoValidator = require("../src/Validator/Produtos/ProdutoValidator").default;

router.get('/produtos',  ListarProduto);
router.get('/produtos/:id', VisualizarProduto);
router.post('/produtos', ProdutoValidator, CadastrarProduto);
router.put('/produtos/:id', ProdutoValidator, AtualizarProduto);
router.delete('/produtos/:id', DeletarProduto);

module.exports = router;










/*
    MVC -> Model, view e controller
    Model -> Responsavel pelos dados e pelo negocio. Entities/Schemas
    View -> Apresentação / HTML/CSS/JS -> SPA (React, ANgular), APP
    Controller -> Meio de campo da aplicação. Responsavel pelo fluxo do programa.

    API / REST / WebService
    SOAP -> XML -> Schema 
    REST -> endpoints -> verbos HTTP -> (GET, POST, PUT/PATCH, DELETE, OPTIONS, HEAD)
    {
        "id": 1,
        "nome": "Mouse Gamer",
        "descricao": "Mouse RGB Gamer que ajuda na sua "
    }

    PUT
    {
        "id": 1,
        "nome": "Mouse Gamer RGB",
        "descricao": "Mouse RGB Gamer que ajuda na sua "
    }
*/
