export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes; // tornando o método somente leitura com ReadonlyArray, assim encapsulamos a lista negociações, se modificar, teremos erro de compilação.
    }
}
