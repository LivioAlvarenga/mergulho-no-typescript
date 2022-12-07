export function tempoDeExecucao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const métodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let divisor = 1;
            let unidade = "milissegundos";
            if (emSegundos) {
                divisor = 1000;
                unidade = "segundos";
            }
            const t1 = performance.now();
            const retorno = métodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`   >>> ${propertyKey}, tempo de execução: ${(t2 - t1) / divisor} ${unidade}.`);
            retorno;
        };
        return descriptor;
    };
}
