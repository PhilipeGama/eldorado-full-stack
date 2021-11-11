const express = require('express');
var app = express();

app.get('/hello-world-express', (request, response) => {
    response.send('Hello World Express!!');
});

app.get('/rota-2', (req, res) => {
    res.send("Rota 2");
})

app.listen(8000, () => {
    console.log("Rodando na porta 8000");
})