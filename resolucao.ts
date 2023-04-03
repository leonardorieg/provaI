

class Fornecedor {
    private _id: number;
    private _nome_Razao: string;//por o nome ou a razao social da empresa
    private _cpf_cnpj: number;
    private _telefone: number;
    private _endereco: string;

    constructor(id: number, nome_Razao: string, cpf_cnpj: number, telefone: number, endereco: string) {
        this._id = id;
        this._nome_Razao = nome_Razao;
        this._cpf_cnpj = cpf_cnpj;
        this._telefone = telefone;
        this._endereco = endereco

    }


    public get id(): number {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }


    public get nome_Razao(): string {
        return this._nome_Razao;
    }

    public set nome_Razao(nome_Razao: string) {
        this._nome_Razao = nome_Razao;
    }


    public get cpf_cnpj(): number {
        return this._cpf_cnpj;
    }

    public set cpf_cnpj(cpf_cnpj: number) {
        this._cpf_cnpj = cpf_cnpj;
    }

    public get telefone(): number {
        return this._telefone;

    }

    public set telefone(telefone: number) {
        this._telefone = telefone;
    }

    public get endereco(): string {
        return this._endereco;
    }

    public set endereco(endereco: string) {
        this._endereco = endereco;
    }



}

class Produto {
    private _id: number;
    private _descricao: string;
 protected _fornecedor: Fornecedor;
    private _ValorUnitario: number;

    constructor(id: number, descricao: string, fornecedor: Fornecedor, valorUnitario: number) {
        this._id = id;
        this._descricao = descricao;
        this._fornecedor = fornecedor;
        this._ValorUnitario = valorUnitario;
    }


    public get id(): number {
        return this.id;
    }

    public set id(id: number) {
        this._id = id;
    }


    public get descricao(): string {
        return this._descricao;
    }

    public set descricao(descricao: string) {
        this._descricao = descricao;
    }


    public get fornecedor(): Fornecedor {
        return this.fornecedor;
    }

    public set fornecedor(fornecedor: Fornecedor) {
        this._fornecedor = fornecedor;
    }


    public get valorUnitario(): number {
        return this._ValorUnitario
    }

    public set valorUnitario(valorUnitario: number) {
        if (valorUnitario <= 0) {
            console.log("o numero " + valorUnitario + " é invalido");
        } else {
            this._ValorUnitario = valorUnitario;
        }
    }

}

class Estoque {
    private _id: number;
    private _produto: Produto;
    private _quantidade: number;

    constructor(id: number, produto: Produto, quantidade: number) {
        this._id = id;
        this._produto = produto;
        this._quantidade = quantidade;

    }


    public get id(): number {
        return this._id
    }

    public set id(id: number) {
        this._id = id;
    }

    public get produto(): Produto {
        return this._produto;
    }

    public set produto(produto: Produto) {
        this._produto = produto;
    }


    public get quantidade(): number {
        return this._quantidade;
    }

    public set quantidade(quantidade: number) {
        if (quantidade < 0) {
            console.log("valor " + quantidade + " é invalido");
        } else {
            this._quantidade = quantidade;
        }
    }
    ValorDoProdutoEmEstoque(estoque: Estoque) {
        let vtotal: Number;
        vtotal = estoque._quantidade * estoque.produto.valorUnitario
        console.log("o valor total é: " + vtotal);
    }



}
// teste questao 04
let f1 = new Fornecedor(1, "teste nome", 123456789, 48998449244, "Rua Augusto Ricken");
console.log(f1);

//teste questao 05
let p1 = new Produto(2, "batata", f1, 2.50);
console.log(p1);

// teste valor do atributo ValorUnitario não pode ser menor ou igual a zero.

p1.valorUnitario = 0;
p1.valorUnitario = -1

//criando estoque
let e1 = new Estoque(1, p1, 10);
console.log(e1);

// teste atributo Quantidade não pode ser menor do que zero
e1.quantidade = -1

//teste função ValorDoProdutoEmEstoque
e1.ValorDoProdutoEmEstoque(e1);

