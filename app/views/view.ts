// abstract class não pode criar uma instancia dela, somente os filhos podem usar
export abstract class View<T> {
  protected elemento: HTMLElement; // protected so eu View tenho acesso a este elemento, mas minhas filhas podem tocar

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  update(model: T): void {
    this.elemento.innerHTML = this.template(model);
  }

  // tornando o método template para abstract, se a classe filha não implementar o template nem realiza a compilação, dando erro em ambiente DEV.
  protected abstract template(model: T): string;
  // Ao tornar o método template para protect o único que consegue ve-lo são as classes filhas. 
}
