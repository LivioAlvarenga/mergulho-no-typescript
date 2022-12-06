export class Negociacao {
  constructor(private _data: Date, private _quantidade: number, private _valor: number) {}

  // getters
  get data(): Date {
    return this._data;
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
    public readonly data: Date, 
    public readonly quantidade: number, 
    public readonly valor: number
  ) {}

  get volume(): number {
    return this.valor * this.quantidade;
  }
}
*/
