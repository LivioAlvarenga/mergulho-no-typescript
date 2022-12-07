/* template de decorators
export function inspect() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const métodoOriginal = descriptor.value;
    descriptor.value = function (...args: any[]) {
        const retorno = métodoOriginal.apply(this, args);
        return retorno;
    };
    return descriptor;
  };
}
*/
export function inspect() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const métodoOriginal = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log(`--- Método: ${propertyKey}`);
      console.log(`------ parâmetros: ${JSON.stringify(args)}`);
      const retorno = métodoOriginal.apply(this, args);
      console.log(`------ retorno: ${JSON.stringify(retorno)}`);
      return retorno;
    };
    return descriptor;
  };
}
