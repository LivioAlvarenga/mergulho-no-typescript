export class NegociacoesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(model) {
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
                            <th>${new Intl.DateTimeFormat().format(negociacao.data)}</th>
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
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
}
