class Carrinho {
    clickIncremento(button) {
        let dataItem = this.getData(button);

        dataItem.Quantidade++;

        this.postQuantidade(dataItem);
    }

    clickDecremento(button) {
        let dataItem = this.getData(button);

        dataItem.Quantidade--;

        this.postQuantidade(dataItem);
    }

    updateQuantidade(input) {
        let dataItem = this.getData(input);

        this.postQuantidade(dataItem);
    }

    getData(elemento) {
        var linhaDoItem = $(elemento).parents("[item-id]")
        var itemId = $(linhaDoItem).attr("item-id");
        var novaQtde = $(linhaDoItem).find('input').val();

        var dataItem = {
            Id: itemId,
            Quantidade: novaQtde
        };
        return dataItem;
    }

    postQuantidade(dataItem) {
        let token = $('[name=__RequestVerificationToken]').val();

        let headers = {};
        headers['RequestVerificationToken'] = token;

        $.ajax({
            url: "/pedido/updatequantidade",
            type: "POST",
            contentType: "application/json",
            headers: headers,
            data: JSON.stringify(dataItem)
        }).done(function (response) {
            let itemPedido = response.itemPedido;
            let linhaDoItem = $('[item-id=' + itemPedido.id + ']');
            linhaDoItem.find('input').val(itemPedido.quantidade);
            linhaDoItem.find('[subtotal]').html((itemPedido.subtotal).duasCasas());

            let carrinho = response.carrinhoViewModel;
            $('[numero-itens]').html('Total: ' + carrinho.itens.length + ' itens');

            if (itemPedido.quantidade == 0) {
                linhaDoItem.remove();
            }
        });
    }
}

var carrinho = new Carrinho();

Number.prototype.duasCasas = function () {
    return this.toFixed(2).replace('.', ',');
}