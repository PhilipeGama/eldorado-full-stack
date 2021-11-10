var frutas = ["Banana", "Maçã", "Pêra", "Mamão", "Melancia", "Tangerina", "Uva"];

// for (var i in frutas) {
//     console.log("Fruta " + frutas[i]);
// }

var fornecedores = [
    {
        nome: "Coca-cola",
        endereco: "Rua tal"
    },
    {
        nome: "Unilever",
        endereco: "Rua qual"
    }
];

for (var fornecedor of fornecedores) {
    console.log(`Nome: ${fornecedor.nome}`);
    console.log(`Endereco: ${fornecedor.endereco}`);
    console.log("--------------------")
}