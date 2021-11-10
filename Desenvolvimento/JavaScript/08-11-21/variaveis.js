var dia_semana = "Segunda-feira";
dia_semana = "Terça-feira"; // tipo string (texto)

var salario_liquido = 4000.00; // number (inteiro e float)
var administrador = true; // true ou false

var nome_cliente = null; // valor nulo, sem valor
var idade; // valor undefined

var frutas = ["Banana", "Maçã", "Pêra", "Mamão", "Melancia"];

var cliente = {
    nome: "Tio Patinhas",
    idade: 58
};

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

// console.log(dia_semana);
// console.log(salario_liquido);
// console.log(administrador);
// console.log(nome_cliente);
// console.log(idade);
// console.log(frutas);
// console.log(cliente);
// console.log(fornecedores);

console.log(typeof dia_semana);
console.log(typeof salario_liquido);
console.log(typeof administrador);
console.log(typeof nome_cliente);
console.log(typeof idade);
console.log(typeof frutas);
console.log(typeof cliente);
console.log(typeof fornecedores);

// Defina bem os nomes das variáveis, com o que ela realmente vai respresentar.
// var salarioBruto = 1000.00;
// var salarioLiquido = 900.00