// abstract class não pode criar uma instancia dela, somente os filhos podem usar
export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
}
