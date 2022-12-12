
// abstract class não pode criar uma instancia dela, somente os filhos podem usar
export abstract class View<T> {
  protected elemento: HTMLElement; // protected so eu View tenho acesso a este elemento, mas minhas filhas podem tocar

  constructor(seletor: string) {
    const elemento = document.querySelector(seletor);
    if (elemento) {
      this.elemento = elemento as HTMLElement;
    } else {
      throw Error(`Seletor ${seletor} não existe no DOM`);
    }
  }

  /* @tempoDeExecucao(true)
  @inspect() */
  public update(model: T): void {
    let template = this.template(model);
    this.elemento.innerHTML = template;
  }

  // tornando o método template para abstract, se a classe filha não implementar o template nem realiza a compilação, dando erro em ambiente DEV.
  protected abstract template(model: T): string;
  // Ao tornar o método template para protect o único que consegue ve-lo são as classes filhas.
}
