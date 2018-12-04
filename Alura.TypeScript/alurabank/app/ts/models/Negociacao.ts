class Negociacao {

    constructor(private _data: Date, private _quantidade: number, private _valor: number) {    
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