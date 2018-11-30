class Carrinho {
    clickIncremento(btn) {
        let dataItem = this.getData(btn);

        dataItem.Quantidade++;

        this.postQuantidade(dataItem);
    }

    clickDecremento(btn) {
        let dataItem = this.getData(btn);

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
        $.ajax({
            url: "/pedido/updatequantidade",
            type: "POST",
            contentType: "application/json",
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

            debugger;
        });
    }
}

var carrinho = new Carrinho();

Number.prototype.duasCasas = function () {
    return this.toFixed(2).replace('.', ',');
}