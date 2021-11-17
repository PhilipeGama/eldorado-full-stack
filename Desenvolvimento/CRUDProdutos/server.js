const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const routes = require("./config/routes")
app.use(routes);

app.listen(3001, () => {
    console.log(`Rodando na porta 3001`)
});