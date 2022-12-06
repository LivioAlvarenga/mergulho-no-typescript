// Obs adicionar .js apos importação automática do vscode
import { NegociacaoController } from "./controllers/negociacao-controller.js";

// criando um controller com NegociacaoController()
const controller = new NegociacaoController();

// pegando o form no dom
const form = document.querySelector(".form");
form.addEventListener("submit", (event: Event) => {
    event.preventDefault(); // cancelando o auto carregamento da pagina ao submeter o formulário
    controller.adiciona();
})
