import { Negociacao } from "./Negociacao";

export class Negociacoes {
    private _negociacoes : Negociacao[] = [];

    constructor() {

    }

    public add(negociacao: Negociacao) {
        this._negociacoes.push(negociacao);
    }

    public asArray() : Negociacao[] {
        //return Object.assign([], this._negociacoes);
        return ([] as Negociacao[]).concat(this._negociacoes);
    }
    
    
}