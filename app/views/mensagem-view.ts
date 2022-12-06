import { View } from "./view.js";

export class MensagemView extends View {

  template(model: string): string {
    return `
        <p class="alert alert-info">${model}</p>
    `;
  }

  update(model: string): void {
    this.elemento.innerHTML = this.template(model);
  }

}
