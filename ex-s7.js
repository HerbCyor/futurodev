//exercicio 1

class Produto {
    _nome;
    _preco;
    _quantidade;
    //exercicio 2
    constructor(nome, preco, quantidade) {
        this._nome = nome;
        this._preco = preco;
        this._quantidade = quantidade;
    }
    //exercicio 3
    vender(quantidadeVendida) {
        if (quantidadeVendida > this._quantidade) {
            console.log("Estoque insuficiente")
            return
        }
        this._quantidade -= quantidade_vendida
        console.log(`${quantidadeVendida} unidade de ${this._nome} vendidas.. ${this._quantidade} unidades em estoque.`)
        return

    }
    // exercicio 4
    repor(quantidadeReposta) {
        this._quantidade += quantidadeReposta
        console.log(`${quantidadeReposta} unidades do produto ${this._nome} repostas. Total atual: ${this._quantidade}`)
    }
    //exercicio 5
    mostrarEstoque() {
        console.log(`Produto ${this._nome} possui ${this._quantidade} disponíveis.`)
    }
    //exercicio 6
    atualizarPreco(novoValor) {
        this._preco = novoValor
    }
}

//exercicio 7
class Pessoa {
    _nome;
    _idade;
    _profissao;

    get nome() {
        return this._nome;
    }
    get idade() {
        return this._idade;
    }
    get profissao() {
        return this._profissao;
    }
    constructor(nome, idade, profissao) {
        this._nome = nome;
        this._idade = idade;
        this._profissao = profissao;
    }
    toJSON() {
        return {
            nome: this._nome,
            idade: this._idade,
            profissao: this._profissao,

        }
    }
}

//exercicio 8
class Cliente extends Pessoa {
    _telefone;
    _email;
    _clienteDesde;

    constructor(nome, idade, profissao, telefone, email) {
        super(nome, idade, profissao);
        this._telefone = telefone;
        this._email = email;
        let today = new Date()
        this._clienteDesde = today.toISOString().split("T")[0]
    };

    get telefone() {
        return this._telefone
    }
    get email() {
        return this._email
    }
    get clienteDesde() {
        return this._clienteDesde
    }

    toJSON() {
        return {
            nome: this._nome,
            idade: this._idade,
            profissao: this._profissao,
            telefone: this._telefone,
            email: this._email,
            clienteDesde: this._clienteDesde,
        }
    }
}
