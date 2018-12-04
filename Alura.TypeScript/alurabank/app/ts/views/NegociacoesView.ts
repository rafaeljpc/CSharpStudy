class NegociacoesView {

    private _elemento: Element;

    constructor(selector: string) {
        this._elemento = document.querySelector(selector);
    }

    private template(model: Negociacoes) : string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
                ${model.asArray().map(negociacao => `
                    <tr>
                        <td>${DateHelper.toString(negociacao.data)}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                        <td>${negociacao.volume}</td>
                    </tr>
                `).join('')}
            </tbody>

            <tfoot>
            </tfoot>
        </table> 
        `;
    }

    public update(model: Negociacoes) {
        this._elemento.innerHTML = this.template(model);
        debugger;
    }

}