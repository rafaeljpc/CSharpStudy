class NegociacaoController {

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
        const negociacao = new Negociacao(
            DateHelper.parseDate(this._inputData.val() + ""),
            parseInt(this._inputQuantidade.val() + ""),
            parseFloat(this._inputValor.val() + "")
        );

        this._negociacoes.add(negociacao);
        
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociacao adicionada com sucesso');
    }
}