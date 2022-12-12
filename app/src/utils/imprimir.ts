import { Imprimivel } from "./imprimivel.js";

export function imprimir(...objetos: Array<Imprimivel>) {
  for (let obj of objetos) {
    console.log(obj.paraTexto());
  }
}
