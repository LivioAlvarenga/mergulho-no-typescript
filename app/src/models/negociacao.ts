import { Imprimivel } from "../utils/imprimivel.js";

export class Negociacao extends Imprimivel {
  constructor(private _data: Date, private _quantidade: number, private _valor: number) {
    super();
  }

  // getters
  get data(): Date {
    const data = new Date(this._data.getTime()); // programação defensiva, se modificar a data modifica a copia da data, getTime() cria uma copia de this._data
    return data;
  }

  // Tornando um método static você não precisa instanciar a class para ter acesso ao método.
  public static criaDe(
    dataString: string,
    quantidadeString: string,
    valorString: string
  ): Negociacao {
    const exp = /-/g; // Expressão regular que encontra todos -
    const date = new Date(dataString.replace(exp, ","));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);
    return new Negociacao(date, quantidade, valor);
  }

  get quantidade(): number {
    return this._quantidade;
  }
  get valor(): number {
    return this._valor;
  }
  get volume(): number {
    return this._valor * this._quantidade;
  }

  public paraTexto(): string {
    return `
      Data: ${this.data},
      Quantidade: ${this.quantidade},
      Valor: ${this.valor},
    `;
  }
}

/* Uma outra forma de fazer o construtor somente com public readonly
export class Negociacao {
  constructor(
    private _data: Date, 
    public readonly quantidade: number, 
    public readonly valor: number
  ) {}

  get volume(): number {
    return this.valor * this.quantidade;
  }

  get data(): Date {
    const data = new Date(this._data.getTime()); // programação defensiva, se modificar a data modifica a copia da data, getTime() cria uma copia de this._data
    return data;
  }
}
*/
