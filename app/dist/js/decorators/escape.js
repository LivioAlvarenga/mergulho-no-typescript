export function escape(target, propertyKey, descriptor) {
    const métodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        let retorno = métodoOriginal.apply(this, args);
        if (typeof retorno === "string") {
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, "");
        }
        return retorno;
    };
    return descriptor;
}
