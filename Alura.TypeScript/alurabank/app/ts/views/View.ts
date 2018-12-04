abstract class View<T> {
    private _elemento: JQuery;

    constructor(selector: string) {
        this._elemento = $(selector);
    }

    public update(model: T) {
        this._elemento.html(this.template(model));
    }

    protected abstract template(model: T) : string;
}