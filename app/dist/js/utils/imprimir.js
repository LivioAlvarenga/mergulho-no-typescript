export function imprimir(...objetos) {
    for (let obj of objetos) {
        console.log(obj.paraTexto());
    }
}
