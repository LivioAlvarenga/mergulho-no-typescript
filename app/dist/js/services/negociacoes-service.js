import { Negociacao } from "../models/negociacao.js";
export class NegociacoesService {
    obterNegociacoesDoDia() {
        return fetch("http://localhost:8080/dados")
            .then((response) => response.json())
            .then((dados) => {
            return dados.map((data) => {
                return new Negociacao(new Date(), data.vezes, data.montante);
            });
        });
    }
}
