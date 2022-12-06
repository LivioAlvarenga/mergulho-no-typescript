export class Negociacao {
  constructor(private _data: Date, private _quantidade: number, private _valor: number) {}

  // getters
  get data(): Date {
    const data = new Date(this._data.getTime()); // programação defensiva, se modificar a data modifica a copia da data, getTime() cria uma copia de this._data
    return data;
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
