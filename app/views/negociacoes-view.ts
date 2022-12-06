import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {

    // Ao tornar o método template para protect o único que consegue ve-lo são as classes filhas. 
    protected template(model: Negociacoes): string {
    return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${model
                  .lista()
                  .map((negociacao) => {
                    return `
                        <tr>
                            <th>${this.formatarData(negociacao.data)}</th>
                            <th>${negociacao.quantidade}</th>
                            <th>${negociacao.valor}</th>
                        </tr>
                    `;
                  })
                  .join("")}
            </tbody>
        </table>
    `;
  }

  // este método so é visível para esta class, pois é private
  private formatarData(data: Date): string {
    return new Intl.DateTimeFormat().format(data)
  }

}
