class Negociacao {

    private _data;
    private _quantidade;
    private _valor

    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    
    public get data() {
        return this._data;
    }

    public get quantidade() {
        return this._quantidade;
    }

    public get valor() {
        return this._valor;
    }

    public get volume() {
        return this._quantidade * this._valor;
    }
    
}