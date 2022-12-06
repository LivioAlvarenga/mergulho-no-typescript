import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Array<Negociacao> = []; // Array<Negociacao> = Negociacao[]

  public adiciona(negociacao: Negociacao): void {
    this.negociacoes.push(negociacao);
  }

  // ReadonlyArray<Negociacao> = readonly Negociacao[]
  public lista(): ReadonlyArray<Negociacao> {
    return this.negociacoes; // tornando o método somente leitura com ReadonlyArray, assim encapsulamos a lista negociações, se modificar, teremos erro de compilação.
  }
}
