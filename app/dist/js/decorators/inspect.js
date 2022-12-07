export function inspect() {
    return function (target, propertyKey, descriptor) {
        const métodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`--- Método: ${propertyKey}`);
            console.log(`------ parâmetros: ${JSON.stringify(args)}`);
            const retorno = métodoOriginal.apply(this, args);
            console.log(`------ retorno: ${JSON.stringify(retorno)}`);
            return retorno;
        };
        return descriptor;
    };
}
