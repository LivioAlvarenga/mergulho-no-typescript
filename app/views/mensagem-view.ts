import { View } from "./view.js";

export class MensagemView extends View<string> {

    // Ao tornar o método template para protect o único que consegue ve-lo são as classes filhas. 
    protected template(model: string): string {
    return `
        <p class="alert alert-info">${model}</p>
    `;
  }

}
