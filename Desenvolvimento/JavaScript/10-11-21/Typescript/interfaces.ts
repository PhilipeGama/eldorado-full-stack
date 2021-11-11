interface Filme {
    titulo:string;
    sinopse?:string;
    readonly ano_lancamento:number;
    genero:string;
    titulosSemelhantes: (genero:string) => void
}

const vingadores: Filme = {
    titulo: "Vingadores",
    ano_lancamento: 2012,
    genero: "ação",
    titulosSemelhantes(genero:string): void {
        console.log(`Esses são os filmes semelhantes pelo genero tal ${genero}`);
    }
}

interface Veiculo {
    // marca: string;
    // modelo: string;
    // cor: string;
    // ano: number;
    // virar: (direcao: string) => void;
    // acelerar: (velocidade:number) => void;
    // freiar: () => void;
    estacionar: () => void;
}

class Carro implements Veiculo {

    estacionar(): void {
        console.log('estacionando o carro ... ');
    }
}

class Moto implements Veiculo {
    estacionar(): void {
        console.log('estacionando o mato ... ');
    }
}


class Garagem
{
    private _veiculo: Veiculo;

    constructor(veiculo: Veiculo) {
        this._veiculo = veiculo;
    }

    get Veiculo() {
        return this._veiculo;
    }

    estacionar() {
        this.Veiculo.estacionar();
    }
}

const carro = new Carro();
const garagem = new Garagem(carro);
garagem.estacionar();

// DDD - Domain Driver Design
// Clean Arch - Robert Martin

// interface Carro extends Veiculo {
//     qtde_portas: number;
// }

// const gol: Carro = {
//     marca: "VW",
//     modelo: "Gol",
//     cor: "Preto",
//     ano: 2003,
//     qtde_portas: 4
// }