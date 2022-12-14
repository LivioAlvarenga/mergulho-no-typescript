import { domInjector } from "../decorators/dom-injector.js";
import { inspect } from "../decorators/inspect.js";
import { tempoDeExecucao } from "../decorators/tempo-de-execucao.js";
import { DiasDaSemana } from "../enumerations/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { imprimir } from "../utils/imprimir.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  @domInjector("#data")
  private inputData: HTMLInputElement;
  @domInjector("#quantidade")
  private inputQuantidade: HTMLInputElement;
  @domInjector("#valor")
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes(); // Como ja estou atribuindo Negociacoes(), não preciso tipar
  private negociacoesView = new NegociacoesView("#negociacoesView");
  private mensagemView = new MensagemView("#mensagemView");
  private negociacoesService = new NegociacoesService();

  constructor() {
    this.negociacoesView.update(this.negociacoes);
  }

  @inspect()
  @tempoDeExecucao()
  public adiciona(): void {
    // Chamar o método(criaDe) sem instanciar a class(Negociacao) so é possível pois o método criaDe é um static
    const negociacao = Negociacao.criaDe(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
    );

    if (!this.ehDiaUtil(negociacao.data)) {
      this.mensagemView.update("Apenas negociações em dias úteis são aceitas");
      return;
    }

    this.negociacoes.adiciona(negociacao);
    imprimir(negociacao, this.negociacoes);
    this.limparForm();
    this.atualizaView();
  }

  public importaDados(): void {
    this.negociacoesService
      .obterNegociacoesDoDia()
      .then((negociacoesDeHoje) => {
        return negociacoesDeHoje.filter((negociacoesDeHoje) => {
          return !this.negociacoes
            .lista()
            .some((negociacao) => negociacao.ehIgual(negociacoesDeHoje));
        });
      })
      .then((negociacoes) => {
        for (let negociacao of negociacoes) {
          this.negociacoes.adiciona(negociacao);
        }
        this.negociacoesView.update(this.negociacoes);
      });
  }

  private ehDiaUtil(data: Date) {
    // getDay() retorna 0 a 6, onde 0(Domingo) e 6(Sábado)
    return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
  }

  private limparForm(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
    this.inputData.focus();
  }

  private atualizaView() {
    this.negociacoesView.update(this.negociacoes);
    this.mensagemView.update("Negociação adicionada com sucesso");
  }
}
