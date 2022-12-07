export function tempoDeExecucao(emSegundos: boolean = false) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const métodoOriginal = descriptor.value;
    descriptor.value = function (...args: Array<any>) {
      let divisor = 1;
      let unidade = "milissegundos";
      if (emSegundos) {
        divisor = 1000;
        unidade = "segundos";
      }
      const t1 = performance.now();
      const retorno = métodoOriginal.apply(this, args);
      const t2 = performance.now();
      console.log(
        `   >>> ${propertyKey}, tempo de execução: ${(t2 - t1) / divisor} ${unidade}.`
      );
      retorno;
    };

    return descriptor;
  };
}
