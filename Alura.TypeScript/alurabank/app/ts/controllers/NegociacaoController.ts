import { DateHelper } from "../helpers/index";
import { DomInject, Throttle } from "../helpers/decorators/index";
import { Negociacoes, Negociacao, NegociacaoParcial } from "../models/index";
import { MensagemView, NegociacoesView } from "../views/index";
import { NegociacaoService } from "./services/NegociacaoService";

let timer = 0;

export class NegociacaoController {

    @DomInject('#data')
    private _inputData: JQuery;

    @DomInject('#quantidade')
    private _inputQuantidade: JQuery;

    @DomInject('#valor')
    private _inputValor: JQuery;

    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');
    private _negociacaoService = new NegociacaoService();

    constructor() {}

    @Throttle(500)
    adiciona(event: Event) {
        let data = DateHelper.parseDate(this._inputData.val() + "");

        if (!DateHelper.IsUsefulDay(data)) {
            this._mensagemView.update('Somente negociações em dias uteis');
            return;
        }

        const negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.val() + ""),
            parseFloat(this._inputValor.val() + "")
        );

        this._negociacoes.add(negociacao);
        
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociacao adicionada com sucesso');
    }

    @Throttle(500)
    async importaDados() {
        function isOk(res: Response) {
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            return res;
        }

        const negociacoes = await this._negociacaoService.obterNegociacoes(isOk);
        negociacoes.forEach(negociacao => this._negociacoes.add(negociacao));

        this._negociacoesView.update(this._negociacoes);
    }
}
