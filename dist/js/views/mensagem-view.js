import { View } from "./view.js";
export class MensagemView extends View {
    // Ao tornar o método template para protect o único que consegue ve-lo são as classes filhas. 
    template(model) {
        return `
        <p class="alert alert-info">${model}</p>
    `;
    }
}
