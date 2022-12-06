export class Negociacoes {
    constructor() {
        this.negociacoes = []; // Array<Negociacao> = Negociacao[]
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // ReadonlyArray<Negociacao> = readonly Negociacao[]
    lista() {
        return this.negociacoes; // tornando o método somente leitura com ReadonlyArray, assim encapsulamos a lista negociações, se modificar, teremos erro de compilação.
    }
}
