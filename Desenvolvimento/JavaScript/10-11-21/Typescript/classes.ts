
type Produtos = {};

class Clientes {
    private _id:number;
    private _nome:string;
    private _cpf:string;
    private _senha:string;

    // getid() {
    //     return this.id;
    // }

    // setId(id:number) {
    //     this.id = id;
    // }

    // getSenha(){
    //     if(autenticado) {
    //         return this.senha;
    //     }
    // }

    get ID(){
        return this._id;
    }
    set ID(id:number) {
        if (id < 0) {
            console.log("Erro da ID");
            return;            
        }
        this._id = id;
    }

    get Nome(): string{
        return this._nome;
    }

    set Nome(nome:string) {
        this._nome = nome
    }

    comprar(produtos: Array<Produtos>, valorTotal: number): boolean {
        return false;
    }

    listarCompras(): void {

    }




}

let cli = new Clientes();
cli.ID = 2;
cli.Nome = "Gilson";

let xpto = cli.Nome;