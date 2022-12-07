// abstract class não pode criar uma instancia dela, somente os filhos podem usar
export abstract class View<T> {
  protected elemento: HTMLElement; // protected so eu View tenho acesso a este elemento, mas minhas filhas podem tocar
  private escapar = false; // Não preciso tipar, pois ja atribuímos false e o typescript ja tipa como boolean

  constructor(seletor: string, escapar?: boolean) {
    this.elemento = document.querySelector(seletor);
    if (escapar) {
      this.escapar = escapar;
    }
  }

  public update(model: T): void {
    let template = this.template(model);
    // Protegendo o template de inserção de script, se escapar for true ele verifica com a regex e substitui o script por ""
    if (this.escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, "");
    }

    this.elemento.innerHTML = template;
  }

  // tornando o método template para abstract, se a classe filha não implementar o template nem realiza a compilação, dando erro em ambiente DEV.
  protected abstract template(model: T): string;
  // Ao tornar o método template para protect o único que consegue ve-lo são as classes filhas. 
}
