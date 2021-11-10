function soma(a, b) {
    console.log(a + b);
}

// soma(2, 4);


function multiplicacao (a, b) {
    return a * b;
}

var resultado = multiplicacao(3, 3);
// console.log(resultado);

var busca = function() {
    console.log("Encontrou o que procurava.")
}

// busca();

var escreveNome = (nome, sobrenome) => {
    console.log(`${nome} ${sobrenome}`);
}

// escreveNome("Jo", "Soares");


var escreveTitulo = titulo => {
    console.log(`========================== ${titulo.toUpperCase()} ==========================`)
}

escreveTitulo("titulo da pagina")
escreveTitulo("Cadastro de clientes")
escreveTitulo("relatorios de vendas")
escreveTitulo("perfil do usuário")