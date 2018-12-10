import { DateHelper } from "../helpers/index";
import { DomInject } from "../helpers/decorators/index";
import { Negociacoes, Negociacao } from "../models/index";
import { MensagemView, NegociacoesView } from "../views/index";

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

    constructor() {}

    adiciona(event: Event) {
        event.preventDefault();

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
}
