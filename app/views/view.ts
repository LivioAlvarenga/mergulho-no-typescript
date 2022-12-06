export class View {
  protected elemento: HTMLElement; // protected so eu View tenho acesso a este elemento, mas minhas filhas podem tocar

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }
}
