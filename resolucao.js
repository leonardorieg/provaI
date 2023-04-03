var Fornecedor = /** @class */ (function () {
    function Fornecedor(id, nome_Razao, cpf_cnpj, telefone, endereco) {
        this._id = id;
        this._nome_Razao = nome_Razao;
        this._cpf_cnpj = cpf_cnpj;
        this._telefone = telefone;
        this._endereco = endereco;
    }
    Object.defineProperty(Fornecedor.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fornecedor.prototype, "nome_Razao", {
        get: function () {
            return this._nome_Razao;
        },
        set: function (nome_Razao) {
            this._nome_Razao = nome_Razao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fornecedor.prototype, "cpf_cnpj", {
        get: function () {
            return this._cpf_cnpj;
        },
        set: function (cpf_cnpj) {
            this._cpf_cnpj = cpf_cnpj;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fornecedor.prototype, "telefone", {
        get: function () {
            return this._telefone;
        },
        set: function (telefone) {
            this._telefone = telefone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fornecedor.prototype, "endereco", {
        get: function () {
            return this._endereco;
        },
        set: function (endereco) {
            this._endereco = endereco;
        },
        enumerable: false,
        configurable: true
    });
    return Fornecedor;
}());
var Produto = /** @class */ (function () {
    function Produto(id, descricao, fornecedor, valorUnitario) {
        this._id = id;
        this._descricao = descricao;
        this._fornecedor = fornecedor;
        this._ValorUnitario = valorUnitario;
    }
    Object.defineProperty(Produto.prototype, "id", {
        get: function () {
            return this.id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "descricao", {
        get: function () {
            return this._descricao;
        },
        set: function (descricao) {
            this._descricao = descricao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "fornecedor", {
        get: function () {
            return this.fornecedor;
        },
        set: function (fornecedor) {
            this._fornecedor = fornecedor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "valorUnitario", {
        get: function () {
            return this._ValorUnitario;
        },
        set: function (valorUnitario) {
            if (valorUnitario <= 0) {
                console.log("o numero " + valorUnitario + " é invalido");
            }
            else {
                this._ValorUnitario = valorUnitario;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Produto;
}());
var Estoque = /** @class */ (function () {
    function Estoque(id, produto, quantidade) {
        this._id = id;
        this._produto = produto;
        this._quantidade = quantidade;
    }
    Object.defineProperty(Estoque.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Estoque.prototype, "produto", {
        get: function () {
            return this._produto;
        },
        set: function (produto) {
            this._produto = produto;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Estoque.prototype, "quantidade", {
        get: function () {
            return this._quantidade;
        },
        set: function (quantidade) {
            if (quantidade < 0) {
                console.log("valor " + quantidade + " é invalido");
            }
            else {
                this._quantidade = quantidade;
            }
        },
        enumerable: false,
        configurable: true
    });
    Estoque.prototype.ValorDoProdutoEmEstoque = function (estoque) {
        var vtotal;
        vtotal = estoque._quantidade * estoque.produto.valorUnitario;
        console.log("o valor total é: " + vtotal);
    };
    return Estoque;
}());
// teste questao 04
var f1 = new Fornecedor(1, "teste nome", 123456789, 48998449244, "Rua Augusto Ricken");
console.log(f1);
//teste questao 05
var p1 = new Produto(2, "batata", f1, 2.50);
console.log(p1);
// teste valor do atributo ValorUnitario não pode ser menor ou igual a zero.
p1.valorUnitario = 0;
p1.valorUnitario = -1;
//criando estoque
var e1 = new Estoque(1, p1, 10);
console.log(e1);
// teste atributo Quantidade não pode ser menor do que zero
e1.quantidade = -1;
//teste função ValorDoProdutoEmEstoque
e1.ValorDoProdutoEmEstoque(e1);
