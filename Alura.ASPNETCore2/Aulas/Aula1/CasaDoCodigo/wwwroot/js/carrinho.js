class Carrinho {
    clickIncremento(btn) {
        let dataItem = this.getData(btn);

        dataItem.Quantidade++;

        this.postQuantidade(dataItem);
    }

    clickDecremento() {
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
        });
    }
}

var carrinho = new Carrinho();