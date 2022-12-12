import { Modelo } from "../interfaces/modelo.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Modelo<Negociacoes> {
  private negociacoes: Array<Negociacao> = []; // Array<Negociacao> = Negociacao[]

  public adiciona(negociacao: Negociacao): void {
    this.negociacoes.push(negociacao);
  }

  // ReadonlyArray<Negociacao> = readonly Negociacao[]
  public lista(): ReadonlyArray<Negociacao> {
    return this.negociacoes; // tornando o método somente leitura com ReadonlyArray, assim encapsulamos a lista negociações, se modificar, teremos erro de compilação.
  }

  public paraTexto(): string {
    return JSON.stringify(this.negociacoes, null, 2);
  }

  public ehIgual(negociacoes: Negociacoes): boolean {
    return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista());
  }
}
