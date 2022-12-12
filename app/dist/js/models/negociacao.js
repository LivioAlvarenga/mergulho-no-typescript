import { Imprimivel } from "../utils/imprimivel.js";
export class Negociacao extends Imprimivel {
    constructor(_data, _quantidade, _valor) {
        super();
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    static criaDe(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ","));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
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
    paraTexto() {
        return `
      Data: ${this.data},
      Quantidade: ${this.quantidade},
      Valor: ${this.valor},
    `;
    }
}
