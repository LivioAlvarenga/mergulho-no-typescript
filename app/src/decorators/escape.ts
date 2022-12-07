// para este decorator não utilizamos um wrapper de function, usamos somente uma function, pois não teremos parâmetros. Atenção ao chamar o decorator => @escape  (não usamos (parenteses))
export function escape(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const métodoOriginal = descriptor.value;
  descriptor.value = function (...args: any[]) {
    let retorno = métodoOriginal.apply(this, args);
    if (typeof retorno === "string") {
      /* console.log(
        `@escape em ação na classe ${this.constructor.name} para o método ${propertyKey}.`
      ); */
      // Protegendo o template de inserção de script, onde estiver o @escape ele verifica com a regex e substitui o script por ""
      retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, "");
    }
    return retorno;
  };
  return descriptor;
}
