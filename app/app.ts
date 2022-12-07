// Obs adicionar .js apos importação automática do vscode
import { NegociacaoController } from "./controllers/negociacao-controller.js";

// criando um controller com NegociacaoController()
const controller = new NegociacaoController();

// pegando o form no dom
const form = document.querySelector(".form");

// como habilitamos "strictNullChecks": true, agora ele informa que todas as variáveis são Null, neste ex: O tipo 'Element | null' assim podemos informar que garantimos que ele será HTMLInputElement. Podemos fazer de duas formas: <HTMLInputElement> ou as HTMLInputElement. Ou criamos um if para tratar o erro de caso não achar no DOM o .form
if (form) {
  form.addEventListener("submit", (event: Event) => {
    event.preventDefault(); // cancelando o auto carregamento da pagina ao submeter o formulário
    controller.adiciona();
  });
} else {
  throw Error("Não foi possível inicializar a aplicação. Verifique se o form existe.");
}
