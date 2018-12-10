export abstract class View<T> {
    private _elemento: JQuery;

    constructor(selector: string, readonly escapar: boolean = true) {
        this._elemento = $(selector);
    }

    public update(model: T) {
        let template = this.template(model);
        if (this.escapar)
            template = template.replace(/<script>[\s\S]*?<\/script>/g,'');

        this._elemento.html(template);
    }

    protected abstract template(model: T) : string;
}