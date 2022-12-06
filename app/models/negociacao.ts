export class Negociacao {
  private _data; // private para informar atributo privado no TS, posso também usar o public para atributos públicos
  private _quantidade;
  private _valor;

  constructor(data, quantidade, valor) {
    this._data = data;
    this._quantidade = quantidade;
    this._valor = valor;
  }

  // getters
  get data() {
    return this._data;
  }
  get quantidade() {
    return this._quantidade;
  }
  get valor() {
    return this._valor;
  }
  get volume() {
    return this._valor * this._quantidade;
  }
}
