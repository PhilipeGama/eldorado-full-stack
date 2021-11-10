/*
    boletim escolar
    desenvolva um boletim escolar onde:
    - receba nome do aluno
    - receba 4 notas, de 0 a 10;
    - calcule a média;
    - imprima na tela:
        - nome do aluno
        - se média menor que 5, reprovado
        - se média entre 5.1 e 6.9, recuperação;
        - se média maior do que 7, aprovado;
        
    - precisa usar uma função pelo menos.
*/
var BoletimEscolar = () => {

    var getParam = (indice, fim) => {
        var params = process.argv.slice(2);

        if (typeof fim !== "undefined") {
            return params.slice(indice - 1, fim) || false;
        }

        return params[indice - 1] || false;
    }

    var nome = getParam(1);
    var notas = getParam(2, 5);

    var calculaMedia = notas => {
        var somatoria = 0;

        for (var i in notas) {
            if (notas[i] < 0 || notas[i] > 10) {
                return false;
            }
            somatoria += notas[i];
        }
        return somatoria / notas.length;
    }

    var media = calculaMedia(notas);

    if (media == false) {
        console.log("Notas precisam ser entre 0 e 10");
        return;
    }

    if (media < 5) {
        console.log(`${nome} foi aprovado!`);
        return;
    }

    if (media < 7) {
        console.log(`${nome} está de recuperação`);
        return;
    }

    if (media < 10) {
        console.log(`${nome} está reprovado!`);
    }
}

BoletimEscolar();