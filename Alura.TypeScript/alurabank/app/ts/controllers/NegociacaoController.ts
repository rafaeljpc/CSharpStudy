import { DateHelper } from "../helpers/index";
import { Negociacoes, Negociacao } from "../models/index";
import { MensagemView, NegociacoesView } from "../views/index";

export class NegociacaoController {

    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

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
