class Negociacoes {
    private _negociacoes : Negociacao[] = [];

    constructor() {

    }

    public add(negociacao: Negociacao) {
        this._negociacoes.push(negociacao);
    }

    public asArray() : Negociacao[] {
        return [].concat(this._negociacoes);
    }
    
    
}